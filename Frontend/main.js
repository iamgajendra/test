(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ym7":
/*!******************************************************************!*\
  !*** ./src/app/Components/home/main-page/main-page.component.ts ***!
  \******************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "qy5G");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-products/all-products.component */ "g3KF");
/* harmony import */ var _some_products_some_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./some-products/some-products.component */ "ENMt");




class MainPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 3, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-all-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-some-products");
    } }, directives: [_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__["ImageSliderComponent"], _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__["AllProductsComponent"], _some_products_some_products_component__WEBPACK_IMPORTED_MODULE_3__["SomeProductsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Murti\Murti\src\main.ts */"zUnb");


/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "+Ym7");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
    } }, directives: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "1ngR":
/*!*********************************************************!*\
  !*** ./src/app/Components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_Services_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mail.service */ "PPDD");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class ContactComponent {
    constructor(http, mail) {
        this.http = http;
        this.mail = mail;
        this.buttonText = "Send Message";
    }
    ngOnInit() {
    }
    sendMessage(contactForm) {
        this.buttonText = "Sending...";
        let user = {
            email: contactForm.value.email,
            message: contactForm.value.message,
        };
        this.mail.mail('http://localhost:3000/email', user).subscribe(data => {
            if (data) {
                this.buttonText = "Mail Sent Successfully!";
                console.log('mail sent');
            }
        }, err => {
            this.buttonText = "Mail not sent!";
            console.log(err);
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 45, vars: 2, consts: [["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutGap", "24px", "fxLayoutAlign", "space-between ", 1, "p-5"], ["fxFlex", "40", "fxLayout", "column"], [1, "fs-1", "p-3"], [1, "fs-5", "text-muted", "lh-base", "p-3"], [1, "fs-3", "p-3"], [1, "fs-6", "text-muted", "lh-1", "pt-4"], [1, "fs-6", "text-muted", "lh-1", "pt-2"], ["fxFlex", "50", "fxLayout", "column"], [1, "fs-1", "p-3", "pl-5"], [1, "p-3"], ["contactForm", "ngForm"], [1, "w-100"], ["matInput", "", "ngModel", "", "name", "firstName", "firstName", "", "required", ""], ["matInput", "", "ngModel", "", "name", "lastName", "lastName", ""], ["matInput", "", "ngModel", "", "placeholder", "pat@example.com", "name", "email", "email", "", "required", ""], ["matInput", "", "ngModel", "", "name", "message", "message", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled", "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Contact Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " If you have any problems,suggestions and feedback then please feel free to contact with us. Choose our communication soruces. We will love to hear from you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " +(91)9351649868,+(91)9829868726 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " startradingdwarka@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " H.O : Opp. Todhniwal Dharamshala Station Road, Makrana (Raj.) 341505 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " B.O : 1282,Khejron Ka Rasta Chandpole Bazar, Jaipur( Raj.) 302001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Write to Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.sendMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  padding: 6px 15px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBRk07RUFHTixZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBREYiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlIDogIzI4MzU5MztcclxuJG9yYW5nZTojZjQ0MzM2O1xyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "9Qwz":
/*!************************************************************!*\
  !*** ./src/app/Components/home/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");









const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 58, vars: 5, consts: [["color", "primary"], ["fxShow", "true", "fxHide.lt-sm", "true", 1, "toolbar-one"], [1, "fs-2", "p-5"], [1, "example-spacer"], [1, "toolbar-two"], ["fxShow", "true", "fxHide.gt-sm", "true", "fxLayoutAlign", "space-between center", 1, "w-100"], [1, "fs-5"], ["mat-icon-button", "", "fxLayoutAlign", "end", 3, "matMenuTriggerFor"], ["dropMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/", "routerLinkActive", "active1", 3, "routerLinkActiveOptions"], [1, "mr"], ["mat-menu-item", "", "routerLink", "about", "routerLinkActive", "active1"], ["mat-menu-item", "", "routerLinkActive", "active1", "routerLink", "products"], ["mat-menu-item", "", "routerLinkActive", "active1", "routerLink", "contact"], ["mat-menu-item", "", "routerLinkActive", "active1", "routerLink", "order-from-star-trading-company"], ["fxShow", "true", "fxHide.lt-md", "true"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/"], ["routerLinkActive", "active"], ["routerLink", "about"], ["routerLink", "products"], ["routerLink", "contact"], ["routerLink", "order-from-star-trading-company"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Star Trading Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Star Trading Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "contact_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "note_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n}\n\n.toolbar-one[_ngcontent-%COMP%] {\n  height: 90px;\n  padding: 47px !important;\n  font-family: \"Rye\", cursive;\n  color: #e1e3f8;\n  white-space: nowrap;\n}\n\n.toolbar-two[_ngcontent-%COMP%] {\n  height: 64px;\n  background: #283593;\n  white-space: nowrap;\n  visibility: visible;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 60px;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  padding-inline-start: 40px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #f44336;\n}\n\na[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 64px;\n  padding: 0 55px;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 3px 3px 0px 0px;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  background-color: #283593;\n  min-height: 93vh !important;\n}\n\n.fs-5[_ngcontent-%COMP%] {\n  font-family: \"Rye\", cursive;\n  color: #f44336;\n}\n\nbutton[_ngcontent-%COMP%]:hover   .mr[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQURKOztBQUdFO0VBQ0kseUJBTEU7QUFLUjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBL0JJO0VBZ0NKLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFFQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkF4REk7QUEwRFI7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkF6RUk7RUEwRUosMkJBQUE7QUFLSjs7QUFIQTtFQUNJLDJCQUFBO0VBQ0EsY0E3RUk7QUFtRlI7O0FBSEk7RUFDSSxjQWpGQTtBQXVGUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZSA6ICMyODM1OTM7XHJcbiRvcmFuZ2U6I2Y0NDMzNjtcclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlIDtcclxuICB9XHJcbiBcclxubWF0LXRvb2xiYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gcGFkZGluZzogMCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udG9vbGJhci1vbmV7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1J5ZScsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogI2UxZTNmODtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBcclxufVxyXG4udG9vbGJhci10d297XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG51bHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxufVxyXG5he1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDAgNTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubGl7XHJcbiAgICBwYWRkaW5nOjNweCAzcHggMHB4IDBweDtcclxufVxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDkzdmggIWltcG9ydGFudDtcclxuICB9XHJcbi5mcy01e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSeWUnLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICRvcmFuZ2U7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgLm1ye1xyXG4gICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG59XHJcbiAgIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD1Fe6JshIg6zlasLCxvY6xa5AsuoT63lk",
        authDomain: "murti-cc7cc.firebaseapp.com",
        databaseURL: "https://murti-cc7cc-default-rtdb.firebaseio.com",
        projectId: "murti-cc7cc",
        storageBucket: "murti-cc7cc.appspot.com",
        messagingSenderId: "1020691046929",
        appId: "1:1020691046929:web:bb8081e5c3be3e2141c7b0",
        measurementId: "G-SMNJVWHP5J"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DvXq":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/category-products/category-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductsComponent", function() { return CategoryProductsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/file-upload.service */ "ERu/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../loading/loading.component */ "f/hT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function CategoryProductsComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
} }
function CategoryProductsComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryProductsComponent_div_1_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Star Trading Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CategoryProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryProductsComponent_div_1_mat_card_1_Template, 6, 2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r1.fileUpload, (ctx_r1.page - 1) * ctx_r1.pageSize, (ctx_r1.page - 1) * ctx_r1.pageSize + ctx_r1.pageSize));
} }
class CategoryProductsComponent {
    constructor(route, getimagesService, changeDetectorRef) {
        this.route = route;
        this.getimagesService = getimagesService;
        this.changeDetectorRef = changeDetectorRef;
        this.loading = true;
        this.ImageFolder = [
            { path: '/Ganesh' },
            { path: '/Durga' },
            { path: '/Marble Mandir' },
            { path: '/Laxmi-Gaytri' },
            { path: '/human-statues' },
            { path: '/color-stones' },
            { path: '/Duttatrye' },
            { path: '/Handicraft' },
            { path: '/Ram Darbar' },
            { path: '/Radha-krishna' },
            { path: '/Sai Baba' },
            { path: '/Shiv' },
        ];
        this.fileUpload = [];
        this.page = 1;
        this.pageSize = 12;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.id = params['productcategory'];
        });
        this.getImages(this.id);
        // console.log(this.images)
    }
    getImages(index) {
        console.log(index);
        const folder = this.ImageFolder[index];
        this.getimagesService.getFiles(10000, folder.path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => 
        // store the key
        changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            if (fileUploads) {
                this.fileUpload = fileUploads;
                this.loading = false;
                // console.log(fileUploads)
            }
            else {
                error => {
                    alert(error);
                };
            }
        });
    }
}
CategoryProductsComponent.ɵfac = function CategoryProductsComponent_Factory(t) { return new (t || CategoryProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CategoryProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryProductsComponent, selectors: [["app-category-products"]], decls: 4, vars: 8, consts: [[4, "ngIf"], ["fxLayout", "row wrap", "class", " pl-0 pr-0", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "23px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center ", 1, "p-5"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "23px", 1, "pl-0", "pr-0"], ["class", "p-3 m-3", "fxFlex", "20%", "fxFlex.sm", "40%", 3, "dataSource", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "20%", "fxFlex.sm", "40%", 1, "p-3", "m-3", 3, "dataSource", "click"], ["fxFlex", "100%", 1, "p-0", "m-0"], ["alt", "", 3, "src"], ["fxLayout", "row", 1, "centered"], ["fxLayoutAlign", "center center", 1, "text", "fs-3", "p-2"]], template: function CategoryProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoryProductsComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryProductsComponent_div_1_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngb-pagination", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function CategoryProductsComponent_Template_ngb_pagination_pageChange_3_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx.fileUpload.length)("page", ctx.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.heading[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  min-width: 323px;\n  max-width: 323px;\n  max-height: 440px;\n  min-height: 440px;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #474444;\n  color: black;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  transform: translate(-50%, -50%);\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.price[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: 600;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDTjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSw0RUFBQTtBQUdKOztBQUZJO0VBQ0ksY0F0Q0E7RUF1Q0EsZ0JBQUE7QUFJUjs7QUFESTtFQUNJLHlCQTNDQTtFQTRDQSxZQUFBO0FBR1IiLCJmaWxlIjoiY2F0ZWdvcnktcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZSA6ICMyODM1OTM7XHJcbiRvcmFuZ2U6I2Y0NDMzNjtcclxuc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgbWluLXdpZHRoOiAzMjNweDtcclxuICAgIG1heC13aWR0aDogMzIzcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiKDcxLCA2OCwgNjgpO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByaWNle1xyXG4gICAgY29sb3I6IGdyZXlcclxufVxyXG5tYXQtY2FyZDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRvcmFuZ2UgO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ENMt":
/*!************************************************************************************!*\
  !*** ./src/app/Components/home/main-page/some-products/some-products.component.ts ***!
  \************************************************************************************/
/*! exports provided: SomeProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeProductsComponent", function() { return SomeProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






function SomeProductsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");
} }
class SomeProductsComponent {
    constructor() {
        this.products = [
            {
                img: "../../../../../assets/top_products_one.jpeg",
                name: "Laxmi-Narayana",
            },
            {
                img: "../../../../../assets/Hand.jpeg",
                name: "Handicraft",
            },
            {
                img: "../../../../../assets/top_products_three.jpeg",
                name: "Radha-Krishna",
            },
            {
                img: "../../../../../assets/statue.jpg",
                name: "Human Statue",
            },
        ];
    }
    ngOnInit() {
    }
}
SomeProductsComponent.ɵfac = function SomeProductsComponent_Factory(t) { return new (t || SomeProductsComponent)(); };
SomeProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SomeProductsComponent, selectors: [["app-some-products"]], decls: 9, vars: 1, consts: [["fxLayout", "column ", 1, "pt-0"], ["fxFlex", "54px", "fxLayoutAlign", "center center", 1, "heading", "fs-2"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center ", 1, "p-3", "pt-3"], ["fxLayout", "column", "class", "p-3 m-3", "fxFlex", "20%", "fxFlex.sm", "40%", 4, "ngFor", "ngForOf"], [1, "p-5", "pt-1", "fs-6"], ["mat-stroked-button", "", "routerLink", "products", 1, "text", "fw-800", "w-100", "p-2"], ["fxLayout", "column", "fxFlex", "20%", "fxFlex.sm", "40%", 1, "p-3", "m-3"], ["fxFlex", "90%", 1, "p=0", "m-0"], ["alt", "", 3, "src"], [1, "p-3", "pb-1", "fs-4", "fw-bold", "price"]], template: function SomeProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SomeProductsComponent_mat_card_5_Template, 5, 2, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View All Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]], styles: ["span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.heading[_ngcontent-%COMP%] {\n  background-color: rgba(214, 210, 210, 0.63);\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 470px;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.price[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: 600;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNvbWUtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKOztBQUdBO0VBRUksMkNBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksNEVBQUE7QUFHSjs7QUFGSTtFQUNJLGNBdEJBO0VBdUJBLGdCQUFBO0FBSVI7O0FBREk7RUFDSSx5QkEzQkE7RUE0QkEsWUFBQTtBQUdSIiwiZmlsZSI6InNvbWUtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZSA6ICMyODM1OTM7XHJcbiRvcmFuZ2U6I2Y0NDMzNjtcclxuc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTAsIDIxMCwgMC42Myk7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wcmljZXtcclxuICAgIGNvbG9yOiBncmV5XHJcbn1cclxubWF0LWNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLnByaWNle1xyXG4gICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokb3JhbmdlIDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ERu/":
/*!**********************************************!*\
  !*** ./src/app/admin/file-upload.service.ts ***!
  \**********************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");




class FileUploadService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        this.basePath = '/All-Products';
    }
    pushFileToStorage(fileUpload) {
        const filePath = `${this.basePath}/${fileUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            });
        })).subscribe();
        return uploadTask.percentageChanges();
    }
    saveFileData(fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    }
    getFiles(numberItems, path) {
        return this.db.list(path, ref => ref.limitToLast(numberItems));
    }
    deleteFile(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.name);
        })
            .catch(error => console.log(error));
    }
    deleteFileDatabase(key) {
        return this.db.list(this.basePath).remove(key);
    }
    deleteFileStorage(name) {
        const storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete();
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"])); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OKhP":
/*!***********************************************************!*\
  !*** ./src/app/Components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/product.service */ "X45H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/file-upload.service */ "ERu/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loading/loading.component */ "f/hT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");












function ProductsComponent_app_loading_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
} }
function ProductsComponent_div_4_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_4_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Star Trading Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
} }
function ProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_4_mat_card_1_Template, 8, 2, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, ctx_r1.products, ctx_r1.filterTerm), (ctx_r1.page - 1) * ctx_r1.pageSize, (ctx_r1.page - 1) * ctx_r1.pageSize + ctx_r1.pageSize));
} }
class ProductsComponent {
    constructor(changeDetectorRef, productService, router, route, getimagesService) {
        this.changeDetectorRef = changeDetectorRef;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.getimagesService = getimagesService;
        this.loading = true;
        this.products = [];
        this.page = 1;
        this.pageSize = 15;
    }
    ngOnInit() {
        this.getImages();
        // console.log(this.productService.allProducts);
        // this.changeDetectorRef.detectChanges();
        // this.dataSource.paginator = this.paginator;
        // this.obs = this.dataSource.connect();
    }
    show() {
        this.showModal = true; // Show-Hide Modal Check
    }
    //Bootstrap Modal Close event
    hide() {
        this.showModal = false;
    }
    getImages() {
        this.getimagesService.getFiles(10000, '/All-Products').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => 
        // store the key
        changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            if (fileUploads) {
                this.loading = false;
                this.products = fileUploads;
                // console.log(fileUploads)
            }
            else {
                error => {
                    alert(error);
                };
            }
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 7, vars: 9, consts: [[1, "container", "mt-5"], [1, "form-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["fxLayout", "row wrap", "class", " pt-5 pb-5 p-3", "fxLayout.xs", "column", "fxLayoutAlign", "center ", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center ", 1, "p-5"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center ", 1, "pt-5", "pb-5", "p-3"], ["fxLayout", "column", "class", "p-2 m-2", "fxFlex", "18%", "fxFlex.md", "30%", "fxFlex.sm", "40%", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "18%", "fxFlex.md", "30%", "fxFlex.sm", "40%", 1, "p-2", "m-2", 3, "click"], ["fxFlex", "80%", 1, "p=0", "m-0"], ["alt", "", "id", "imageresource", "usemap", "#m1", 3, "src"], ["fxLayoutAlign", "center center", 1, "text", "p-3", "fs-5"], ["fxLayout", "row", 1, "centered"], ["fxLayoutAlign", "center center", 1, "tag", "fs-4", "p-2"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.filterTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsComponent_app_loading_3_Template, 1, 0, "app-loading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_div_4_Template, 4, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngb-pagination", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ProductsComponent_Template_ngb_pagination_pageChange_6_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx.products.length)("page", ctx.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPagination"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipe"]], styles: ["span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.heading[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 360px;\n  height: 360px;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.price[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.tag[_ngcontent-%COMP%] {\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #474444;\n  color: black;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  transform: translate(-50%, -50%);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link[_ngcontent-%COMP%]:hover {\n  z-index: 2;\n  color: #283593 !important;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #283593 !important;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #fff;\n  background-color: #283593 !important;\n  border-color: #283593 !important;\n}\n\n.sr-only[_ngcontent-%COMP%] {\n  display: none !important;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBRUksNEVBQUE7QUFHSjs7QUFGSTtFQUNJLGNBdkJBO0FBMkJSOztBQURJO0VBQ0kseUJBM0JBO0VBNEJBLFlBQUE7QUFHUjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0Ysa0NBQUE7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFJSiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlIDogIzI4MzU5MztcclxuJG9yYW5nZTojZjQ0MzM2O1xyXG5zcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiAgMzYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByaWNle1xyXG4gICAgY29sb3I6IGdyZXlcclxufVxyXG5tYXQtY2FyZDpob3ZlcntcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JG9yYW5nZSA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi50YWd7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiKDcxLCA2OCwgNjgpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuLnBhZ2UtbGluazpob3ZlciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICMyODM1OTMgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbn1cclxuLnBhZ2UtbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC41cmVtIC43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBjb2xvcjogIzI4MzU5MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzNTkzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyODM1OTMgIWltcG9ydGFudDtcclxufVxyXG4uc3Itb25seSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PPDD":
/*!******************************************!*\
  !*** ./src/app/Services/mail.service.ts ***!
  \******************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MailService {
    constructor(http) {
        this.http = http;
    }
    mail(url, body) {
        return this.http.post(url, body);
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PU9F":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ "PtiA":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/home/main-page/all-products/service/product-categories.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoriesService", function() { return ProductCategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductCategoriesService {
    constructor() {
        this.categories = [
            {
                img: "../../../../../assets/ganesh.jpg",
                type: "Ganesh Ji",
            },
            {
                img: "../../../../../assets/Durga.jpg",
                type: "Durga Mata",
            },
            {
                img: "../../../../../assets/marble-mandir.jpg",
                type: "Marble Mandir",
            },
            {
                img: "../../../../../assets/laxmi.jpg",
                type: "Laxmi-Gaytri",
            },
            {
                img: "../../../../../assets/statues.jpg",
                type: "Human Statues",
            },
            {
                img: "../../../../../assets/color-stone.jpg",
                type: "Color-Stone",
            },
            {
                img: "../../../../../assets/146111.0.jpg",
                type: "Duttatrye",
            },
            {
                img: "../../../../../assets/Handicraft.jpg",
                type: "Handicraft",
            },
            {
                img: "../../../../../assets/ramdarbar.jpg",
                type: "Ram Darbar",
            },
            {
                img: "../../../../../assets/radhakrishna.jpg",
                type: "Radha Krishna",
            },
            {
                img: "../../../../../assets/saibaba.jpg",
                type: "Sai Baba",
            },
            {
                img: "../../../../../assets/shiv.jpg",
                type: "Shiv Pariwar",
            },
        ];
    }
}
ProductCategoriesService.ɵfac = function ProductCategoriesService_Factory(t) { return new (t || ProductCategoriesService)(); };
ProductCategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductCategoriesService, factory: ProductCategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sttr":
/*!*****************************************************!*\
  !*** ./src/app/Components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutGap", "24px", "fxLayoutAlign", "space-between ", 1, "p-5"], ["fxFlex", "40", "fxLayout", "column"], ["src", "https://content.jdmagicbox.com/comp/panchkula/u9/0172px172.x172.110328152638.r2u9/catalogue/jaipur-marble-murti-kendra-panchkula-sector-4-panchkula-statue-manufacturers-2p7r90c.jpg", "alt", ""], ["fxFlex", "50", "fxLayout", "column"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_home_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/home/header/header.component */ "9Qwz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/footer/footer.component */ "kFnI");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_Components_home_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _Components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.model */ "VDsm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.service */ "ERu/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





const _c0 = function (a0) { return { width: a0 }; };
function AdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx_r0.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.percentage, "% ");
} }
class AdminComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    ngOnInit() {
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
    upload() {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _file_model__WEBPACK_IMPORTED_MODULE_0__["FileUpload"](file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(percentage => {
            this.percentage = Math.round(percentage);
        }, error => {
            console.log(error);
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 7, vars: 2, consts: [[1, "p-5"], [1, "m-3"], ["type", "file", 1, "text-nowrap", "text-truncate", 3, "change"], [1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["class", "progress mt-2", 4, "ngIf"], [1, "progress", "mt-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", 3, "ngStyle"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_2_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_4_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminComponent_div_6_Template, 3, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentFileUpload);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "VDsm":
/*!*************************************!*\
  !*** ./src/app/admin/file.model.ts ***!
  \*************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
class FileUpload {
    constructor(file) {
        this.file = file;
    }
}


/***/ }),

/***/ "X45H":
/*!****************************************************************!*\
  !*** ./src/app/Components/products/service/product.service.ts ***!
  \****************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/file-upload.service */ "ERu/");


const products = [];
class ProductService {
    constructor(getimagesService) {
        this.getimagesService = getimagesService;
        this.allProducts = [];
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_home_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/home/header/header.component */ "9Qwz");
/* harmony import */ var _Components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/home/footer/footer.component */ "kFnI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _Components_home_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/home/main-page/main-page.component */ "+Ym7");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Components_home_main_page_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/home/main-page/image-slider/image-slider.component */ "qy5G");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _Components_home_main_page_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/home/main-page/all-products/all-products.component */ "g3KF");
/* harmony import */ var _Components_home_main_page_some_products_some_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/home/main-page/some-products/some-products.component */ "ENMt");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/products/products.component */ "OKhP");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/contact/contact.component */ "1ngR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _Components_Products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/Products/product-detail/product-detail.component */ "dAIw");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _Components_category_products_category_products_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/category-products/category-products.component */ "DvXq");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _Components_order_order_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Components/order/order.component */ "s5qz");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pipe/filter.pipe */ "PU9F");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ "fXoL");













































// -> imported filter pipe
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__["IvyCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_21__["DragScrollModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__["AngularFireStorageModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_41__["Ng2SearchPipeModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_42__["NgxImageZoomModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _Components_home_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _Components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _Components_home_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__["MainPageComponent"],
        _Components_home_main_page_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_20__["ImageSliderComponent"],
        _Components_home_main_page_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_22__["AllProductsComponent"],
        _Components_home_main_page_some_products_some_products_component__WEBPACK_IMPORTED_MODULE_23__["SomeProductsComponent"],
        _Components_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"],
        _Components_products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"],
        _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"],
        _Components_Products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_29__["ProductDetailComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__["AdminComponent"],
        _Components_category_products_category_products_component__WEBPACK_IMPORTED_MODULE_35__["CategoryProductsComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_36__["LoadingComponent"],
        _Components_order_order_component__WEBPACK_IMPORTED_MODULE_37__["OrderComponent"],
        _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_40__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__["IvyCarouselModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
        ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_21__["DragScrollModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__["AngularFireStorageModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_41__["Ng2SearchPipeModule"],
        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_42__["NgxImageZoomModule"]] }); })();


/***/ }),

/***/ "dAIw":
/*!********************************************************************************!*\
  !*** ./src/app/Components/Products/product-detail/product-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class ProductDetailComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            this.productdetail = param;
            this.productName = param.name;
            this.productPrice = param.price;
            this.productImage = param.img;
            // console.log(param);
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 7, vars: 3, consts: [["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "space-around  ", 1, "p-5"], ["fxFlex", "40", "fxLayout", "column"], ["alt", "", 3, "src"], ["fxFlex", "50", "fxLayout", "column"], [1, "fs-1"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productPrice, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 25, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-100", "h-100"], [1, "loadingio-spinner-spin-5d3xdnqrxxk"], [1, "ldio-irbkr07n7bf"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: ["@keyframes ldio-irbkr07n7bf {\n  0% {\n    opacity: 1;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform: translateZ(0) scale(2.05, 2.05);\n  }\n  100% {\n    opacity: 0;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform: translateZ(0) scale(1, 1);\n  }\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 9.6px;\n  height: 9.6px;\n  border-radius: 50%;\n  background: #283593;\n  animation: ldio-irbkr07n7bf 0.7633587786s linear infinite;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%] {\n  left: 88px;\n  top: 55px;\n  animation-delay: -0.693962526s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg);\n  transform-origin: 92.8px 59.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)    > div[_ngcontent-%COMP%] {\n  left: 82px;\n  top: 73px;\n  animation-delay: -0.6245662734s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(32.7272727273deg);\n  transform-origin: 86.8px 77.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3)    > div[_ngcontent-%COMP%] {\n  left: 69px;\n  top: 85px;\n  animation-delay: -0.5551700208s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(65.4545454545deg);\n  transform-origin: 73.8px 89.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4)    > div[_ngcontent-%COMP%] {\n  left: 51px;\n  top: 87px;\n  animation-delay: -0.4857737682s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(98.1818181818deg);\n  transform-origin: 55.8px 91.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5)    > div[_ngcontent-%COMP%] {\n  left: 34px;\n  top: 80px;\n  animation-delay: -0.4163775156s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(130.9090909091deg);\n  transform-origin: 38.8px 84.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6)    > div[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 64px;\n  animation-delay: -0.346981263s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(163.6363636364deg);\n  transform-origin: 28.8px 68.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7)    > div[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 46px;\n  animation-delay: -0.2775850104s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(196.3636363636deg);\n  transform-origin: 28.8px 50.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8)    > div[_ngcontent-%COMP%] {\n  left: 34px;\n  top: 31px;\n  animation-delay: -0.2081887578s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(229.0909090909deg);\n  transform-origin: 38.8px 35.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9)    > div[_ngcontent-%COMP%] {\n  left: 51px;\n  top: 23px;\n  animation-delay: -0.1387925052s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(261.8181818182deg);\n  transform-origin: 55.8px 27.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10)    > div[_ngcontent-%COMP%] {\n  left: 69px;\n  top: 26px;\n  animation-delay: -0.0693962526s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(294.5454545455deg);\n  transform-origin: 73.8px 30.8px;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11)    > div[_ngcontent-%COMP%] {\n  left: 82px;\n  top: 38px;\n  animation-delay: 0s;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(11) {\n  transform: rotate(327.2727272727deg);\n  transform-origin: 86.8px 42.8px;\n}\n.loadingio-spinner-spin-5d3xdnqrxxk[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  display: inline-block;\n  overflow: hidden;\n  background: #ffffff;\n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 0 0;\n  \n}\n.ldio-irbkr07n7bf[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsMENBQUE7RUFESjtFQUVJO0lBQ0EsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxvQ0FBQTtFQUFKO0FBQ0Y7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseURBQUE7QUFBSjtBQUNHO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUVKO0FBQUU7RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0FBR0o7QUFGRztFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUFLSjtBQUhFO0VBQ0UsbUNBQUE7RUFDQSwrQkFBQTtBQU1KO0FBTEc7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FBUUo7QUFORTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7QUFTSjtBQVJHO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQVdKO0FBVEU7RUFDRSxtQ0FBQTtFQUNBLCtCQUFBO0FBWUo7QUFYRztFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUFjSjtBQVpFO0VBQ0Usb0NBQUE7RUFDQSwrQkFBQTtBQWVKO0FBZEc7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBaUJKO0FBZkU7RUFDRSxvQ0FBQTtFQUNBLCtCQUFBO0FBa0JKO0FBakJHO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQW9CSjtBQWxCRTtFQUNFLG9DQUFBO0VBQ0EsK0JBQUE7QUFxQko7QUFwQkc7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FBdUJKO0FBckJFO0VBQ0Usb0NBQUE7RUFDQSwrQkFBQTtBQXdCSjtBQXZCRztFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUEwQko7QUF4QkU7RUFDRSxvQ0FBQTtFQUNBLCtCQUFBO0FBMkJKO0FBMUJHO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQTZCSjtBQTNCRTtFQUNFLG9DQUFBO0VBQ0EsK0JBQUE7QUE4Qko7QUE3Qkc7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBZ0NKO0FBOUJFO0VBQ0Usb0NBQUE7RUFDQSwrQkFBQTtBQWlDSjtBQS9CRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBa0NKO0FBaENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHFCQUFBO0VBQXVCLG1CQUFBO0FBb0MzQjtBQWxDRTtFQUF3Qix1QkFBQTtBQXNDMUI7QUFyQ0UscUNBQUEiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlIDogIzI4MzU5MztcclxuJG9yYW5nZTojZjQ0MzM2O1xyXG5Aa2V5ZnJhbWVzIGxkaW8taXJia3IwN243YmYge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgyLjA1LDIuMDUpO1xyXG4gICAgfSAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSwxKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgZGl2ID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5LjZweDtcclxuICAgIGhlaWdodDogOS42cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgzNTkzO1xyXG4gICAgYW5pbWF0aW9uOiBsZGlvLWlyYmtyMDduN2JmIDAuNzYzMzU4Nzc4NjI1OTU0MXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH0ubGRpby1pcmJrcjA3bjdiZiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2IHtcclxuICAgIGxlZnQ6IDg4cHg7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjY5Mzk2MjUyNjAyMzU5NDhzO1xyXG4gIH1cclxuICAubGRpby1pcmJrcjA3bjdiZiA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5Mi44cHggNTkuOHB4O1xyXG4gIH0ubGRpby1pcmJrcjA3bjdiZiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcclxuICAgIGxlZnQ6IDgycHg7XHJcbiAgICB0b3A6IDczcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjYyNDU2NjI3MzQyMTIzNTNzO1xyXG4gIH1cclxuICAubGRpby1pcmJrcjA3bjdiZiA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIuNzI3MjcyNzI3MjcyNzNkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogODYuOHB4IDc3LjhweDtcclxuICB9LmxkaW8taXJia3IwN243YmYgZGl2Om50aC1jaGlsZCgzKSA+IGRpdiB7XHJcbiAgICBsZWZ0OiA2OXB4O1xyXG4gICAgdG9wOiA4NXB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41NTUxNzAwMjA4MTg4NzU4cztcclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDY1LjQ1NDU0NTQ1NDU0NTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDczLjhweCA4OS44cHg7XHJcbiAgfS5sZGlvLWlyYmtyMDduN2JmIGRpdjpudGgtY2hpbGQoNCkgPiBkaXYge1xyXG4gICAgbGVmdDogNTFweDtcclxuICAgIHRvcDogODdweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDg1NzczNzY4MjE2NTE2M3M7XHJcbiAgfVxyXG4gIC5sZGlvLWlyYmtyMDduN2JmID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5OC4xODE4MTgxODE4MTgxOWRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1NS44cHggOTEuOHB4O1xyXG4gIH0ubGRpby1pcmJrcjA3bjdiZiBkaXY6bnRoLWNoaWxkKDUpID4gZGl2IHtcclxuICAgIGxlZnQ6IDM0cHg7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQxNjM3NzUxNTYxNDE1NjhzO1xyXG4gIH1cclxuICAubGRpby1pcmJrcjA3bjdiZiA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwLjkwOTA5MDkwOTA5MDlkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzguOHB4IDg0LjhweDtcclxuICB9LmxkaW8taXJia3IwN243YmYgZGl2Om50aC1jaGlsZCg2KSA+IGRpdiB7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgdG9wOiA2NHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zNDY5ODEyNjMwMTE3OTc0cztcclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgPiBkaXY6bnRoLWNoaWxkKDYpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE2My42MzYzNjM2MzYzNjM2M2RlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyOC43OTk5OTk5OTk5OTk5OTdweCA2OC44cHg7XHJcbiAgfS5sZGlvLWlyYmtyMDduN2JmIGRpdjpudGgtY2hpbGQoNykgPiBkaXYge1xyXG4gICAgbGVmdDogMjRweDtcclxuICAgIHRvcDogNDZweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjc3NTg1MDEwNDA5NDM3OXM7XHJcbiAgfVxyXG4gIC5sZGlvLWlyYmtyMDduN2JmID4gZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTYuMzYzNjM2MzYzNjM2MzdkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjguNzk5OTk5OTk5OTk5OTk3cHggNTAuOHB4O1xyXG4gIH0ubGRpby1pcmJrcjA3bjdiZiBkaXY6bnRoLWNoaWxkKDgpID4gZGl2IHtcclxuICAgIGxlZnQ6IDM0cHg7XHJcbiAgICB0b3A6IDMxcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIwODE4ODc1NzgwNzA3ODRzO1xyXG4gIH1cclxuICAubGRpby1pcmJrcjA3bjdiZiA+IGRpdjpudGgtY2hpbGQoOCkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI5LjA5MDkwOTA5MDkwOTFkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzguOHB4IDM1LjhweDtcclxuICB9LmxkaW8taXJia3IwN243YmYgZGl2Om50aC1jaGlsZCg5KSA+IGRpdiB7XHJcbiAgICBsZWZ0OiA1MXB4O1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMzg3OTI1MDUyMDQ3MTg5NXM7XHJcbiAgfVxyXG4gIC5sZGlvLWlyYmtyMDduN2JmID4gZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjEuODE4MTgxODE4MTgxOGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1NS44cHggMjcuNzk5OTk5OTk5OTk5OTk3cHg7XHJcbiAgfS5sZGlvLWlyYmtyMDduN2JmIGRpdjpudGgtY2hpbGQoMTApID4gZGl2IHtcclxuICAgIGxlZnQ6IDY5cHg7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA2OTM5NjI1MjYwMjM1OTQ3cztcclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgPiBkaXY6bnRoLWNoaWxkKDEwKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTQuNTQ1NDU0NTQ1NDU0NTZkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNzMuOHB4IDMwLjc5OTk5OTk5OTk5OTk5N3B4O1xyXG4gIH0ubGRpby1pcmJrcjA3bjdiZiBkaXY6bnRoLWNoaWxkKDExKSA+IGRpdiB7XHJcbiAgICBsZWZ0OiA4MnB4O1xyXG4gICAgdG9wOiAzOHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgPiBkaXY6bnRoLWNoaWxkKDExKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjcuMjcyNzI3MjcyNzI3MjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogODYuOHB4IDQyLjhweDtcclxuICB9XHJcbiAgLmxvYWRpbmdpby1zcGlubmVyLXNwaW4tNWQzeGRucXJ4eGsge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubGRpby1pcmJrcjA3bjdiZiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cclxuICB9XHJcbiAgLmxkaW8taXJia3IwN243YmYgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuICAvKiBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAqLyJdfQ== */"] });


/***/ }),

/***/ "g3KF":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/home/main-page/all-products/all-products.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/file-upload.service */ "ERu/");
/* harmony import */ var _service_product_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/product-categories.service */ "PtiA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function AllProductsComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllProductsComponent_mat_card_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.getImages(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "View All Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", category_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.type, " ");
} }
class AllProductsComponent {
    constructor(getimagesService, categoriesservice, router) {
        this.getimagesService = getimagesService;
        this.categoriesservice = categoriesservice;
        this.router = router;
        this.categories = this.categoriesservice.categories;
        //getting folder form db for different categories
        this.ImageFolder = [
            { path: '/Ganesh' },
            { path: '/Durga' },
            { path: '/Marble Mandir' },
            { path: '/Laxmi-Gaytri' },
            { path: '/human-statues' },
            { path: '/color-stones' },
            { path: '/Duttatrye' },
            { path: '/Handicraft' },
            { path: '/Ram Darbar' },
            { path: '/Radha-krishna' },
            { path: '/Sai Baba' },
            { path: '/Shiv' },
        ];
    }
    // fileUpload: FileUpload[] = [];
    ngOnInit() { }
    //get images of specific catigories
    getImages(index) {
        console.log(index);
        const folder = this.ImageFolder[index];
        this.router.navigate(['/category-product'], { queryParams: { productcategory: index } });
        this.getimagesService.getFiles(50, folder.path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => 
        // store the key
        changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            if (fileUploads) {
            }
            else {
                error => {
                    alert(error);
                };
            }
        });
    }
}
AllProductsComponent.ɵfac = function AllProductsComponent_Factory(t) { return new (t || AllProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_product_categories_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AllProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AllProductsComponent, selectors: [["app-all-products"]], decls: 8, vars: 1, consts: [[1, "p-3", "pb-0"], ["fxLayout", "column", 1, "p-0", "product_background"], ["fxLayout", "row ", "fxLayoutAlign", "space-between center"], [1, "fs-2", "fw-800", "text-white", "p-4", "pl-5"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center ", 1, "pt-3"], ["fxLayout", "column", "class", "p-3 m-3", "fxFlex", "25%", "fxFlex.sm", "45%", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "25%", "fxFlex.sm", "45%", 1, "p-3", "m-3"], ["fxFlex", "75%", "fxFlex.xs", "90%", 1, "p=0", "m-0"], ["alt", "", 3, "src"], ["fxLayoutAlign", "center center", 1, "p-1", "pt-4", "fs-4", "fw-bold", "text-muted"], ["fxLayoutAlign", "center center", 1, "pt-1"], ["mat-stroked-button", "", "fxLayoutAlign", "center center", 1, "text", "fs-6", "w-100", "p-2", "fw-normal", 3, "click"]], template: function AllProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Products Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AllProductsComponent_mat_card_6_Template, 8, 2, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".title[_ngcontent-%COMP%] {\n  -webkit-text-decoration: 5px underline #f44336;\n          text-decoration: 5px underline #f44336;\n}\n\n.product_background[_ngcontent-%COMP%] {\n  display: flex;\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  border-radius: 10px 10px 10px 10px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 450px;\n  cursor: pointer;\n}\n\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: 600;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nmat-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #283593;\n  font-size: 160%;\n  font-weight: 600;\n  padding: 15px 10px;\n  border-radius: 10px 10px 10px 10px;\n}\n\n@media only screen and (max-width: 800px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhDQUFBO1VBQUEsc0NBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVZGOztBQVlBO0VBQ0UsMkJBQUE7QUFURjs7QUFXQTtFQUNFLFlBQUE7QUFSRjs7QUFVQTtFQUNJLDRFQUFBO0VBQ0EsNEVBQUE7QUFQSjs7QUFRSTtFQUNJLGNBdkNBO0VBd0NBLGdCQUFBO0FBTlI7O0FBU0k7RUFDSSx5QkE1Q0E7RUE2Q0EsWUFBQTtBQVBSOztBQVdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFSSjs7QUFXRTtFQUNFLFlBQUE7QUFSSjs7QUFZRTtFQUNFLFVBQUE7QUFUSjs7QUFZRTtFQUNFLHVCQUFBO0VBQ0EsY0E5RUk7RUErRUosZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVRKOztBQVdFO0VBQ0U7SUFDSSxlQUFBO0VBUk47QUFDRiIsImZpbGUiOiJhbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZSA6ICMyODM1OTM7XHJcbiRvcmFuZ2U6I2Y0NDMzNjtcclxuLnRpdGxle1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiA1cHggdW5kZXJsaW5lICRvcmFuZ2U7XHJcbn1cclxuLnByb2R1Y3RfYmFja2dyb3VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vLyBtYXQtY2FyZHtcclxuLy8gICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuLy8gICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAvLyBtYXgtd2lkdGg6IDM0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHg7XHJcbiAgICBcclxuLy8gfVxyXG5tYXQtY2FyZHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5idXR0b257XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbm1hdC1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLnByaWNle1xyXG4gICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokb3JhbmdlIDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkOmhvdmVyIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQ6aG92ZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAudGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTYwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "kFnI":
/*!************************************************************!*\
  !*** ./src/app/Components/home/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/contact.service */ "ldib");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FooterComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1, " .");
} }
class FooterComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.allProducts = [
            'Ganesh',
            'Durga Mata',
            'Marble Mandir',
            'Laxmi Mata',
            'Gaytri Mata',
            'Human Statues',
            'Color-Stone',
            'Duttatrye',
            'Handicraft',
            'Ram Darbar',
            'Radha Krishna',
            'Sai Baba',
            'Shiv Parivar',
            'Ladu Gopal',
            'Hunuman ji',
            'Garud Ji',
            'Brahma Ji',
            'Shrinath Ji',
            'Santosi Mata',
            'Triputi Balaji',
            'Khatu Shyam Ji',
            'Laxmi Narayan',
            'Ganga Mata',
            'Swami Narayan',
            'Saraswati Mata',
            'Amba Mata',
            'Kabeer Ji',
            'Budda',
            'Bhairu Ji',
            'Color-Stone',
            'Gajanand Baba',
            'Laxmi-Narayana'
        ];
    }
    ngOnInit() {
    }
    whatsapp() {
        this.contactService.conatactviawhatsapp();
    }
    phone() {
        this.contactService.conatactviacall();
    }
    mail() {
        this.contactService.conatactviaemail();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 69, vars: 1, consts: [[1, "footer", "p-2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center ", "fxLayout.xs", "column", 1, "contact"], [1, "fs-4", "hover", "text-white"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayoutGap", "20px"], ["src", "../../../../assets/whatsapp.png", "alt", "", 1, "link", "buzz-out-on-hover", 3, "click"], ["src", "../../../../assets/phone.png", "alt", "", 1, "link", "buzz-out-on-hover", 3, "click"], ["src", "../../../../assets/rename.png", "alt", "", 1, "link", "buzz-out-on-hover", 3, "click"], ["src", "../../../../assets/in.png", "alt", "", 1, "link", "buzz-out-on-hover"], ["src", "../../../../assets/facebook.png", "alt", "", 1, "link", "buzz-out-on-hover"], [1, "p-0", "m-0"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayout.xs", "column"], [1, "footer", "p-5"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayout.sm", "col", "fxLayoutAlign", "center ", 1, "contain", "w-100"], ["fxFlex", "10%", "fxFlex.xs", "50%", 1, "cols", "p-3", "w-100"], ["fxLayoutAlign", "center"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/products"], ["routerLink", "/order-from-star-trading-company"], ["routerLink", "/contact"], ["fxFlex", "30%", "fxFlex.xs", "50%", 1, "cols", "p-3", "col", "w-100"], [1, "icon"], [1, "products"], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "cols", "p-3", "w-100"], [1, "row"], ["class", "col-3 products p-1", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.xs", "column", 1, "p-2"], [1, "fs-3"], [1, "text-muted"], [1, "col-3", "products", "p-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_7_listener() { return ctx.whatsapp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_9_listener() { return ctx.phone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_11_listener() { return ctx.mail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "H.O : Opp. Todhniwal Dharamshala Station Road, Makrana (Raj.) 341505");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "B.O : 1282,Khejron Ka Rasta Chandpole Bazar, Jaipur( Raj.) 302001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FooterComponent_div_59_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Star Trading Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A9 All Rights Reversed | Made by SHEETAL DADHICH for better Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allProducts);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".footer[_ngcontent-%COMP%] {\n  color: #f44336;\n  background-color: black;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline #f44336;\n          text-decoration: underline #f44336;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Rye\", cursive;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  color: #f44336;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: #a5a2a2 !important;\n  height: 1px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 3px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-right: 6%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 10px 10px 10px 10px !important;\n}\n\n@media only screen and (max-width: 625px) {\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    list-style-type: none;\n  }\n\n  li[_ngcontent-%COMP%] {\n    margin: 4%;\n  }\n}\n\n\n\n\n\n@keyframes buzz-out-on-hover {\n  10% {\n    transform: translateX(3px) rotate(2deg);\n  }\n  20% {\n    transform: translateX(-3px) rotate(-2deg);\n  }\n  30% {\n    transform: translateX(3px) rotate(2deg);\n  }\n  40% {\n    transform: translateX(-3px) rotate(-2deg);\n  }\n  50% {\n    transform: translateX(2px) rotate(1deg);\n  }\n  60% {\n    transform: translateX(-2px) rotate(-1deg);\n  }\n  70% {\n    transform: translateX(2px) rotate(1deg);\n  }\n  80% {\n    transform: translateX(-2px) rotate(-1deg);\n  }\n  90% {\n    transform: translateX(1px) rotate(0);\n  }\n  100% {\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n.buzz-out-on-hover[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n\n.buzz-out-on-hover[_ngcontent-%COMP%]:hover, .buzz-out-on-hover[_ngcontent-%COMP%]:focus, .buzz-out-on-hover[_ngcontent-%COMP%]:active {\n  animation-name: buzz-out-on-hover;\n  animation-duration: 0.75s;\n  animation-timing-function: linear;\n  animation-iteration-count: 1;\n}\n\n.location[_ngcontent-%COMP%] {\n  width: 420px !important;\n}\n\n.products[_ngcontent-%COMP%] {\n  width: auto;\n  color: #999999;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: bold;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n}\n\n.cols[_ngcontent-%COMP%] {\n  width: 210px;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.footer[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 17px;\n  padding: 20px 0px 5px 0px;\n  color: rgba(255, 255, 255, 0.2);\n  font-weight: normal;\n  text-transform: uppercase;\n  letter-spacing: 0.25em;\n}\n\n.footer[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #999999;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: bold;\n  padding: 5px 0px 5px 0px;\n  cursor: pointer;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n}\n\n.footer[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  transition: 0.1s;\n  -webkit-transition: 0.1s;\n  -moz-transition: 0.1s;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FGSTtFQUdKLHVCQUFBO0FBREo7O0FBR0E7RUFDSSwwQ0FBQTtVQUFBLGtDQUFBO0FBQUo7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFFSSxxQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FBRUo7O0FBQUU7RUFDRTtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7RUFHSjs7RUFDRztJQUNFLFVBQUE7RUFFTDtBQUNGOztBQUVBLHVCQUFBOztBQUNBO3VCQUFBOztBQTZDRTtFQUNFO0lBRUUsdUNBQUE7RUFESjtFQUdFO0lBRUUseUNBQUE7RUFESjtFQUdFO0lBRUUsdUNBQUE7RUFESjtFQUdFO0lBRUUseUNBQUE7RUFESjtFQUdFO0lBRUUsdUNBQUE7RUFESjtFQUdFO0lBRUUseUNBQUE7RUFESjtFQUdFO0lBRUUsdUNBQUE7RUFESjtFQUdFO0lBRUUseUNBQUE7RUFESjtFQUdFO0lBRUUsb0NBQUE7RUFESjtFQUdFO0lBRUUscUNBQUE7RUFESjtBQUNGOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHlDQUFBO0VBQ0Esb0NBQUE7QUFESjs7QUFHRTtFQUVFLGlDQUFBO0VBRUEseUJBQUE7RUFFQSxpQ0FBQTtFQUVBLDRCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFHO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0FBTUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWUgOiAjMjgzNTkzO1xyXG4kb3JhbmdlOiNmNDQzMzY7XHJcbi5mb290ZXJ7XHJcbiAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5ob3Zlcjpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogIHVuZGVybGluZSAkb3JhbmdlIDtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnllJywgY3Vyc2l2ZTtcclxufVxyXG5tYXQtaWNvbjpob3ZlcntcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbmhye1xyXG4gICAgY29sb3I6IHJnYigxNjUsIDE2MiwgMTYyKSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICAgIC8vIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICBwYWRkaW5nOjNweDtcclxuICAgIFxyXG59XHJcbi5jb250YWN0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYlO1xyXG4gICAgcGFkZGluZy10b3A6MiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyJTtcclxuXHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyNXB4KSB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgICAgLy8gcGFkZGluZzozcHg7XHJcbiAgICAgIFxyXG4gICAgIH1cclxuICAgICBsaXtcclxuICAgICAgIG1hcmdpbjogNCU7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09Ki9cclxuLyogQlVaWiBPVVRcclxuLyo9PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV6ei1vdXQtb24taG92ZXIge1xyXG4gICAgMTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSByb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYnV6ei1vdXQtb24taG92ZXIge1xyXG4gICAgMTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSByb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXp6LW91dC1vbi1ob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxuICAuYnV6ei1vdXQtb24taG92ZXI6aG92ZXIsIC5idXp6LW91dC1vbi1ob3Zlcjpmb2N1cywgLmJ1enotb3V0LW9uLWhvdmVyOmFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBidXp6LW91dC1vbi1ob3ZlcjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBidXp6LW91dC1vbi1ob3ZlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgfVxyXG4ubG9jYXRpb257XHJcbiAgICB3aWR0aDogNDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHVjdHN7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuICAgLmNvbHMge1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyIC5jb2xzIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggNXB4IDBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1MGVtO1xyXG4gIH1cclxuICAuZm9vdGVyIC5jb2xzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5mb290ZXIgLmNvbHMgdWwgbGkge1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4ycztcclxuICB9XHJcblxyXG4gIC5mb290ZXIgLmNvbHMgdWwgbGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4xcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjFzO1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbi8vICAgICAuY29udGFpbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbi8vICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzlweCkge1xyXG4vLyAgICAgLmNvbnRhaW4gLnNvY2lhbCB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLnNvY2lhbCBoMSB7XHJcbi8vICAgICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbi8vICAgICAuZm9vdGVyIC5jb2wge1xyXG4vLyAgICAgICB3aWR0aDogMzMlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmZvb3RlciAuY29sIGgxIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmZvb3RlciAuY29sIHVsIGxpIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbi8vICAgICAgIC5mb290ZXIgLmNvbCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuZm9vdGVyIC5jb2wgaDEge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuZm9vdGVyIC5jb2wgdWwgbGkge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbi8vICAgICAuZm9vdGVyIC5jb2wge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gICB9Il19 */"] });


/***/ }),

/***/ "ldib":
/*!*********************************************!*\
  !*** ./src/app/Services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ContactService {
    constructor(http) {
        this.http = http;
    }
    conatactviawhatsapp() {
        return this.http.get('http://localhost:3000/whatsapp').subscribe((data) => {
            if (data) {
                console.log(data.message);
                window.open(data.message, "_blank");
            }
        });
    }
    conatactviacall() {
        window.open('tel://+916350639063', "_blank");
    }
    conatactviaemail() {
        window.open('mailto:umadadhich123@gmail.com?subject=Order Enquiry &body=Description', "_blank");
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qy5G":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/home/main-page/image-slider/image-slider.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class ImageSliderComponent {
    constructor(config) {
        this.sh = true;
        // config.interval = 2000;  
        // config.wrap = true;  
        // config.keyboard = false;  
        // config.pauseOnHover = false;
    }
    ngOnInit() {
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], decls: 13, vars: 0, consts: [[1, "example"], ["drag-scroll-item", ""], ["src", "../../../../../assets/slide.jpg"], [1, "fs-2"], ["src", "https://www.pandeymarblearts.com/images/slider-bg.jpg"], ["src", "../../../../../assets/top_products_four.jpeg"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "drag-scroll", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Marble Arts and Handicrafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Divine Sculptured Beauty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Divine Handicrafted Tales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_2__["DragScrollComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_2__["DragScrollItemDirective"]], styles: ["drag-scroll[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 100%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 52%;\n  padding: 0%;\n  margin: 2%;\n  border-radius: 10px 10px 10px 10px;\n}\n\n@media only screen and (max-width: 800px) {\n  mat-card[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  drag-scroll[_ngcontent-%COMP%] {\n    height: 55%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  mat-card[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  drag-scroll[_ngcontent-%COMP%] {\n    height: 25%;\n  }\n}\n\n@media only screen and (max-width: 1200px) and (min-width: 800px) {\n  mat-card[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  drag-scroll[_ngcontent-%COMP%] {\n    height: 55%;\n  }\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 10px 10px 10px 10px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n\n\nmat-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #f44336d5;\n  text-align: center;\n  vertical-align: middle;\n  padding-top: 5%;\n  border-radius: 0px 0px 10px 10px;\n  color: white;\n  margin-bottom: 5px;\n  font-size: 26px;\n  font-family: sans-serif;\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n\n\nmat-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  visibility: visible;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGltYWdlLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFHQTtFQUNJO0lBQ0UsVUFBQTtFQUFKOztFQUVFO0lBQ0ksV0FBQTtFQUNOO0FBQ0Y7O0FBRUU7RUFDRTtJQUNFLFVBQUE7RUFBSjs7RUFHRTtJQUNJLFdBQUE7RUFBTjtBQUNGOztBQUdFO0VBQ0U7SUFDRSxVQUFBO0VBREo7O0VBR0U7SUFDSSxXQUFBO0VBQU47QUFDRjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFHRTtFQUNFLHdDQUFBO0FBQUo7O0FBRUUscUJBQUE7O0FBR0MseUJBQUE7O0FBQ0E7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsOENBQUE7QUFESjs7QUFJRyw4QkFBQTs7QUFDQTtFQUNDLGVBQUE7QUFESjs7QUFJRztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBS0EsbUJBQUE7RUFDQSxZQUFBO0FBTEoiLCJmaWxlIjoiaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWUgOiAjMjgzNTkzO1xyXG4kb3JhbmdlOiNmNDQzMzY7XHJcbmRyYWctc2Nyb2xsIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gXHJcbm1hdC1jYXJke1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNTIlO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBkcmFnLXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NSU7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICB9XHJcbiAgICBkcmFnLXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgZHJhZy1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogNTUlO1xyXG4gICAgICB9XHJcblxyXG4gIH1cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuICBtYXQtY2FyZDpob3ZlcntcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudCA7XHJcbiAgfVxyXG4gIC8qIFBhcmVudCBDb250YWluZXIgKi9cclxuICBcclxuICAgXHJcbiAgIC8qIENoaWxkIFRleHQgQ29udGFpbmVyICovXHJcbiAgIG1hdC1jYXJkIGRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNmQ1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7IFxyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgfVxyXG4gICBcclxuICAgLyogSG92ZXIgb24gUGFyZW50IENvbnRhaW5lciAqL1xyXG4gICBtYXQtY2FyZDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgbWF0LWNhcmQ6aG92ZXIgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDo0JTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDhweCAxN3B4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDAuNzsgXHJcbiAgIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "s5qz":
/*!*****************************************************!*\
  !*** ./src/app/Components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/contact.service */ "ldib");
/* harmony import */ var src_app_Services_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mail.service */ "PPDD");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");











class OrderComponent {
    constructor(contactservice, mailservice) {
        this.contactservice = contactservice;
        this.mailservice = mailservice;
        this.buttontext = "Place Order";
    }
    ngOnInit() {
    }
    placeOrder(orderForm) {
        this.buttontext = "....";
        let user = {
            name: orderForm.value.firstName + orderForm.value.lastName,
            email: orderForm.value.email,
            message: "My Order : " + orderForm.value.order + "\nProposal Money : " + orderForm.value.money + "\nMobile Number :" + orderForm.value.number
        };
        console.log(user);
        this.mailservice.mail('http://localhost:3000/orderemail', user)
            .subscribe(data => {
            if (data) {
                this.buttontext = "Order Placed";
                this.ThankuMessage = "Thanks for your order😃🤗 ! We will contact you soon!";
                console.log(data);
            }
        });
    }
    whatapp() {
        this.redirectingmessage = " redirecting to whatsapp page....";
        this.contactservice.conatactviawhatsapp();
    }
    phone() {
        this.redirectingmessage = " Making phone call..📲";
        this.contactservice.conatactviacall();
    }
    mail() {
        this.redirectingmessage = " Redirecting to mail page....";
        this.contactservice.conatactviaemail();
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 82, vars: 3, consts: [[1, "p-2", "pt-3"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "fs-2", "p-5"], ["fxFlex", "30%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", "fxLayout", "row", 1, "w-100"], ["fxLayoutAlign", "center center", 1, "p-3"], ["mat-fab", "", 1, "button"], [1, "p-3"], ["fxLayout", "row", "fxLayout.md", "column", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign", "space-between", 1, "p-3", "w-100"], ["fxFlex", "45%", "fxFlex.xs", "100%", 1, "p-5"], ["orderForm", "ngForm"], [1, "w-100"], ["matInput", "", "ngModel", "", "name", "firstName", "firstName", "", "required", ""], ["matInput", "", "ngModel", "", "name", "lastName", "lastName", "", "required", ""], ["matInput", "", "ngModel", "", "placeholder", "pat@example.com", "name", "email", "email", "", "required", ""], ["matInput", "", "ngModel", "", "type", "number", "placeholder", "", "name", "number", "number", "", "required", ""], ["matInput", "", "ngModel", "", "name", "order", "order", "", "required", ""], ["matInput", "", "ngModel", "", "type", "number", "placeholder", "", "name", "money", "money", "", "required", ""], ["mat-raised-button", "", "type", "submit", 1, "submit", 3, "disabled", "click"], ["fxLayoutAlign", "center center", 1, "p-2"], ["fxFlex", "45%", "fxLayout", "column", "fxLayoutAlign", "center "], ["fxLayoutAlign", "center "], [1, "fs-1"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center center"], ["fxFlex", "30%", "fxFlex.xs", "100%"], ["mat-raised-button", "", "color", "primary", 1, "whatsapp", "fs-4", 3, "click"], [1, "fa", "fa-whatsapp", "my-float", "p-1", "link", "link-four", "pulse-grow-on-hover"], ["mat-raised-button", "", "color", "primary", 1, "phone", "fs-4", 3, "click"], [1, "m-1", "link", "link-four", "pulse-grow-on-hover"], ["mat-raised-button", "", "color", "primary", 1, "mail", "fs-4", 3, "click"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Timely Delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "done_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Best Quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Best Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Your Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Proposal Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.placeOrder(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contact Directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_69_listener() { return ctx.whatapp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_73_listener() { return ctx.phone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Make Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_78_listener() { return ctx.mail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Send Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttontext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ThankuMessage);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], styles: [".button[_ngcontent-%COMP%] {\n  background-color: #283593;\n  height: 80px;\n  width: 80px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px 10px 10px 10px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: 600;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.submit[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.whatsapp[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%], .mail[_ngcontent-%COMP%] {\n  height: 50px;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.whatsapp[_ngcontent-%COMP%] {\n  background-color: #2bc781;\n  padding: 0px 23px;\n}\n\n.phone[_ngcontent-%COMP%] {\n  padding: 0px 23px;\n  background-color: #6868da;\n}\n\n.mail[_ngcontent-%COMP%] {\n  background-color: #e6665d;\n  padding: 0px 23px;\n}\n\n\n\n\n\n@keyframes pulse-grow-on-hover {\n  to {\n    transform: scale(1.1);\n  }\n}\n\n.pulse-grow-on-hover[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n\nbutton[_ngcontent-%COMP%]:hover   .pulse-grow-on-hover[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:hover   .pulse-grow-on-hover[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover   .pulse-grow-on-hover[_ngcontent-%COMP%]:active {\n  animation-name: pulse-grow-on-hover;\n  animation-duration: 0.3s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUhJO0VBSUosWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLDRFQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFHSTtFQUNJLGNBWkE7RUFhQSxnQkFBQTtBQURSOztBQUlJO0VBQ0kseUJBakJBO0VBa0JBLFlBQUE7QUFGUjs7QUFLQTtFQUNJLHlCQXRCSTtFQXVCSixZQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBSUE7RUFDSSxpQkFBQTtFQUVBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBUUEsc0JBQUE7O0FBQ0E7c0JBQUE7O0FBU0U7RUFDRTtJQUVFLHFCQUFBO0VBTko7QUFDRjs7QUFRRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFFQSx5Q0FBQTtFQUNBLG9DQUFBO0FBTko7O0FBU0U7RUFFRSxtQ0FBQTtFQUVBLHdCQUFBO0VBRUEsaUNBQUE7RUFFQSxtQ0FBQTtFQUVBLDhCQUFBO0FBTkoiLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZSA6ICMyODM1OTM7XHJcbiRvcmFuZ2U6I2Y0NDMzNjtcclxuLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBcclxufVxyXG5tYXQtY2FyZDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICBcclxuICAgIC5wcmljZXtcclxuICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JG9yYW5nZSA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi53aGF0c2FwcCwucGhvbmUsLm1haWx7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5he1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53aGF0c2FwcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJjNzgxO1xyXG4gIHBhZGRpbmc6IDBweCAyM3B4O1xyXG4vLyAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gIHdpZHRoOiAxOTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5waG9uZXtcclxuICAgIHBhZGRpbmc6IDBweCAyM3B4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAxMDQsIDIxOCk7XHJcbiAgICBcclxufVxyXG4ubWFpbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjY2NWQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMjNweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT0qL1xyXG4vKiBQVUxTRSBHUk9XXHJcbi8qPT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2UtZ3Jvdy1vbi1ob3ZlciB7XHJcbiAgICB0byB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHVsc2UtZ3Jvdy1vbi1ob3ZlciB7XHJcbiAgICB0byB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wdWxzZS1ncm93LW9uLWhvdmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlcntcclxuICAucHVsc2UtZ3Jvdy1vbi1ob3ZlciwgLnB1bHNlLWdyb3ctb24taG92ZXI6Zm9jdXMsIC5wdWxzZS1ncm93LW9uLWhvdmVyOmFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZS1ncm93LW9uLWhvdmVyO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlLWdyb3ctb24taG92ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
/* harmony import */ var _Components_category_products_category_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/category-products/category-products.component */ "DvXq");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/contact/contact.component */ "1ngR");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/products/products.component */ "OKhP");
/* harmony import */ var _Components_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/order/order.component */ "s5qz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: "",
        component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "about",
        component: _Components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    },
    {
        path: "products",
        component: _Components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
    },
    {
        path: "contact",
        component: _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
    },
    {
        path: "category-product",
        component: _Components_category_products_category_products_component__WEBPACK_IMPORTED_MODULE_2__["CategoryProductsComponent"],
    },
    {
        path: "order-from-star-trading-company",
        component: _Components_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map