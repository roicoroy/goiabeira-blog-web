webpackJsonp([2],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegistrationPageModule = (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
            ]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_pipe__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_pipe__["a" /* AppPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__["b" /* TranslateModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1__app_pipe__["a" /* AppPipe */]],
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppPipe = (function () {
    function AppPipe() {
    }
    AppPipe.prototype.transform = function (value, args) {
        if (value) {
            var limit = args.length > 0 ? parseInt(args[0], 50) : 50;
            var trail = args.length > 1 ? args[1] : '...';
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    AppPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'limitPipe'
        })
    ], AppPipe);
    return AppPipe;
}());

//# sourceMappingURL=app.pipe.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {GooglePlus} from '@ionic-native/google-plus';
// import {TwitterConnect} from '@ionic-native/twitter-connect';
// import {Facebook} from '@ionic-native/facebook';
var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, events, fb, af, db, loadingCtrl, alertCtrl, 
        // public twitter: TwitterConnect,
        // public facebook: Facebook,
        // public googlePlus: GooglePlus,
        platform) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.fb = fb;
        this.af = af;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    RegistrationPage.prototype.onSubmit = function () {
        var _this = this;
        this.af.auth.createUserWithEmailAndPassword(this.registration.value.email, this.registration.value.password)
            .then(function (success) {
            _this.db.object('/users/' + success.uid).update({
                name: _this.registration.value.name,
                email: _this.registration.value.email,
                mobileNo: _this.registration.value.mobileNo,
                role: 'User'
            });
            localStorage.setItem('uid', success.uid);
            _this.navCtrl.setRoot("HomePage");
        })
            .catch(function (error) {
            console.log("Firebase failure: " + JSON.stringify(error));
            _this.showAlert(error.message);
        });
    };
    RegistrationPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegistrationPage.prototype.navLogin = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    RegistrationPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    //Validation
    RegistrationPage.prototype.buildForm = function () {
        this.registration = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'mobileNo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(24)])
        });
    };
    RegistrationPage.prototype.publishEvent = function () {
        var _this = this;
        this.db.object('/users/' + this.af.auth.currentUser.uid).valueChanges().subscribe(function (userInfo) {
            _this.events.publish('imageUrl', userInfo);
        });
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/registration/registration.html"*/'<!-- <ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content class="login">\n    <img class="logo" src="assets/img/logo-icon.png">\n    <form [formGroup]="registration" (ngSubmit)="onSubmit()">\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Name:" | translate}}</ion-label>\n                    <ion-input type="text" name="name" formControlName="name" required=""></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--email-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Email:" | translate}}</ion-label>\n                    <ion-input type="email" name="email" formControlName="email" required=""></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--Mobile No-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Mobile No:" | translate}}</ion-label>\n                    <ion-input type="tel" name="mobileNo" id="mobileNo" formControlName="mobileNo"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--password-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Password:" | translate}}</ion-label>\n                    <ion-input type="password" name="password" id="password" formControlName="password"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--button-->\n        <ion-row>\n            <ion-col col-12>\n                <button class="login-btn" type="submit" [disabled]="!registration.valid" ion-button>{{"Register" |\n                    translate}}\n                </button>\n            </ion-col>\n        </ion-row>\n    </form>\n    \n    <ion-row>\n        <ion-col col-12>\n            <a (click)="navLogin()">\n                <p text-center>{{"ALREADY REGISTERED !" | translate}}</p>\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/registration/registration.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=2.js.map