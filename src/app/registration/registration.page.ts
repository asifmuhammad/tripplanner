import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAccountInfo } from '../shared/models/app-account-info.model';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';
import { CameraResultType,CameraOptions, Plugins  } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
const { Camera } = Plugins;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  imageURL:any;
  data :AppAccountInfo = {
    displayName:'',
    email: '',
    photoURL:'',
    password: '',
  };
  base64Image='';
  constructor(private authService:AuthenticationService,private storage: AngularFireStorage, private router:Router, private loadingController:LoadingController) { }

  ngOnInit() {
  }
  submit(){
    this.authService.RegisterUser(this.data)      
    .then((res) => {
      this.router.navigate(['login']); 
      // Do something here
    }).catch((error) => {
      window.alert(error.message)
    })
}
loadImage() {
  debugger;
  const options: CameraOptions = {
    quality: 100,
    resultType: CameraResultType.DataUrl,
    saveToGallery: true,
  }

  Camera.getPhoto(options).then((imageData) => {
    this.base64Image = imageData.dataUrl;
    this.uploadProfile();
   }, (err) => {
     console.log("error",err)
   });
}
async uploadProfile() {
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  });
  loading.present();
  var currentDate = Date.now();
  const file: any = this.base64ToImage(this.base64Image);
  const filePath = `UsersProfile/${currentDate}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`UsersProfile/${currentDate}`, file);
  task.snapshotChanges()
    .pipe(finalize(() => {
      let imageURL = fileRef.getDownloadURL();
      imageURL.subscribe(downloadURL => {
        loading.dismiss();
        if (downloadURL) {
          this.imageURL = downloadURL;
          this.data.photoURL = this.imageURL;
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
}
