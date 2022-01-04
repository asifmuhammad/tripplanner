import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AppAccountInfo } from '../../models/app-account-info.model';
import * as firebase from 'firebase';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password
  RegisterUser(user) {
    return this.ngFireAuth.createUserWithEmailAndPassword(user.email, user.password).then((res)=>{
console.log('res',res);
this.SetUserData(user,res.user);
    });
  }


  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }




  // Store user in localStorage
  SetUserData(user,res) {
    if(res.uid){
      this.updateProfile(user);
    }
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${res.uid}`);
    const userData: AppAccountInfo = {
      uid: res.uid,
      email: res.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: res.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  async updateProfile(val) {
    const profile = {
        displayName: val.displayName,
        photoURL: val.photoURL
    };
    return (await this.ngFireAuth.currentUser).updateProfile(profile);
}
 getCurrentAccountInfoObservable(userId): Observable<AppAccountInfo> {
  try {
    return this.afStore.collection('users').doc(userId).get().pipe(
      map(user => user.data())
    ) as Observable<AppAccountInfo>;
  } catch (error) {
    throw new Error(error);
  }
}
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

}
