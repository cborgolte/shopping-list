webpackJsonp([0,3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(51);
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
        template: __webpack_require__(343),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AccountSignInComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account-sign-in.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(51);
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
        template: __webpack_require__(344),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AccountSignUpComponent);

var _a, _b;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account-sign-up.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__(90);
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
        this.lineItems = null;
        this.lineItems = shoppingListService.getLineItems();
        dragulaService.drop.subscribe(function (value) {
            _this.shoppingListService.onReorder();
        });
    }
    // handle entering a new item
    ShoppingListModifyComponent.prototype.onEnter = function (input) {
        var value = input.value;
        var amount = parseInt(value.split(' ', 1));
        if (!isNaN(amount)) {
            var valueSplitted = value.split(' ');
            value = valueSplitted.slice(1).join(' ');
        }
        else {
            amount = 1;
        }
        this.shoppingListService.createLineItem(value, amount, true);
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
        template: __webpack_require__(346),
        styles: [__webpack_require__(144)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], ShoppingListModifyComponent);

var _a, _b;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list-modify.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(65);
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
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.title = 'Shopping List';
        this.lineItems = null;
        this.lineItems = shoppingListService.getLineItems();
    }
    // return line items that were selected for the shopping list
    ShoppingListComponent.prototype.getLineItems = function () {
        return this.lineItems.filter(function (item) { return item.selected; });
    };
    // track items
    ShoppingListComponent.prototype.trackLineItems = function (index, lineItem) {
        var lineItemRepr = lineItem;
        return lineItemRepr.id;
    };
    // done - clear bought items from list
    ShoppingListComponent.prototype.done = function () {
        var bought = this.lineItems.filter(function (item) { return item.bought; });
        this.shoppingListService.resetLineItems(bought);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopping-list',
        template: __webpack_require__(347),
        styles: [__webpack_require__(144)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], ShoppingListComponent);

var _a;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 162;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(172);





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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_sign_in_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_sign_up_account_sign_up_component__ = __webpack_require__(104);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__(90);
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
        template: __webpack_require__(345),
        styles: [__webpack_require__(338)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_list_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_sign_in_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopping_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_list_modify_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_account_sign_up_account_sign_up_component__ = __webpack_require__(104);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineItem; });
var LineItem = (function () {
    function LineItem() {
    }
    return LineItem;
}());

//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/line-item.js.map

/***/ }),

/***/ 174:
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/polyfills.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "nav a:visited {\n  color: black;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Sign in</md-card-title>\n    <md-card-content>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.username\" placeholder=\"username\" value=\"\">\n        </md-input-container>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.password\" type=\"password\" placeholder=\"password\" value=\"\">\n        </md-input-container>\n        <button (click)=\"signIn()\" md-button>Submit</button>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Sign up</md-card-title>\n    <md-card-content>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.username\" placeholder=\"username\" value=\"\">\n        </md-input-container>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.password\" type=\"password\" placeholder=\"password\" value=\"\">\n        </md-input-container>\n        <button (click)=\"signUp()\" md-button>Submit</button>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n    <nav>\n        <a routerLink=\"/modify\" routerLinkActive=\"active\">\n            <md-icon>mode edit</md-icon></a>\n        <a routerLink=\"/shop\" routerLinkActive=\"active\">\n            <md-icon>store</md-icon></a>\n    </nav>\n    <span class=\"spacer\"></span>\n    <span class=\"user\">Hi <strong>{{user.username || \"-\"}}</strong>&nbsp;|&nbsp;</span>\n    <nav>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/sign-in\" routerLinkActive=\"active\">Sign in</a>\n        <button title=\"sign out\" md-icon-button *ngIf=\"user.logged_in\" (click)=\"accountService.signOut()\"><md-icon>lock-open</md-icon></button>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign up</a>\n    </nav>\n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list [dragula]='\"bag-one\"' [dragulaModel]='lineItems'>\n            <md-list-item *ngFor=\"let item of lineItems; trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.selected\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <div class=\"button-list\" flex>\n                    <button md-icon-button (click)=\"decrease(item)\">\n                        <md-icon>remove</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"increase(item)\">\n                        <md-icon>add</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"remove(item)\">\n                        <md-icon>delete</md-icon>\n                    </button>\n                </div>\n                <md-divider ng-if=\"!$last\"></md-divider>\n            </md-list-item>\n        </md-list>\n        <md-divider></md-divider>\n        <section>\n            <md-input-container>\n                <input mdInput (keyup.enter)=\"onEnter(box)\" #box placeholder=\"add item\" value=\"\">\n            </md-input-container>\n        </section>\n    </md-card-content>\n</md-card>\n<!-- <pre>{{lineItems|json}}</pre> -->\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list>\n            <md-list-item *ngFor=\"let item of getLineItems(); trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.bought\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <md-divider></md-divider>\n            </md-list-item>\n        </md-list>\n        <section>\n            <button (click)=\"done()\" md-button>done</button>\n        </section>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_item__ = __webpack_require__(173);
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
        this.lineItems = [];
        var li = this.lineItems; // alias
        hoodie.ready.then(function () {
            function init(items) {
                li.length = 0; // clear the array
                var dbItems = items.filter(function (element, index, array) {
                    var retval = element.type === 'LineItem';
                    return retval;
                }).sort(function (lhs, rhs) { return lhs.pos - rhs.pos; });
                zone.run(function () {
                    // merge dbItems in (empty) li
                    return Array.prototype.push.apply(li, dbItems);
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
    ShoppingListService.prototype.onReorder = function () {
        var dbItems = this.lineItems.map(function (lineItem, pos, array) {
            console.log(lineItem.name, lineItem.pos, pos);
            if (pos != lineItem.pos) {
                lineItem.pos = pos;
                return lineItem;
            }
            return null;
        }).filter(function (lineItem, pos, array) { return lineItem != null; });
        this.db_updateLineItems(dbItems);
    };
    ShoppingListService.prototype.getLineItems = function () {
        return this.lineItems;
    };
    ShoppingListService.prototype.createLineItem = function (name, qty, selected) {
        var lineItem = new __WEBPACK_IMPORTED_MODULE_1__line_item__["a" /* LineItem */]();
        lineItem.pos = this.lineItems.length;
        lineItem.qty = qty;
        lineItem.name = name;
        lineItem.selected = selected;
        this.db_addLineItem(lineItem);
        return lineItem;
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

/***/ })

},[401]);
//# sourceMappingURL=main.bundle.js.map