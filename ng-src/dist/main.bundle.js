webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account/account-sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Sign in</md-card-title>\n    <md-card-content>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.username\" placeholder=\"username\" value=\"\">\n        </md-input-container>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.password\" type=\"password\" placeholder=\"password\" value=\"\">\n        </md-input-container>\n        <button (click)=\"signIn()\" md-button>Submit</button>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/account/account-sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSignInComponent = (function () {
    function AccountSignInComponent(accountService, router, route) {
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        // ngModel
        this.account = {
            username: "",
            password: "",
        };
    }
    AccountSignInComponent.prototype.signIn = function () {
        var _this = this;
        this.accountService.signIn(this.account.username, this.account.password)
            .then(function () {
            // TODO: check for redirect URL in query parameters
            _this.router.navigate(["/modify"]);
        });
    };
    return AccountSignInComponent;
}());
AccountSignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sign-in',
        template: __webpack_require__("../../../../../src/app/account/account-sign-in.component.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AccountSignInComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account-sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account-sign-up/account-sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account-sign-up/account-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Sign up</md-card-title>\n    <md-card-content>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.username\" placeholder=\"username\" value=\"\">\n        </md-input-container>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.password\" type=\"password\" placeholder=\"password\" value=\"\">\n        </md-input-container>\n        <button (click)=\"signUp()\" md-button>Submit</button>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/account/account-sign-up/account-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSignUpComponent = (function () {
    function AccountSignUpComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        // ngModel
        this.account = {
            username: "",
            password: "",
        };
    }
    AccountSignUpComponent.prototype.ngOnInit = function () {
    };
    AccountSignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.accountService.signUp(this.account.username, this.account.password)
            .then(function () { return _this.accountService.signIn(_this.account.username, _this.account.password); })
            .then(function () {
            // TODO: check for redirect URL in query parameters
            _this.router.navigate(["/modify"]);
        });
    };
    return AccountSignUpComponent;
}());
AccountSignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-sign-up',
        template: __webpack_require__("../../../../../src/app/account/account-sign-up/account-sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account-sign-up/account-sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AccountSignUpComponent);

var _a, _b;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account-sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// HACK: Get a handle to the hoodie client
var _window = window;
var hoodie = _window.hoodie;
var AccountService = (function () {
    function AccountService(zone) {
        var _this = this;
        this.zone = zone;
        this.account = {};
        hoodie.ready.then(function () {
            if (hoodie.account.isSignedIn()) {
                _this.setUser(hoodie.account.username);
            }
            else {
                _this.clearUser();
            }
        });
    }
    AccountService.prototype.setUser = function (username) {
        var _this = this;
        this.zone.run(function () {
            _this.account.username = username;
            _this.account.logged_in = true;
        });
    };
    AccountService.prototype.clearUser = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.account.username = "";
            _this.account.logged_in = false;
            // for (let attr in this.account) {
            //     delete (this.account[attr]);
            // }
        });
    };
    AccountService.prototype.signUp = function (username, password) {
        var _this = this;
        var options = { username: username, password: password };
        return hoodie.account.signUp(options)
            .then(function (sessionProp) {
            _this.setUser(sessionProp.username);
        })
            .catch(function (error) {
            _this.signOut();
            alert("sign up failed: " + error);
        });
    };
    AccountService.prototype.signIn = function (username, password) {
        var _this = this;
        var options = { username: username, password: password };
        return hoodie.account.signIn(options)
            .then(function (sessionProp) {
            _this.setUser(sessionProp.username);
        })
            .catch(function (error) {
            _this.signOut();
            alert("log in failed: " + error);
        });
    };
    AccountService.prototype.getAccount = function () {
        return this.account;
    };
    AccountService.prototype.signOut = function () {
        var _this = this;
        hoodie.account.signOut().then(function () {
            _this.clearUser();
        });
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__ = __webpack_require__("../../../../../src/app/shopping-list-modify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_sign_in_component__ = __webpack_require__("../../../../../src/app/account/account-sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_sign_up_account_sign_up_component__ = __webpack_require__("../../../../../src/app/account/account-sign-up/account-sign-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/modify', pathMatch: 'full' },
    { path: 'modify', component: __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__["a" /* ShoppingListModifyComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */] },
    { path: 'shop/:tab', component: __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_4__account_account_sign_in_component__["a" /* AccountSignInComponent */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_5__account_account_sign_up_account_sign_up_component__["a" /* AccountSignUpComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav a:visited {\n  color: black;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n    <nav>\n        <a routerLink=\"/modify\" routerLinkActive=\"active\">\n            <md-icon>mode edit</md-icon></a>\n        <a routerLink=\"/shop\" routerLinkActive=\"active\">\n            <md-icon>store</md-icon></a>\n    </nav>\n    <span class=\"spacer\"></span>\n    <span class=\"user\">Hi <strong>{{user.username || \"-\"}}</strong>&nbsp;|&nbsp;</span>\n    <nav>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/sign-in\" routerLinkActive=\"active\">Sign in</a>\n        <button title=\"sign out\" md-icon-button *ngIf=\"user.logged_in\" (click)=\"accountService.signOut()\"><md-icon>lock-open</md-icon></button>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign up</a>\n    </nav>\n</md-toolbar>\n<div class=\"app-content\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(accountService) {
        this.accountService = accountService;
        this.user = accountService.getAccount();
    }
    AppComponent.prototype.setUser = function () {
        this.user = this.accountService.getAccount();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_sign_in_component__ = __webpack_require__("../../../../../src/app/account/account-sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_list_modify_component__ = __webpack_require__("../../../../../src/app/shopping-list-modify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_account_sign_up_account_sign_up_component__ = __webpack_require__("../../../../../src/app/account/account-sign-up/account-sign-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shopping_list_modify_component__["a" /* ShoppingListModifyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__account_account_sign_in_component__["a" /* AccountSignInComponent */],
            __WEBPACK_IMPORTED_MODULE_15__account_account_sign_up_account_sign_up_component__["a" /* AccountSignUpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_9__shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_10__account_account_service__["a" /* AccountService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/line-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineItem; });
var LineItem = (function () {
    function LineItem() {
        this.categories = ['all'];
    }
    return LineItem;
}());

//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/line-item.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list-modify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n.mat-grid-tile {\n    overflow: overlay;\n}\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n*/\n\nmd-card {\n  margin: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list-modify.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab *ngFor=\"let category of categories\" label=\"{{category.name}}\">\n        <div>\n            <md-card>\n                <md-card-content>\n                    <md-input-container>\n                        <input mdInput (keyup.enter)=\"onEnter(box)\" #box placeholder=\"add item\" [attr.data-category]=\"category.name\" value=\"\">\n                    </md-input-container>\n                </md-card-content>\n            </md-card>\n\n            <md-card>\n                <md-card-content>\n                    <md-list class=\"lst-items\"><!-- [dragula]='category.name' [dragulaModel]='lineItems[category.name]'--> \n                        <md-list-item *ngFor=\"let item of lineItems[category.name]\" layout=\"row\">\n                            <md-checkbox [(ngModel)]=\"item.selected\" (click)=\"shoppingListService.updateLineItem(item)\">\n                                <span class=\"qty\">{{item.qty}}</span>\n                                <span class=\"item\">{{item.name}}</span>\n                            </md-checkbox>\n                            <div class=\"button-list\" flex>\n                                <button md-icon-button (click)=\"decrease(item)\">\n                                    <md-icon>remove</md-icon>\n                                </button>\n                                <button md-icon-button (click)=\"increase(item)\">\n                                    <md-icon>add</md-icon>\n                                </button>\n                                <button md-icon-button (click)=\"remove(item)\">\n                                    <md-icon>delete</md-icon>\n                                </button>\n                            </div>\n                            <md-divider ng-if=\"!$last\"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                    <!-- <pre>{{lineItems|json}}</pre> -->\n\n                </md-card-content>\n            </md-card>\n\n        </div>\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/shopping-list-modify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListModifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListModifyComponent = (function () {
    function ShoppingListModifyComponent(shoppingListService, dragulaService) {
        var _this = this;
        this.shoppingListService = shoppingListService;
        this.dragulaService = dragulaService;
        this.title = 'Modify Shopping List';
        this.lineItems = shoppingListService.getLineItems();
        this.categories = shoppingListService.getCategories();
        dragulaService.drop.subscribe(function (value) {
            console.log("reorder", _this.lineItems[value[0]]);
            _this.shoppingListService.onReorder(value[0]);
        });
    }
    // handle entering a new item
    ShoppingListModifyComponent.prototype.onEnter = function (input) {
        console.log(input);
        var value = input.value.trim();
        var amount = parseInt(value.split(' ', 1));
        if (!isNaN(amount)) {
            var valueSplitted = value.split(' ');
            value = valueSplitted.slice(1).join(' ');
        }
        else {
            amount = 1;
        }
        var category = input.dataset.category;
        console.log(category);
        this.shoppingListService.createLineItem(value, amount, true, category);
        /*
        this.lineItems[category] = this.lineItems[category] || [];
        this.lineItems[category].push(li);
        */
        // clear input
        input.value = "";
    };
    // decrease item quantity
    ShoppingListModifyComponent.prototype.decrease = function (item) {
        var minValue = 1;
        if (item.qty > minValue) {
            item.qty -= 1;
        }
        this.shoppingListService.updateLineItem(item);
    };
    // increase item quantity
    ShoppingListModifyComponent.prototype.increase = function (item) {
        if (item.qty === undefined || item.qty === null) {
            item.qty = 0;
        }
        item.qty += 1;
        this.shoppingListService.updateLineItem(item);
    };
    // remove item from list
    ShoppingListModifyComponent.prototype.remove = function (item) {
        this.shoppingListService.removeItem(item);
    };
    // track items
    ShoppingListModifyComponent.prototype.trackLineItems = function (index, lineItem) {
        var lineItemRepr = lineItem;
        return lineItemRepr.id;
    };
    return ShoppingListModifyComponent;
}());
ShoppingListModifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopping-list-modify',
        template: __webpack_require__("../../../../../src/app/shopping-list-modify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list-modify.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], ShoppingListModifyComponent);

var _a, _b;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list-modify.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <ng-container *ngFor=\"let category of categories\">\n    <md-tab  *ngIf=\"getLineItems(category.name).length > 0\" label=\"{{category.name}}\">\n        <div>\n            <md-card>\n                <md-card-content>\n                    <md-list class=\"lst-items\">\n                        <md-list-item *ngFor=\"let item of getLineItems(category.name); trackBy: trackLineItems\" layout=\"row\">\n                            <md-checkbox [(ngModel)]=\"item.bought\" (click)=\"shoppingListService.updateLineItem(item)\">\n                                <span class=\"qty\">{{item.qty}}</span>\n                                <span class=\"item\">{{item.name}}</span>\n                            </md-checkbox>\n                            <md-divider ng-if=\"!$last\"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </md-card-content>\n            </md-card>\n        </div>\n        <section>\n            <button (click)=\"done(category.name)\" md-button>done</button>\n        </section>\n    </md-tab>\n    </ng-container>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingListComponent = (function () {
    function ShoppingListComponent(shoppingListService, route, location) {
        this.shoppingListService = shoppingListService;
        this.route = route;
        this.location = location;
        this.title = 'Shopping List';
        this.lineItems = shoppingListService.getLineItems();
        this.categories = shoppingListService.getCategories();
    }
    // return line items that were selected for the shopping list
    ShoppingListComponent.prototype.getLineItems = function (category) {
        if (this.lineItems && this.lineItems[category]) {
            return this.lineItems[category].filter(function (item) { return item.selected; });
        }
        return [];
    };
    // track items
    ShoppingListComponent.prototype.trackLineItems = function (index, lineItem) {
        var lineItemRepr = lineItem;
        return lineItemRepr.id;
    };
    // done - clear bought items from list
    ShoppingListComponent.prototype.done = function (category) {
        var bought = this.lineItems[category].filter(function (item) { return item.bought; });
        this.shoppingListService.resetLineItems(bought);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopping-list',
        template: __webpack_require__("../../../../../src/app/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list-modify.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object])
], ShoppingListComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_item__ = __webpack_require__("../../../../../src/app/line-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var _window = window;
var hoodie = _window.hoodie;
var ShoppingListService = (function () {
    function ShoppingListService(zone) {
        this.lineItems = new Map();
        // categories: string[] = ['all'];
        this.categories = [
            {
                name: 'Obst + Gemüse',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Getränke',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Aufschnitt',
                updated: new Date('1/28/16'),
            },
            {
                name: 'Tiefkühl',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Bad',
                updated: new Date('1/18/16'),
            },
            {
                name: 'Haushaltswaren',
                updated: new Date('1/28/16'),
            },
            {
                name: 'sonstiges',
                updated: new Date('2/20/16'),
            },
            {
                name: 'all',
                updated: new Date('1/18/16'),
            }
        ];
        var li = this.lineItems; // alias
        var cat = this.categories;
        hoodie.ready.then(function () {
            function init(items) {
                // clear all data
                // WTF: li.clear() does not work!
                cat.forEach(function (c) { return li[c.name] = []; });
                // cat.length = 0;
                // retrieve all line items
                var dbItems = items.filter(function (element, index, array) {
                    var retval = element.type === 'LineItem';
                    return retval;
                }).sort(function (lhs, rhs) { return lhs.pos - rhs.pos; });
                // collect all category entries (not implemented yet)
                var dbCategories = items.filter(function (element) { return element.type === 'Category'; })
                    .sort(function (lhs, rhs) { return lhs.pos - rhs.pos; })
                    .map(function (c) { return c.name; });
                zone.run(function () {
                    // add all db categories
                    Array.prototype.push.apply(cat, dbCategories);
                    // collect items per category
                    dbItems.forEach(function (val) {
                        if (val.categories) {
                            val.categories.forEach(function (category) {
                                if (!li[category]) {
                                    li[category] = [];
                                }
                                li[category].push(val);
                                if (cat.findIndex(function (value) { return value.name === category; }) === -1) {
                                    cat.push(category);
                                }
                            });
                        }
                    });
                });
            }
            function dbHasChanged() {
                hoodie.store.findAll().then(init);
            }
            // initalize db
            dbHasChanged();
            //// Events
            // Handle store changes
            hoodie.store.on('change', dbHasChanged);
            // Load new user's data after a new user signs in
            hoodie.account.on('signin', function (accountProperties) {
                init([]);
            });
            // Clear data after a user signs out
            hoodie.account.on('signout', function (accountProperties) {
                init([]);
            });
        });
    }
    ShoppingListService.prototype.getCategories = function () {
        return this.categories;
    };
    ShoppingListService.prototype.db_updateOrCreateLineItem = function (id, lineItemRepr) {
        var _this = this;
        hoodie.store.find(id).then(function (lineItem) {
            lineItemRepr.id = id;
            // merge categories
            lineItemRepr.categories = Array.from(new Set(lineItem.categories.concat(lineItemRepr.categories)));
            _this.db_updateLineItem(lineItemRepr);
        }).catch(function () {
            lineItemRepr.id = id;
            _this.db_addLineItem(lineItemRepr);
        });
    };
    ShoppingListService.prototype.db_addLineItem = function (lineItem) {
        var lineItemRepr = lineItem;
        lineItemRepr.type = 'LineItem';
        hoodie.store.add(lineItemRepr).then(function () {
        });
    };
    ShoppingListService.prototype.db_updateLineItem = function (lineItem) {
        var lineItemRepr = lineItem;
        hoodie.store.update(lineItemRepr.id, lineItem);
    };
    ShoppingListService.prototype.db_updateLineItems = function (lineItems) {
        var lineItemsRepr = lineItems;
        hoodie.store.update(lineItemsRepr);
    };
    ShoppingListService.prototype.db_deleteLineItem = function (lineItem) {
        var lineItemRepr = lineItem;
        hoodie.store.remove({ id: lineItemRepr.id });
    };
    ShoppingListService.prototype.onReorder = function (category) {
        var positions = this.lineItems[category]
            .map(function (lineItem, pos, array) { return lineItem.pos; })
            .sort();
        var dbItems = this.lineItems[category].map(function (lineItem, pos, array) {
            var newPos = positions[pos];
            if (newPos !== lineItem.pos) {
                lineItem.pos = newPos;
                return lineItem;
            }
            return null;
        }).filter(function (lineItem, pos, array) { return lineItem != null; });
        this.db_updateLineItems(dbItems);
    };
    ShoppingListService.prototype.getLineItems = function () {
        return this.lineItems;
    };
    ShoppingListService.prototype.createLineItem = function (name, qty, selected, category) {
        var id = name.toLowerCase();
        var lineItem = new __WEBPACK_IMPORTED_MODULE_1__line_item__["a" /* LineItem */]();
        lineItem.qty = qty;
        lineItem.name = name;
        lineItem.selected = selected;
        lineItem.categories.push(category);
        this.db_updateOrCreateLineItem(name, lineItem);
    };
    ShoppingListService.prototype.updateLineItem = function (item) {
        this.db_updateLineItem(item);
    };
    ShoppingListService.prototype.removeItem = function (item) {
        this.db_deleteLineItem(item);
    };
    ShoppingListService.prototype.resetLineItems = function (lineItems) {
        var items = lineItems.map(function (item) {
            item.bought = false;
            item.selected = false;
            return item;
        });
        this.db_updateLineItems(items);
    };
    return ShoppingListService;
}());
ShoppingListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], ShoppingListService);

;
var _a;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
// const _window: any = (<any>window);
// const hoodie = _window.hoodie;
// 
// hoodie.ready.then(function() {platformBrowserDynamic().bootstrapModule(AppModule);});
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map