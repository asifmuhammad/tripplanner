import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';
import { Post } from '../shared/models/planner';
import { PlannerService } from '../shared/services/plannerService/planner.service';
import { SharedService } from '../shared/services/sharedService/shared.service';
// eslint-disable-next-line @typescript-eslint/naming-convention
// @ts-ignore
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-planner',
  templateUrl: './add-planner.page.html',
  styleUrls: ['./add-planner.page.scss'],
})
export class AddPlannerPage implements OnInit {
  imageURL: any;
  base64Image='';
  title: string;
  description: string;
  plannerId: string;
  isUpdate=false;
//Uploaded Image List
planners: Post;
constructor(private activatedRoute: ActivatedRoute,private storage: AngularFireStorage, private database: AngularFirestore,
   private loadingController: LoadingController, private route: Router, private shareService: SharedService,
  private authService: AuthenticationService, private plannerService: PlannerService) {
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
  if (this.activatedRoute.snapshot.queryParams.id) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.plannerId = params.id;
      if(this.plannerId){
        this.isUpdate=true;
      }else{
        this.isUpdate=false;
      }
      // eslint-disable-next-line eqeqeq
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
      console.log('plannerId',this.plannerId);
    });
  }
}
ngOnInit(){

}
  async loadImage() {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
    }).then(
      (imageData) => {
        this.base64Image = imageData.dataUrl;
        this.addPlanner();
      },
      (err) => {
        // Handle error
      }
    );
  }


async addPlanner() {
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  });
  loading.present();
  const currentDate = Date.now();
  const file: any = this.base64ToImage(this.base64Image);
  const filePath = `Images/${currentDate}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`Images/${currentDate}`, file);
  task.snapshotChanges()
    .pipe(finalize(() => {
      const imageURL = fileRef.getDownloadURL();
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
  if(this.isUpdate === false){
    const id = this.database.createId();
    this.addPlannerInToDB({
      id,
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
  this.route.navigate(['tabs/home']);
}


updatePlanner() {
  this.database.collection('posts').doc(this.plannerId).update({
      title: this.planners.title,
      description: this.planners.description,
      filepath: this.planners.filepath,
    });
  this.shareService.presentToastMsg('Planner updated successfully!','success');
  this.route.navigate(['tabs/home']);
}
async readPlanner() {
  const document = await this.database
    .collection('posts')
    .doc(this.plannerId)
    .get()
    .toPromise();
  this.planners = document.data();
  this.base64Image = this.planners.filepath;
  console.log('Planner read',this.planners);
}
deletePlanner() {
  this.database
    .collection('posts')
    .doc(this.plannerId)
    .delete();
  this.shareService.presentToastMsg('Planner deleted successfully!','warning');
  this.route.navigate(['tabs/home']);
}
}
