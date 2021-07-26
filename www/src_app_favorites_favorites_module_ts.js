(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_favorites_favorites_module_ts"],{

/***/ 9528:
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 6130);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 5407:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 9528);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 6130);







let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 6130:
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorites.page.html */ 8796);
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss */ 7662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/plannerService/planner.service */ 3604);








let FavoritesPage = class FavoritesPage {
    constructor(route, database, plannerService, loadingController) {
        this.route = route;
        this.database = database;
        this.plannerService = plannerService;
        this.loadingController = loadingController;
        this.planners = [];
        this.postsData = false;
        this.bookmarkedPosts = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let currentUser = localStorage.getItem("user");
        this.currentUser = JSON.parse(currentUser);
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.bookmarkedPostsSubscription = this.plannerService
                .getBookmarkedPosts(this.currentUser.uid)
                .subscribe((posts) => {
                this.postsData = true;
                this.bookmarkedPosts = posts;
                console.log("bookmarked", this.bookmarkedPosts);
            });
        }))();
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _shared_services_plannerService_planner_service__WEBPACK_IMPORTED_MODULE_2__.PlannerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritesPage);



/***/ }),

/***/ 7662:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:#000000a6;\n  color: white;\n}\n\nion-content {\n  --background:#000000a6;\n  color: white;\n}\n\nion-item {\n  --background:#000000a6;\n  color: white;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-icon {\n  position: absolute;\n  top: 0%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page ion-icon {\n  background-color: #fbb000;\n  border-radius: 5px;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRU47O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNOOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDUjs7QUFDTTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDVjs7QUFDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNOIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDojMDAwMDAwYTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDBhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwMDAwMGE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzYlO1xyXG4gICAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjBlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmIwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUyJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 8796:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <div *ngIf=\"!postsData\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <br/>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n  <div *ngIf=\"postsData\">\n    <ion-item lines=\"none\" *ngIf=\"bookmarkedPosts.length == 0\">    \n      <ion-label style=\"text-align: center;\" >No Record found</ion-label>\n    </ion-item>\n  <ion-card *ngFor=\"let planner of bookmarkedPosts\">\n    <img [src]=\"planner.filepath\"/>\n    <!-- <div class=\"card-icon\"><ion-icon style=\"float: left\" name=\"create-outline\"></ion-icon><ion-icon style=\"float: right;\" name=\"star\"></ion-icon></div> -->\n    <div class=\"card-title\">{{planner.title}}</div>\n    <!-- <div class=\"card-subtitle\">41 Listings</div> -->\n    <ion-card-content style=\"text-align: start;\">\n      {{planner.description}}\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_favorites_favorites_module_ts.js.map