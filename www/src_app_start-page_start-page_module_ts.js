(self["webpackChunkTripplanner"] = self["webpackChunkTripplanner"] || []).push([["src_app_start-page_start-page_module_ts"],{

/***/ 6496:
/*!*********************************************************!*\
  !*** ./src/app/start-page/start-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPagePageRoutingModule": () => (/* binding */ StartPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _start_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-page.page */ 8601);




const routes = [
    {
        path: '',
        component: _start_page_page__WEBPACK_IMPORTED_MODULE_0__.StartPagePage
    }
];
let StartPagePageRoutingModule = class StartPagePageRoutingModule {
};
StartPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartPagePageRoutingModule);



/***/ }),

/***/ 2735:
/*!*************************************************!*\
  !*** ./src/app/start-page/start-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPagePageModule": () => (/* binding */ StartPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _start_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-page-routing.module */ 6496);
/* harmony import */ var _start_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-page.page */ 8601);







let StartPagePageModule = class StartPagePageModule {
};
StartPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPagePageRoutingModule
        ],
        declarations: [_start_page_page__WEBPACK_IMPORTED_MODULE_1__.StartPagePage]
    })
], StartPagePageModule);



/***/ }),

/***/ 8601:
/*!***********************************************!*\
  !*** ./src/app/start-page/start-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPagePage": () => (/* binding */ StartPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_start_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./start-page.page.html */ 1531);
/* harmony import */ var _start_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-page.page.scss */ 4198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StartPagePage = class StartPagePage {
    constructor() { }
    ngOnInit() {
    }
};
StartPagePage.ctorParameters = () => [];
StartPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start-page',
        template: _raw_loader_start_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_start_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StartPagePage);



/***/ }),

/***/ 4198:
/*!*************************************************!*\
  !*** ./src/app/start-page/start-page.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".already, .one-line {\n  color: white;\n}\n\n.center-position {\n  position: relative;\n  top: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoic3RhcnQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFscmVhZHksIC5vbmUtbGluZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2VudGVyLXBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1531:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"auth-form\" style=\"--background: #000000a6;\">\n  <ion-grid class=\"center-position\">\n    <ion-row>\n      <ion-col align-self-center>\n        <ion-button [routerLink]=\"['/registration']\" expand=\"block\" color=\"primary\">Register</ion-button>\n\n        <span class=\"divider line one-line\">or</span>&nbsp;\n\n        <span class=\"already\">Already a user?</span>\n\n        <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_start-page_start-page_module_ts.js.map