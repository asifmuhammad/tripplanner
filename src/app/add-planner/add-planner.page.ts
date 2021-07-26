import { Component, OnInit } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { CameraResultType,CameraOptions  } from '@capacitor/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';
import { Post } from '../shared/models/planner';
import { PlannerService } from '../shared/services/plannerService/planner.service';
import { SharedService } from '../shared/services/sharedService/shared.service';
const { Camera } = Plugins;

@Component({
  selector: 'app-add-planner',
  templateUrl: './add-planner.page.html',
  styleUrls: ['./add-planner.page.scss'],
})
export class AddPlannerPage implements OnInit {
  imageURL:any;
  base64Image='';
  title:any;
  description:any;
  plannerId:any;
  isUpdate=false;
//Uploaded Image List
planners:Post;
constructor(private activatedRoute: ActivatedRoute,private storage: AngularFireStorage, private database: AngularFirestore,
   private loadingController:LoadingController, private route:Router, private shareService:SharedService, 
  private authService: AuthenticationService, private plannerService:PlannerService) {
  this.planners = {
    id:'',
    filepath:'',
    title:'',
    description:'',
    bookmarks:{},
    postBy:'',
    createdAt:''
  };
}
ionViewWillEnter() {
  if (this.activatedRoute.snapshot.queryParams['id']) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.plannerId = params['id'];
      if(this.plannerId){
        this.isUpdate=true;
      }else{
        this.isUpdate=false;
      }
      if(this.isUpdate==true){
        this.readPlanner();
      }else{
        this.planners = {
          id:'',
          filepath:'',
          title:'',
          description:'',
          createdAt:'',
          postBy:''
        }; 
        this.base64Image='';
      }
      console.log("plannerId",this.plannerId)
    });
  }  
}
ngOnInit(){

}
loadImage() {
  const options: CameraOptions = {
    quality: 100,
    resultType: CameraResultType.DataUrl,
    saveToGallery: true,
  }

  Camera.getPhoto(options).then((imageData) => {
    this.base64Image = imageData.dataUrl;
    this.addPlanner();
   }, (err) => {
     console.log("error",err)
   });
}
async addPlanner() {  
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  });
  loading.present();
  var currentDate = Date.now();
  const file: any = this.base64ToImage(this.base64Image);
  const filePath = `Images/${currentDate}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`Images/${currentDate}`, file);
  task.snapshotChanges()
    .pipe(finalize(() => {
      let imageURL = fileRef.getDownloadURL();
      imageURL.subscribe(downloadURL => {
        loading.dismiss();
        if (downloadURL) {
          this.imageURL = downloadURL;
          this.planners.filepath = this.imageURL;
        }
        console.log(downloadURL);
      });
    })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
}
base64ToImage(dataURI) {
  const fileDate = dataURI.split(',');
  const byteString = atob(fileDate[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: 'image/png' });
  return blob;
}
submitForm(){
  if(this.isUpdate == false){
    const id = this.database.createId();
    this.addPlannerInToDB({
      id:id,
      filepath: this.planners.filepath,
      title:this.planners.title,
      description:this.planners.description,
      createdAt: Date.now(),
      postBy:this.authService.userData.uid,
      username:this.authService.userData.displayName,
      bookmarks:{},  
    });
  }else{
    this.updatePlanner();
  }
}
async addPlannerInToDB(data: Post) {
  //Create an ID for document

  const result = await this.plannerService.addPost(data);
  this.route.navigate(['tabs/home'])
}


updatePlanner() {
  this.database.collection('posts').doc(this.plannerId).update({
      title: this.planners.title,
      description: this.planners.description,
      filepath: this.planners.filepath,
    });
  this.shareService.presentToastMsg('Planner updated successfully!','success');
  this.route.navigate(['tabs/home'])
}
async readPlanner() {
  let document = await this.database
    .collection('posts')
    .doc(this.plannerId)
    .get()
    .toPromise();
  this.planners = document.data();
  this.base64Image = this.planners.filepath
  console.log("Planner read",this.planners)
}
deletePlanner() {
  this.database
    .collection('posts')
    .doc(this.plannerId)
    .delete();
  this.shareService.presentToastMsg('Planner deleted successfully!','warning');
  this.route.navigate(['tabs/home'])
}
}