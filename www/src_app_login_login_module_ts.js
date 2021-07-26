(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication-service/authentication.service */ 258);






let LoginPage = class LoginPage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
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
            window.alert(error.message);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 258:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/authentication-service/authentication.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);






let AuthenticationService = class AuthenticationService {
    constructor(afStore, ngFireAuth, router, ngZone) {
        this.afStore = afStore;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Login in with email/password
    SignIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
    // Register user with email/password
    RegisterUser(user) {
        return this.ngFireAuth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
            console.log("res", res);
            this.SetUserData(user, res.user);
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
    SetUserData(user, res) {
        if (res.uid) {
            this.updateProfile(user);
        }
        const userRef = this.afStore.doc(`users/${res.uid}`);
        const userData = {
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
    updateProfile(val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const profile = {
                displayName: val.displayName,
                photoURL: val.photoURL
            };
            return (yield this.ngFireAuth.currentUser).updateProfile(profile);
        });
    }
    getCurrentAccountInfoObservable(userId) {
        try {
            return this.afStore.collection('users').doc(userId).get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => user.data()));
        }
        catch (error) {
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
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#00000000;\n  color: white;\n}\n\nion-icon {\n  color: white;\n}\n\n.top-to-center {\n  position: relative;\n  top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFERTtFQUNJLFlBQUE7QUFJTjs7QUFGRTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUtOIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDBhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwMDAwMGE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDojMDAwMDAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC50b3AtdG8tY2VudGVye1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Log In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"top-to-center\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"email\" type=\"email\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"button\" color=\"danger\" expand=\"block\" (click)=\"logIn(email,password)\">Sign In</ion-button>\n        <!-- <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a> -->\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map