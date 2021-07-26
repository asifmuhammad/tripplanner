
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email='';
  password='';
  constructor(private router: Router, private authService:AuthenticationService) { }

  login() {
  }
  logIn(email, password) {
    this.authService.SignIn(email, password)
      .then((res) => {
        // if(this.authService.isEmailVerified) {   
          this.router.navigate(['tabs/home']);     
        // } else {
        //   window.alert('Email is not verified')
        //   return false;
        // }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
