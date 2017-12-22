webpackJsonp([1],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Settings = (function () {
    function Settings(af, db, toastCtrl, loadingCtrl, navCtrl, platform, translate, events) {
        this.af = af;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.translate = translate;
        this.events = events;
        this.user = {};
        this.url = 'assets/img/profile.jpg';
        this.options = [
            {
                "language": "English",
                "value": "en"
            },
            {
                "language": "Portuguese",
                "value": "pt"
            }
        ];
        this.file = {};
        this.storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]();
        var value = localStorage.getItem('language');
        this.value = value != null ? value : 'en';
        this.translate.setDefaultLang('en');
    }
    Settings.prototype.ngOnInit = function () {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db.object('/users/' + this.af.auth.currentUser.uid).valueChanges().subscribe(function (res) {
                _this.user = res;
                _this.user.image = res.image ? res.image : '';
                _this.url = res.image ? res.image : "assets/img/profile.jpg";
            });
        }
    };
    Settings.prototype.readUrl = function (event) {
        var _this = this;
        this.file = document.getElementById('file').files[0];
        var metadata = {
            contentType: 'image/*'
        };
        var loader = this.loadingCtrl.create({
            content: 'please wait..'
        });
        loader.present();
        this.storageRef.ref().child('profile/' + this.file.name).put(this.file, metadata)
            .then(function (res) {
            _this.user.image = res.downloadURL;
            _this.url = res.downloadURL;
            _this.db.object('users' + '/' + _this.af.auth.currentUser.uid + '/image').set(res.downloadURL);
            loader.dismiss();
        }).catch(function (error) {
            loader.dismiss();
        });
    };
    Settings.prototype.changeLanguage = function () {
        localStorage.setItem('language', this.value);
        if (this.value == 'pt') {
            this.platform.setDir('ltr', true);
            this.translate.use('pt');
        }
        else {
            this.platform.setDir('ltr', true);
            this.translate.use('en');
        }
    };
    Settings.prototype.onSubmit = function (user) {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db.object('/users/' + this.af.auth.currentUser.uid).update({
                name: this.user.name,
                image: this.user.image,
                email: this.user.email,
                mobileNo: this.user.mobileNo
            }).then(function () {
                _this.createToaster("user information updated successfully", 3000);
                _this.events.publish('imageUrl', _this.user);
            });
        }
    };
    Settings.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/settings/settings.html"*/'<!-- <ion-header>\n    <ion-navbar hideBackButton="true">\n        <ion-title>{{"Settings" | translate}}</ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n    <div class="login">\n        <ion-row>\n            <img class="img" [src]="url"><br>\n        </ion-row>\n        <ion-row>\n            <input type="file" name="file" id="file" class="inputfile"\n                   (change)="readUrl($event)">\n            <label for="file" class="upload">\n                <ion-icon ios="ios-cloud-upload" md="md-cloud-upload"></ion-icon>\n            </label>\n        </ion-row>\n        <p class="name">{{user.name}}</p>\n    </div>\n    <ion-list>\n        <ion-item class="select-item">\n            <ion-label>{{"Language:" |translate }}</ion-label>\n            <ion-select [(ngModel)]="value" (ionChange)="changeLanguage()">\n                <ion-option *ngFor="let option of options" value="{{option.value}}"> {{option.language }}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <form (ngSubmit)="onSubmit(f)" #f="ngForm">\n        <ion-list>\n            <!--card no-->\n            <ion-item>\n                <ion-label>{{"User Name:" | translate}}</ion-label>\n                <ion-input type="text" name="name" id="name" placeholder="{{\'name\' | translate}}"\n                           [(ngModel)]="user.name" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{"Email:" | translate}}</ion-label>\n                <ion-input type="email" name="email" id="email" placeholder="{{\'email\' | translate}}"\n                           [(ngModel)]="user.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{"Mobile Number:" | translate}}</ion-label>\n                <ion-input type="text" name="mobileNo" id="mobileNo" placeholder="mobile number"\n                           [(ngModel)]="user.mobileNo" required></ion-input>\n            </ion-item>\n            \n        </ion-list>\n        <!--button-->\n        <button class="login-btn" ion-button type="submit" [disabled]="!f.valid">{{"Save" | translate}}</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=1.js.map