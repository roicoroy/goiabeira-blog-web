webpackJsonp([4],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		502,
		3
	],
	"../pages/login/login.module": [
		501,
		0
	],
	"../pages/registration/registration.module": [
		503,
		2
	],
	"../pages/settings/settings.module": [
		504,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(331);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_config__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_translate_ng2_translate__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_storage__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {CartService} from '../pages/cart.service';





// import { ComponentsModule } from '../components/components.module';
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7_ng2_translate_ng2_translate__["c" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsModule', name: 'Settings', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                // ComponentsModule,
                __WEBPACK_IMPORTED_MODULE_7_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_7_ng2_translate_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: createTranslateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]]
                })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
                // CartService,
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(af, db, platform, statusbar, splashscreen, events, translateService) {
        this.af = af;
        this.db = db;
        this.platform = platform;
        this.statusbar = statusbar;
        this.splashscreen = splashscreen;
        this.events = events;
        this.translateService = translateService;
        this.imageUrl = 'assets/img/ricardo_profile.jpg';
        this.rootPage = "HomePage";
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = localStorage.getItem('uid');
        if (this.uid != null) {
            this.db.object('/users/' + this.uid).valueChanges().subscribe(function (res) {
                _this.name = res.name;
                _this.imageUrl = res.image != '' && res.image != null ? res.image : "assets/img/ricardo_profile.jpg";
            });
        }
        this.useTranslateService();
        // this.getNewsCount();
        // this.getOfferCount();
        this.listenEvents();
    };
    MyApp.prototype.listenEvents = function () {
        var _this = this;
        this.events.subscribe('imageUrl', function (response) {
            _this.imageUrl = response.image != '' && response.image != null ? response.image : 'assets/img/profile.jpg';
            _this.name = response.name;
        });
    };
    MyApp.prototype.useTranslateService = function () {
        var value = localStorage.getItem('language');
        var language = value != null ? value : 'en';
        language == 'ar' ? this.platform.setDir('rtl', true) : this.platform.setDir('ltr', true);
        ;
        this.translateService.use(language);
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusbar.styleDefault();
            _this.splashscreen.hide();
        });
    };
    // initializeApp() {
    //   if (this.platform.ready()) {
    //     this.platform.ready().then((res) => {
    //       if (res == 'cordova') {
    //         this.oneSignal.startInit('a767f4d2-b099-4ba3-b591-65fb3f50e68b', '49214642810');
    //         this.oneSignal.getIds().then(response=>{
    //             });
    //         this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    //         this.oneSignal.handleNotificationReceived().subscribe(() => {
    //         });
    //         this.oneSignal.handleNotificationOpened().subscribe(() => {
    //         });
    //         this.oneSignal.endInit();
    //       }
    //     });
    //   }
    // }
    MyApp.prototype.home = function () {
        this.nav.setRoot("HomePage");
    };
    MyApp.prototype.settings = function () {
        this.nav.setRoot("Settings");
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.logout = function () {
        this.af.auth.signOut();
        localStorage.removeItem('uid');
        this.imageUrl = 'assets/img/profile.jpg';
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.isLoggedin = function () {
        return localStorage.getItem('uid') != null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/app/app.html"*/'\n<ion-split-pane when="sm">\n\n<ion-menu persistent="true" class="menu" [content]="content" *ngIf="this.platform.dir()===\'ltr\'" side="left">\n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col >\n        <img class="user-img" src="{{imageUrl}}">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="isLoggedin()">\n        <p class="user-name">{{name | uppercase}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n      {{\'Home\' | translate}}\n    </button>\n  \n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="settings" item-left></ion-icon>\n      {{\'Profile\'| translate}}\n    </button>\n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      {{\'Login\'| translate}}\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="logout()" menuClose class="menu-item">\n      <ion-icon name="log-out" item-left></ion-icon>\n      {{\'Logout\'| translate}}\n    </button>\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-menu persistent="true" class="menu"\n     [content]="content"  *ngIf="this.platform.dir()===\'rtl\'"\n         side="right">\n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col >\n        <img class="user-img" src="{{imageUrl}}">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="isLoggedin()">\n        <p class="user-name">{{name}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n      {{\'Home\' | translate}}\n    </button>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="settings" item-left></ion-icon>\n      {{\'Profile\'| translate}}\n    </button>\n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      {{\'Login\'| translate}}\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="logout()" menuClose class="menu-item">\n      <ion-icon name="log-out" item-left></ion-icon>\n      {{\'Logout\'| translate}}\n    </button>\n  </ion-content>\n</ion-menu> -->\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/app/app.html"*/,
            selector: 'MyApp',
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
//config default
var firebaseConfig = {
    apiKey: "AIzaSyCq_mLutmHsZQwhJZo0goyIy9H7mMK-bpk",
    authDomain: "goiabeira-news.firebaseapp.com",
    databaseURL: "https://goiabeira-news.firebaseio.com",
    projectId: "goiabeira-news",
    storageBucket: "goiabeira-news.appspot.com",
    messagingSenderId: "189455818775"
};
//# sourceMappingURL=firebase.config.js.map

/***/ })

},[312]);
//# sourceMappingURL=main.js.map