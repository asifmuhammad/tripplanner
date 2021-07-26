(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication-service/authentication.service */ 258);
/* harmony import */ var _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/plannerService/planner.service */ 3604);







let ProfilePage = class ProfilePage {
    constructor(router, authService, plannerService) {
        this.router = router;
        this.authService = authService;
        this.plannerService = plannerService;
        this.userData = false;
        this.userPosts = [];
        this.bookmarkedPosts = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let currentUser = localStorage.getItem("user");
        let user = JSON.parse(currentUser);
        this.authService.getCurrentAccountInfoObservable(user.uid).subscribe((currentUser) => {
            this.userData = true;
            this.currentAccountInfo = currentUser;
            console.log('currentAccountInfo', this.currentAccountInfo);
        }, (error) => {
            console.error('UserProfilePage -> ngOnInit -> error', error);
        });
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.bookmarkedPostsSubscription = this.plannerService
                .getBookmarkedPosts(user.uid)
                .subscribe((posts) => {
                this.bookmarkedPosts = posts;
                console.log("bookmarked", this.bookmarkedPosts);
            });
        }))();
    }
    logout() {
        this.authService.SignOut().then((res) => {
            this.router.navigate(['/start-page']);
            localStorage.clear();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_3__.PlannerService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background: url('background_full.jpg') no-repeat top center/cover fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\nion-content ion-button {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\nion-chip {\n  --background: #fbb000;\n  --color: #fff;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 200px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  height: 150px;\n  bottom: calc(-1*(80px + 4px));\n  border: 3px solid #fbb000;\n  background-color: #fff;\n  width: 150px;\n}\n\n.card-body {\n  background-color: black;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n  color: white;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: white;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksK0VBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFJUjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZJO0VBQ0ksYUFBQTtBQUlSOztBQUZRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFJaEI7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDWjs7QUFFUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQVoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDBhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwMDAwMGE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kX2Z1bGwuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlciBmaXhlZCwgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW1cclxuICAgIH1cclxufVxyXG5pb24tY2hpcCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmIwMDA7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyAvLyAyMHZoO1xyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2MHB4OyAvLzQwdndcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmYmIwMDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLnVzZXItbWV0YSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent no-border>\n  <ion-toolbar>\n      <ion-title color=\"light\">\n        Profile\n      </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" src=\"../../assets/img/checkmark-filled.svg\"></ion-icon>\n       </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n  <div *ngIf=\"!userData\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n  <div *ngIf=\"userData\">\n    <div class=\"card\">\n      <div class=\"header\">\n        <div class=\"avatar\">\n          <img *ngIf=\"currentAccountInfo?.photoURL == ''\" src=\"../../assets/img/player104.png\" alt=\"\">\n          <img *ngIf=\"currentAccountInfo?.photoURL != ''\" [src]=\"currentAccountInfo?.photoURL\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n          <h3 class=\"playername\">{{currentAccountInfo?.displayName}}</h3>\n          <p>{{currentAccountInfo?.email}}</p>\n          <h6 class=\"ranking\">Favorites: <ion-chip>\n              <ion-label>{{bookmarkedPosts?.length}}</ion-label>\n            </ion-chip>\n          </h6>          \n        <ion-button type=\"button\" color=\"danger\" expand=\"block\" (click)=\"logout()\">Logout</ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map