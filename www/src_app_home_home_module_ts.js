(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/plannerService/planner.service */ 3604);
/* harmony import */ var _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication-service/authentication.service */ 258);
/* harmony import */ var _shared_services_sharedService_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/sharedService/shared.service */ 2771);









let HomePage = class HomePage {
    constructor(route, database, authentication, sharedService, plannerService) {
        this.route = route;
        this.database = database;
        this.authentication = authentication;
        this.sharedService = sharedService;
        this.plannerService = plannerService;
        this.planners = [];
        this.isFavrit = false;
        this.posts = [];
        this.postsData = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadRelatedPosts();
    }
    loadRelatedPosts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.sharedService.presentLoading();
            this.postsSubscription = this.plannerService.getRelatedPosts().subscribe(posts => {
                this.postsData = true;
                this.posts = posts;
                console.log("Related Post", this.posts);
            }, error => {
                console.error('HomePage -> ngOnInit -> error', error);
            });
        });
    }
    goToAdd() {
        this.route.navigate(['tabs/add-planner']);
    }
    goToUpdate(id) {
        this.route.navigate(['tabs/add-planner'], { queryParams: { id: id } });
    }
    toggleBookmark(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const isBookmarked = this.isBookmarked(post.bookmarks);
            if (!isBookmarked) {
                yield this.plannerService.bookmarkPost(post.id, this.authentication.userData.uid);
            }
            else {
                yield this.plannerService.undoBookmarkPost(post.id, this.authentication.userData.uid);
            }
        });
    }
    isBookmarked(bookmarks) {
        if (bookmarks) {
            if (bookmarks[this.authentication.userData.uid]) {
                return true;
            }
        }
        return false;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _shared_services_sharedService_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService },
    { type: _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_2__.PlannerService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



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

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#00000000;\n  color: white;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-icon {\n  position: absolute;\n  top: 0%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page ion-icon {\n  background-color: #fbb000;\n  border-radius: 5px;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUVOOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDTjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQ007RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQ1Y7O0FBQ0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDTiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM2JTtcclxuICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJkLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy4wZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICBcclxuICB9Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content class=\"card-background-page\">\n    <!-- Skeleton screen -->\n<div *ngIf=\"!postsData\">\n  <div class=\"ion-padding custom-skeleton\">\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <br/>\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    <br/>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <br/>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n    <br/>\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n  </div>\n</div>\n<!-- End -->\n<div *ngIf=\"postsData\">\n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"end\" name=\"add-outline\" (click)=\"goToAdd()\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"posts.length == 0\">    \n      <ion-label style=\"text-align: center;\" >No Record found</ion-label>\n    </ion-item>\n    <ion-card *ngFor=\"let planner of posts;let i = index\">\n      <img [src]=\"planner.filepath\"/>\n      <div class=\"card-icon\">\n        <ion-icon (click)=\"goToUpdate(planner.id)\" style=\"float: left\" name=\"create-outline\"></ion-icon>\n        <ion-icon *ngIf=\"isBookmarked(planner.bookmarks)\" name=\"star\" style=\"float: right;\" (click)=\"toggleBookmark(planner)\"></ion-icon>\n        <ion-icon style=\"float: right;\" *ngIf=\"!isBookmarked(planner.bookmarks)\" name=\"star-outline\" (click)=\"toggleBookmark(planner)\"></ion-icon>\n      </div>\n      <div class=\"card-title\">{{planner.title}}</div>\n      <!-- <div class=\"card-subtitle\">41 Listings</div> -->\n      <ion-card-content style=\"text-align: start;\">\n        {{planner.description}}\n      </ion-card-content>\n    </ion-card>\n  </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map