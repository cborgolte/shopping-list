webpackJsonp([0,3],{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_item__ = __webpack_require__(647);
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
            console.log("drop: " + value[0]);
            _this.onDrop(value);
        });
        hoodie.ready.then(function setupDB() {
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
            hoodie.store.on('change', dbHasChanged);
            dbHasChanged();
            var email = 'oberweg';
            var password = '123iu9lksjdf!lkjpi-adfllkj';
            var options = { username: email, password: password };
            // hoodie.account.signUp(options)
            // .finally(() => hoodie.account.signIn(options))
            // .then((sessionProp) => console.log("logged in as " + sessionProp.account.username));
            hoodie.account.signIn(options)
                .then(function (sessionProp) { return console.log("logged in as " + sessionProp.username); });
        });
    }
    ShoppingListService.prototype.db_addLineItem = function (lineItem) {
        var lineItemRepr = lineItem;
        lineItemRepr.type = 'LineItem';
        hoodie.store.add(lineItemRepr).then(function () {
            console.log('persisted line item', JSON.stringify(lineItem));
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

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(170);
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
            template: __webpack_require__(815),
            styles: [__webpack_require__(469)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === 'function' && _a) || Object])
    ], ShoppingListModifyComponent);
    return ShoppingListModifyComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list-modify.component.js.map

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(170);
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
    // track items
    ShoppingListComponent.prototype.trackLineItems = function (index, lineItem) {
        var lineItemRepr = lineItem;
        return lineItemRepr.id;
    };
    ShoppingListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shopping-list',
            template: __webpack_require__(816),
            styles: [__webpack_require__(469)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === 'function' && _a) || Object])
    ], ShoppingListComponent);
    return ShoppingListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/shopping-list.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 484:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 484;


/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(646);





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

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_modify_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__(430);
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

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
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
    function AppComponent() {
        this.title = 'Shopping List';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(814),
            styles: [__webpack_require__(813)],
            viewProviders: [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.component.js.map

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopping_list_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_list_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_list_modify_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shopping_list_modify_component__["a" /* ShoppingListModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shopping_list_component__["a" /* ShoppingListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__["DragulaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__["DragulaService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/app.module.js.map

/***/ },

/***/ 647:
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

/***/ 648:
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

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/christophborgolte/code/playground/shopping-list/ng-src/src/polyfills.js.map

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "nav a:visited {\n  color: black;\n}\nnav a.active {\n  color: #039be5;\n}\n"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<md-toolbar>\n<nav>\n    <a routerLink=\"/modify\" routerLinkActive=\"active\">Liste ändern</a>\n    <a routerLink=\"/shop\" routerLinkActive=\"active\">Einkaufen</a>\n</nav>\n</md-toolbar>\n<router-outlet></router-outlet>"

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list [dragula]='\"bag-one\"'>\n            <md-list-item *ngFor=\"let item of lineItems; trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.selected\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <div class=\"button-list\" flex>\n                    <button md-icon-button (click)=\"decrease(item)\">\n                        <md-icon>remove</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"increase(item)\">\n                        <md-icon>add</md-icon>\n                    </button>\n                    <button md-icon-button (click)=\"remove(item)\">\n                        <md-icon>delete</md-icon>\n                    </button>\n                </div>\n                <md-divider ng-if=\"!$last\"></md-divider>\n            </md-list-item>\n        </md-list>\n        <md-divider></md-divider>\n        <section>\n            <md-input-container>\n                <input md-input (keyup.enter)=\"onEnter(box)\" #box placeholder=\"add item\" value=\"\">\n            </md-input-container>\n        </section>\n    </md-card-content>\n</md-card>\n<!-- <pre>{{lineItems|json}}</pre> --> \n"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-content>\n        <md-list [dragula]='\"bag-one\"' [dragulaModel]='lineItems'>\n            <md-list-item *ngFor=\"let item of lineItems; trackBy: trackLineItems\" layout=\"row\">\n                <md-checkbox [(ngModel)]=\"item.bought\" (click)=\"shoppingListService.updateLineItem(item)\">\n                    <span class=\"qty\">{{item.qty}}</span>\n                    <span class=\"item\">{{item.name}}</span>\n                </md-checkbox>\n                <md-divider></md-divider>\n            </md-list-item>\n        </md-list>\n        <section>\n            <button md-button>done</button>\n        </section>\n    </md-card-content>\n</md-card>"

/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(485);


/***/ }

},[848]);
//# sourceMappingURL=main.bundle.map