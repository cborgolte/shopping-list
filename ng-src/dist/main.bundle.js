webpackJsonp([0,3],{

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_item__ = __webpack_require__(660);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShoppingListService; });
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
    function ShoppingListService(zone, dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.lineItems = [];
        var li = this.lineItems; // alias
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value);
        });
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
    ShoppingListService.prototype.onDrop = function (args) {
        // since lineItems are the model of the dragula container,
        //  they are in correct order now. That is,
        //  we have to persist this new order here.
        var dbItems = this.lineItems.map(function (lineItem, pos, array) {
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
        var lineItem = new __WEBPACK_IMPORTED_MODULE_2__line_item__["a" /* LineItem */]();
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
    ShoppingListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"]) === 'function' && _b) || Object])
    ], ShoppingListService);
    return ShoppingListService;
    var _a, _b;
}());
;
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.service.js.map

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountService; });
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
        this.zone.runOutsideAngular(function () {
            _this.account.username = username;
            _this.account.logged_in = true;
            console.log(_this.account);
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
    AccountService.prototype.signIn = function (username, password) {
        var _this = this;
        var options = { username: username, password: password };
        return hoodie.account.signIn(options)
            .then(function (sessionProp) {
            console.log("logged in as " + sessionProp.username);
            _this.setUser(sessionProp.username);
        })
            .catch(function (error) {
            console.log("log in failed " + error);
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
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account.service.js.map

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountSignInComponent; });
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
        console.log(this.account);
        this.accountService.signIn(this.account.username, this.account.password)
            .then(function () {
            // TODO: check for redirect URL in query parameters
            _this.router.navigate(["/modify"]);
        });
    };
    AccountSignInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(828),
            providers: [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AccountSignInComponent);
    return AccountSignInComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/account-sign-in.component.js.map

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShoppingListModifyComponent; });
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
    function ShoppingListModifyComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.title = 'Modify Shopping List';
        this.lineItems = null;
        this.lineItems = shoppingListService.getLineItems();
        console.log('LineItems', JSON.stringify(this.lineItems));
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
    ShoppingListModifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shopping-list-modify',
            template: __webpack_require__(830),
            styles: [__webpack_require__(487)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === 'function' && _a) || Object])
    ], ShoppingListModifyComponent);
    return ShoppingListModifyComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list-modify.component.js.map

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShoppingListComponent; });
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
    ShoppingListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shopping-list',
            template: __webpack_require__(831),
            styles: [__webpack_require__(487)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === 'function' && _a) || Object])
    ], ShoppingListComponent);
    return ShoppingListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.component.js.map

/***/ },

/***/ 487:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 501:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 501;


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(659);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
// const _window: any = (<any>window);
// const hoodie = _window.hoodie;
// 
// hoodie.ready.then(function() {platformBrowserDynamic().bootstrapModule(AppModule);});
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/main.js.map

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_sign_in_component__ = __webpack_require__(446);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { path: '', redirectTo: '/modify', pathMatch: 'full' },
    { path: 'modify', component: __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__["a" /* ShoppingListModifyComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */] },
    { path: 'log-in', component: __WEBPACK_IMPORTED_MODULE_4__account_account_sign_in_component__["a" /* AccountSignInComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app-routing.module.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
        window['UUUUU'] = this.user;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(829),
            styles: [__webpack_require__(827)],
            viewProviders: [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.component.js.map

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_list_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_sign_in_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shopping_list_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopping_list_modify_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_dragula_ng2_dragula__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shopping_list_modify_component__["a" /* ShoppingListModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__account_account_sign_in_component__["a" /* AccountSignInComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_dragula_ng2_dragula__["DragulaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_9__account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_13_ng2_dragula_ng2_dragula__["DragulaService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.module.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LineItem; });
var LineItem = (function () {
    function LineItem() {
    }
    return LineItem;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/line-item.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/environment.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/polyfills.js.map

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "nav a:visited {\n  color: black;\n}\nnav a.active {\n  color: #039be5;\n}\n"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Sign in</md-card-title>\n    <md-card-content>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.username\" placeholder=\"username\" value=\"\">\n        </md-input-container>\n        <md-input-container>\n            <input mdInput [(ngModel)]=\"account.password\" type=\"password\" placeholder=\"password\" value=\"\">\n        </md-input-container>\n        <button (click)=\"signIn()\" md-button>Submit</button>\n    </md-card-content>\n</md-card>\n"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = "<md-toolbar>\n    <nav>\n        <a routerLink=\"/modify\" routerLinkActive=\"active\">\n            <md-icon>mode edit</md-icon></a>\n        <a routerLink=\"/shop\" routerLinkActive=\"active\">\n            <md-icon>store</md-icon></a>\n    </nav>\n    <span class=\"spacer\"></span>\n    <span class=\"user\">Hi <strong>{{user.username || \"-\"}}</strong>&nbsp;|&nbsp;</span>\n    <nav>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/log-in\" routerLinkActive=\"active\">Sign in</a>\n        <button title=\"sign out\" md-icon-button *ngIf=\"user.logged_in\" (click)=\"accountService.signOut()\"><md-icon>lock-open</md-icon></button>\n        <a *ngIf=\"!user.logged_in\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign up</a>\n    </nav>\n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list [dragula]='\"bag-one\"' [dragulaModel]='lineItems'>\n            <md-list-item *ngFor=\"let item of lineItems; trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.selected\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <div class=\"button-list\" flex>\n                    <button md-icon-button (click)=\"decrease(item)\">\n                        <md-icon>remove</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"increase(item)\">\n                        <md-icon>add</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"remove(item)\">\n                        <md-icon>delete</md-icon>\n                    </button>\n                </div>\n                <md-divider ng-if=\"!$last\"></md-divider>\n            </md-list-item>\n        </md-list>\n        <md-divider></md-divider>\n        <section>\n            <md-input-container>\n                <input mdInput (keyup.enter)=\"onEnter(box)\" #box placeholder=\"add item\" value=\"\">\n            </md-input-container>\n        </section>\n    </md-card-content>\n</md-card>\n<!-- <pre>{{lineItems|json}}</pre> -->\n"

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list>\n            <md-list-item *ngFor=\"let item of getLineItems(); trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.bought\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <md-divider></md-divider>\n            </md-list-item>\n        </md-list>\n        <section>\n            <button (click)=\"done()\" md-button>done</button>\n        </section>\n    </md-card-content>\n</md-card>\n"

/***/ },

/***/ 879:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(502);


/***/ }

},[879]);
//# sourceMappingURL=main.bundle.map