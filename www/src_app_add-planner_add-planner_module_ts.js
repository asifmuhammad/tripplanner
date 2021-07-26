(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_add-planner_add-planner_module_ts"],{

/***/ 8012:
/*!***********************************************************!*\
  !*** ./src/app/add-planner/add-planner-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlannerPageRoutingModule": () => (/* binding */ AddPlannerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_planner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-planner.page */ 5728);




const routes = [
    {
        path: '',
        component: _add_planner_page__WEBPACK_IMPORTED_MODULE_0__.AddPlannerPage
    }
];
let AddPlannerPageRoutingModule = class AddPlannerPageRoutingModule {
};
AddPlannerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPlannerPageRoutingModule);



/***/ }),

/***/ 1174:
/*!***************************************************!*\
  !*** ./src/app/add-planner/add-planner.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlannerPageModule": () => (/* binding */ AddPlannerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_planner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-planner-routing.module */ 8012);
/* harmony import */ var _add_planner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-planner.page */ 5728);







let AddPlannerPageModule = class AddPlannerPageModule {
};
AddPlannerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_planner_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPlannerPageRoutingModule
        ],
        declarations: [_add_planner_page__WEBPACK_IMPORTED_MODULE_1__.AddPlannerPage]
    })
], AddPlannerPageModule);



/***/ }),

/***/ 5728:
/*!*************************************************!*\
  !*** ./src/app/add-planner/add-planner.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlannerPage": () => (/* binding */ AddPlannerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_planner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-planner.page.html */ 6442);
/* harmony import */ var _add_planner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-planner.page.scss */ 1563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication-service/authentication.service */ 258);
/* harmony import */ var _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/plannerService/planner.service */ 3604);
/* harmony import */ var _shared_services_sharedService_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/sharedService/shared.service */ 2771);














const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;
let AddPlannerPage = class AddPlannerPage {
    constructor(activatedRoute, storage, database, loadingController, route, shareService, authService, plannerService) {
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.database = database;
        this.loadingController = loadingController;
        this.route = route;
        this.shareService = shareService;
        this.authService = authService;
        this.plannerService = plannerService;
        this.base64Image = '';
        this.isUpdate = false;
        this.planners = {
            id: '',
            filepath: '',
            title: '',
            description: '',
            bookmarks: {},
            postBy: '',
            createdAt: ''
        };
    }
    ionViewWillEnter() {
        if (this.activatedRoute.snapshot.queryParams['id']) {
            this.activatedRoute.queryParams.subscribe((params) => {
                this.plannerId = params['id'];
                if (this.plannerId) {
                    this.isUpdate = true;
                }
                else {
                    this.isUpdate = false;
                }
                if (this.isUpdate == true) {
                    this.readPlanner();
                }
                else {
                    this.planners = {
                        id: '',
                        filepath: '',
                        title: '',
                        description: '',
                        createdAt: '',
                        postBy: ''
                    };
                    this.base64Image = '';
                }
                console.log("plannerId", this.plannerId);
            });
        }
    }
    ngOnInit() {
    }
    loadImage() {
        const options = {
            quality: 100,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl,
            saveToGallery: true,
        };
        Camera.getPhoto(options).then((imageData) => {
            this.base64Image = imageData.dataUrl;
            this.addPlanner();
        }, (err) => {
            console.log("error", err);
        });
    }
    addPlanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            loading.present();
            var currentDate = Date.now();
            const file = this.base64ToImage(this.base64Image);
            const filePath = `Images/${currentDate}`;
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(`Images/${currentDate}`, file);
            task.snapshotChanges()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
                let imageURL = fileRef.getDownloadURL();
                imageURL.subscribe(downloadURL => {
                    loading.dismiss();
                    if (downloadURL) {
                        this.imageURL = downloadURL;
                        this.planners.filepath = this.imageURL;
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
    submitForm() {
        if (this.isUpdate == false) {
            const id = this.database.createId();
            this.addPlannerInToDB({
                id: id,
                filepath: this.planners.filepath,
                title: this.planners.title,
                description: this.planners.description,
                createdAt: Date.now(),
                postBy: this.authService.userData.uid,
                username: this.authService.userData.displayName,
                bookmarks: {},
            });
        }
        else {
            this.updatePlanner();
        }
    }
    addPlannerInToDB(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //Create an ID for document
            const result = yield this.plannerService.addPost(data);
            this.route.navigate(['tabs/home']);
        });
    }
    updatePlanner() {
        this.database.collection('posts').doc(this.plannerId).update({
            title: this.planners.title,
            description: this.planners.description,
            filepath: this.planners.filepath,
        });
        this.shareService.presentToastMsg('Planner updated successfully!', 'success');
        this.route.navigate(['tabs/home']);
    }
    readPlanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let document = yield this.database
                .collection('posts')
                .doc(this.plannerId)
                .get()
                .toPromise();
            this.planners = document.data();
            this.base64Image = this.planners.filepath;
            console.log("Planner read", this.planners);
        });
    }
    deletePlanner() {
        this.database
            .collection('posts')
            .doc(this.plannerId)
            .delete();
        this.shareService.presentToastMsg('Planner deleted successfully!', 'warning');
        this.route.navigate(['tabs/home']);
    }
};
AddPlannerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _shared_services_sharedService_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService },
    { type: _shared_services_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_4__.PlannerService }
];
AddPlannerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-add-planner',
        template: _raw_loader_add_planner_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_planner_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddPlannerPage);



/***/ }),

/***/ 1563:
/*!***************************************************!*\
  !*** ./src/app/add-planner/add-planner.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#00000000;\n  color: white;\n}\n\nion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbGFubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFERTtFQUNJLFlBQUE7QUFJTiIsImZpbGUiOiJhZGQtcGxhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDBhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwMDAwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 6442:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-planner/add-planner.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!isUpdate\">\n      Add New Planner\n    </ion-title>\n    <ion-title *ngIf=\"isUpdate\">\n      Update Planner\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-icon name=\"camera\" (click)=\"loadImage()\"></ion-icon>\n  </ion-item>  \n  <ion-card *ngIf=\"base64Image\" color=\"light\" class=\"ion-text-center\">\n    <ion-card-content>\n      <img [src]=\"base64Image\" />\n    </ion-card-content>\n  </ion-card>\n  <ion-item>\n    <ion-label position=\"stacked\">Title</ion-label>\n    <ion-input placeholder=\"Title\" [(ngModel)]=\"planners.title\"></ion-input>\n  </ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Description</ion-label>\n  <ion-textarea placeholder=\"Description\" [(ngModel)]=\"planners.description\"></ion-textarea>\n</ion-item>\n    <ion-button *ngIf=\"!isUpdate\" expand=\"block\" (click)=\"submitForm()\">Add Planner</ion-button>\n    <ion-button *ngIf=\"isUpdate\" expand=\"block\" color=\"success\" (click)=\"submitForm()\">Update Planner</ion-button>\n    <ion-button *ngIf=\"isUpdate\" expand=\"block\" color=\"danger\" (click)=\"deletePlanner()\">Delete</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-planner_add-planner_module_ts.js.map