(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_registration_registration_module_ts"],{

/***/ 4261:
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": () => (/* binding */ RegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page */ 9454);




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ 5375:
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": () => (/* binding */ RegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 4261);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page */ 9454);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
    })
], RegistrationPageModule);



/***/ }),

/***/ 9454:
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 2657);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 5078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication-service/authentication.service */ 258);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 1188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8939);










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins;
let RegistrationPage = class RegistrationPage {
    constructor(authService, storage, router, loadingController) {
        this.authService = authService;
        this.storage = storage;
        this.router = router;
        this.loadingController = loadingController;
        this.data = {
            displayName: '',
            email: '',
            photoURL: '',
            password: '',
        };
        this.base64Image = '';
    }
    ngOnInit() {
    }
    submit() {
        this.authService.RegisterUser(this.data)
            .then((res) => {
            this.router.navigate(['login']);
            // Do something here
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    loadImage() {
        debugger;
        const options = {
            quality: 100,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.DataUrl,
            saveToGallery: true,
        };
        Camera.getPhoto(options).then((imageData) => {
            this.base64Image = imageData.dataUrl;
            this.uploadProfile();
        }, (err) => {
            console.log("error", err);
        });
    }
    uploadProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            loading.present();
            var currentDate = Date.now();
            const file = this.base64ToImage(this.base64Image);
            const filePath = `UsersProfile/${currentDate}`;
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(`UsersProfile/${currentDate}`, file);
            task.snapshotChanges()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
                let imageURL = fileRef.getDownloadURL();
                imageURL.subscribe(downloadURL => {
                    loading.dismiss();
                    if (downloadURL) {
                        this.imageURL = downloadURL;
                        this.data.photoURL = this.imageURL;
                    }
                    console.log(downloadURL);
                });
            }))
                .subscribe(url => {
                if (url) {
                    console.log(url);
                }
            });
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
};
RegistrationPage.ctorParameters = () => [
    { type: _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 5078:
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background: url('background_full.jpg') no-repeat top center/cover fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\nion-content ion-button {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\nion-chip {\n  --background: #fbb000;\n  --color: #fff;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 200px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  height: 150px;\n  bottom: calc(-1*(80px + 4px));\n  border: 3px solid #fbb000;\n  background-color: #fff;\n  width: 150px;\n}\n\n.card-body {\n  background-color: black;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n  color: white;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: white;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBbEJGOztBQW9CQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQWpCRjs7QUFtQkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsK0VBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZkY7O0FBaUJFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZk47O0FBa0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQWlCRTtFQUNJLGFBQUE7QUFmTjs7QUFpQk07RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWZWOztBQWlCVTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFmWjs7QUFxQkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWxCRjs7QUFvQkU7RUFDSSxpQkFBQTtBQWxCTjs7QUFvQk07RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbEJWOztBQXFCTTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBbkJWIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhcntcclxuLy8gICAgIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgfVxyXG4vLyAgIGlvbi1jb250ZW50e1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDBhNjtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB9XHJcbi8vICAgaW9uLWl0ZW17XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IzAwMDAwMDAwO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIH1cclxuLy8gICBpb24taWNvbntcclxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIH1cclxuLy8gICAudG9wLXRvLWNlbnRlcntcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICB0b3A6IDIwJTtcclxuLy8gICB9XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRfZnVsbC5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyIGZpeGVkLCAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbVxyXG4gIH1cclxufVxyXG5pb24tY2hpcCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJiMDAwO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7IC8vIDIwdmg7XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxNjBweDsgLy80MHZ3XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZiYjAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLnVzZXItbWV0YSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cclxuICAgICAgLnBsYXllcm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2657:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n    <div class=\"card\">\n      <div class=\"header\" (click)=\"loadImage()\">\n        <div class=\"avatar\">\n          <img *ngIf=\"base64Image ===''\" src=\"../../assets/img/player104.png\" alt=\"\">   \n          <img *ngIf=\"base64Image!==''\" [src]=\"base64Image\" />       \n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Full Name</ion-label>\n            <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.displayName\" type=\"text\" required></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.email\" required></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input [(ngModel)]=\"data.password\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" required></ion-input>\n          </ion-item>        \n        <ion-button type=\"button\" color=\"danger\" expand=\"block\" (click)=\"submit()\">SignUp</ion-button>\n        </div>\n      </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_registration_registration_module_ts.js.map