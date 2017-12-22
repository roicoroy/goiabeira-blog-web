webpackJsonp([0],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(509));
__export(__webpack_require__(511));
//# sourceMappingURL=index.js.map

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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, fb, af, db, loadingCtrl, alertCtrl, platform, events) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.af = af;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.events = events;
        this.tagHide = true;
        this.valForm = fb.group({
            'email': ['roicoroy@yahoo.com.br', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'password': ['123456', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    LoginPage.prototype.toggleRegister = function () {
        this.tagHide = this.tagHide ? false : true;
    };
    LoginPage.prototype.OnLogin = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.af.auth.signInWithEmailAndPassword(value.email, value.password).then(function (success) {
                localStorage.setItem('uid', success.uid);
                _this.publishEvent();
                _this.navCtrl.setRoot("HomePage");
            })
                .catch(function (error) {
                _this.showAlert(error.message);
            });
        }
    };
    LoginPage.prototype.publishEvent = function () {
        var _this = this;
        this.db.object('/users/' + this.af.auth.currentUser.uid).valueChanges().subscribe(function (userInfo) {
            _this.events.publish('imageUrl', userInfo);
        });
    };
    LoginPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.setRoot("RegistrationPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/login/login.html"*/'<!-- <ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{Login | translate }}</ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content class="login">\n    <img class="logo" src="assets/img/logo-icon.png">\n\n    <!--inputs-->\n    <!--email-->\n    <form [formGroup]="valForm" (submit)="OnLogin($event, valForm.value)">\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Email:" | translate}}</ion-label>\n                    <ion-input class="form-control" id="exampleInputEmail1" type="email" name="email"\n                               placeholder="Enter email"\n                               autocomplete="off" formControlName="email" required></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--password-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{"Password:" | translate}}</ion-label>\n                    <ion-input id="exampleInputPassword1" type="password"\n                               name="password" placeholder="Password" formControlName="password"\n                               required=""></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--forget-->\n        <!-- <ion-row>\n            <ion-col col-12>\n                <p text-center>{{"FORGOT PASSWORD ?" | translate}}</p>\n            </ion-col>\n        </ion-row> -->\n        <!--button-->\n        <ion-row>\n            <ion-col col-12>\n                <button class="login-btn" type="submit" [disabled]="!valForm.valid" ion-button>{{"Login" | translate}}\n                </button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n    <!--login with-->\n    <!-- <ion-row>\n        <ion-col col-12>\n            <p text-center>{{"LOGIN WITH" | translate}}</p>\n        </ion-col>\n    </ion-row> -->\n\n    <!--Social login-->\n    <!-- <ion-row>\n        <ion-col text-center col-12>\n     <span (click)="doFbLogin()">\n       <img class="social-icon" src="assets/img/fb.png">\n     </span>\n            <span (click)="googleLogin()">\n       <img class="social-icon" src="assets/img/g+.png">\n     </span>\n            <span (click)="twitterLogin()">\n       <img class="social-icon" src="assets/img/twitter.png">\n     </span>\n        </ion-col>\n    </ion-row> -->\n\n    <!--go to registration-->\n    <ion-row>\n        <ion-col col-12>\n            <a (click)="Register()">\n                <p text-center>{{"REGISTER NOW !" | translate}}</p>\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/ricardobento/Documents/GOIABEIRA-BLOG/front-end/goiabeira-blog-web/src/pages/login/login.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var forms_1 = __webpack_require__(23);
var lang_1 = __webpack_require__(510);
var CustomValidators = (function () {
    function CustomValidators() {
    }
    /**
     * Validator that requires controls to have a value of a range length.
     */
    CustomValidators.rangeLength = function (rangeLength) {
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { 'rangeLength': true };
        };
    };
    /**
     * Validator that requires controls to have a value of a min value.
     */
    CustomValidators.min = function (min) {
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            return v >= min ? null : { 'min': true };
        };
    };
    /**
     * Validator that requires controls to have a value of a max value.
     */
    CustomValidators.max = function (max) {
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            return v <= max ? null : { 'max': true };
        };
    };
    /**
     * Validator that requires controls to have a value of a range value.
     */
    CustomValidators.range = function (range) {
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            return v >= range[0] && v <= range[1] ? null : { 'range': true };
        };
    };
    /**
     * Validator that requires controls to have a value of digits.
     */
    CustomValidators.digits = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^\d+$/.test(v) ? null : { 'digits': true };
    };
    /**
     * Validator that requires controls to have a value of number.
     */
    CustomValidators.number = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
    };
    /**
     * Validator that requires controls to have a value of url.
     */
    CustomValidators.url = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    };
    /**
     * Validator that requires controls to have a value of email.
     */
    CustomValidators.email = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of date.
     */
    CustomValidators.date = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return !/Invalid|NaN/.test(new Date(v).toString()) ? null : { 'date': true };
    };
    /**
     * Validator that requires controls to have a value of minDate.
     */
    CustomValidators.minDate = function (minDate) {
        if (!lang_1.isDate(minDate))
            throw Error('minDate value must be a formatted date');
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var d = new Date(control.value);
            if (!lang_1.isDate(d))
                return { minDate: true };
            return d >= new Date(minDate) ? null : { minDate: true };
        };
    };
    /**
     * Validator that requires controls to have a value of maxDate.
     */
    CustomValidators.maxDate = function (maxDate) {
        if (!lang_1.isDate(maxDate))
            throw Error('maxDate value must be a formatted date');
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var d = new Date(control.value);
            if (!lang_1.isDate(d))
                return { maxDate: true };
            return d <= new Date(maxDate) ? null : { maxDate: true };
        };
    };
    /**
     * Validator that requires controls to have a value of dateISO.
     */
    CustomValidators.dateISO = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { 'dateISO': true };
    };
    /**
     * Validator that requires controls to have a value of creditCard.
     */
    CustomValidators.creditCard = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, '');
        // problem with chrome
        if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
            return { 'creditCard': true };
        }
        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                }
                else {
                    sum += tmpNum;
                }
            }
            else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        if (Boolean((sum % 10) === 0 ? sanitized : false)) {
            return null;
        }
        return { 'creditCard': true };
    };
    /**
     * Validator that requires controls to have a value of JSON.
     */
    CustomValidators.json = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        try {
            var obj = JSON.parse(v);
            if (Boolean(obj) && typeof obj === 'object') {
                return null;
            }
        }
        catch (e) {
        }
        return { 'json': true };
    };
    /**
     * Validator that requires controls to have a value of base64.
     */
    CustomValidators.base64 = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
    };
    /**
     * Validator that requires controls to have a value of phone.
     */
    CustomValidators.phone = function (locale) {
        var phones = {
            'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
            'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
            'en-ZA': /^(\+?27|0)\d{9}$/,
            'en-AU': /^(\+?61|0)4\d{8}$/,
            'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
            'fr-FR': /^(\+?33|0)[67]\d{8}$/,
            'de-DE': /^(\+?49|0)[1-9]\d{10}$/,
            'pt-PT': /^(\+351)?9[1236]\d{7}$/,
            'el-GR': /^(\+?30)?(69\d{8})$/,
            'en-GB': /^(\+?44|0)7\d{9}$/,
            'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
            'en-ZM': /^(\+26)?09[567]\d{7}$/,
            'ru-RU': /^(\+?7|8)?9\d{9}$/,
            'nb-NO': /^(\+?47)?[49]\d{7}$/,
            'nn-NO': /^(\+?47)?[49]\d{7}$/,
            'vi-VN': /^(0|\+?84)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
            'en-NZ': /^(\+?64|0)2\d{7,9}$/,
            'hu-HU': /^(?:\+?(?:36|\(36\)))[ -\/]?(?:(?:(?:(?!1|20|21|30|31|70|90)[2-9][0-9])[ -\/]?\d{3}[ -\/]?\d{3})|(?:(?:1|20|21|30|31|70|90)[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}))$/,
            'nl-NL': /^(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)$/,
            'de-CH': /^(((\+|00)?41)?([ ])?(\(?0?\)?))([1-9]{2})(([ ])?[0-9]{3})(([ ])?[0-9]{2})(([ ])?[0-9]{2})$/
        };
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            var pattern = phones[locale] || phones['en-US'];
            return (new RegExp(pattern)).test(v) ? null : { 'phone': true };
        };
    };
    /**
     * Validator that requires controls to have a value of uuid.
     */
    CustomValidators.uuid = function (version) {
        var uuid = {
            '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
        };
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            var pattern = uuid[version] || uuid.all;
            return (new RegExp(pattern)).test(v) ? null : { 'uuid': true };
        };
    };
    /**
     * Validator that requires controls to have a value to equal another value.
     */
    CustomValidators.equal = function (val) {
        return function (control) {
            if (lang_1.isPresent(forms_1.Validators.required(control)))
                return null;
            var v = control.value;
            return val === v ? null : { equal: true };
        };
    };
    /**
     * Validator that requires controls to have a value to equal another control.
     */
    CustomValidators.equalTo = function (equalControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return equalControl.value === v ? null : { equalTo: true };
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}
exports.isDate = isDate;
//# sourceMappingURL=lang.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var range_length_1 = __webpack_require__(512);
var min_1 = __webpack_require__(513);
var max_1 = __webpack_require__(514);
var range_1 = __webpack_require__(515);
var digits_1 = __webpack_require__(516);
var number_1 = __webpack_require__(517);
var url_1 = __webpack_require__(518);
var email_1 = __webpack_require__(519);
var date_1 = __webpack_require__(520);
var min_date_1 = __webpack_require__(521);
var max_date_1 = __webpack_require__(522);
var date_iso_1 = __webpack_require__(523);
var credit_card_1 = __webpack_require__(524);
var json_1 = __webpack_require__(525);
var base64_1 = __webpack_require__(526);
var phone_1 = __webpack_require__(527);
var uuid_1 = __webpack_require__(528);
var equal_1 = __webpack_require__(529);
var equal_to_1 = __webpack_require__(530);
exports.CUSTOM_FORM_DIRECTIVES = [
    range_length_1.RangeLengthValidator,
    min_1.MinValidator,
    max_1.MaxValidator,
    range_1.RangeValidator,
    digits_1.DigitsValidator,
    number_1.NumberValidator,
    url_1.UrlValidator,
    email_1.EmailValidator,
    date_1.DateValidator,
    min_date_1.MinDateValidator,
    max_date_1.MaxDateValidator,
    date_iso_1.DateISOValidator,
    credit_card_1.CreditCardValidator,
    json_1.JSONValidator,
    base64_1.Base64Validator,
    phone_1.PhoneValidator,
    uuid_1.UUIDValidator,
    equal_1.EqualValidator,
    equal_to_1.EqualToValidator
];
var CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    CustomFormsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.CUSTOM_FORM_DIRECTIVES],
                    exports: [exports.CUSTOM_FORM_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    CustomFormsModule.ctorParameters = [];
    return CustomFormsModule;
}());
exports.CustomFormsModule = CustomFormsModule;
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var RANGE_LENGTH_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = (function () {
    function RangeLengthValidator() {
    }
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.rangeLength(this.rangeLength);
    };
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = index_1.CustomValidators.rangeLength(changes[key].currentValue);
            }
        }
    };
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                    providers: [RANGE_LENGTH_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    RangeLengthValidator.ctorParameters = [];
    RangeLengthValidator.propDecorators = {
        'rangeLength': [{ type: core_1.Input },],
    };
    return RangeLengthValidator;
}());
exports.RangeLengthValidator = RangeLengthValidator;
//# sourceMappingURL=range-length.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var MIN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = (function () {
    function MinValidator() {
    }
    MinValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.min(this.min);
    };
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = index_1.CustomValidators.min(changes[key].currentValue);
            }
        }
    };
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                    providers: [MIN_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MinValidator.ctorParameters = [];
    MinValidator.propDecorators = {
        'min': [{ type: core_1.Input },],
    };
    return MinValidator;
}());
exports.MinValidator = MinValidator;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var MAX_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxValidator; }),
    multi: true
};
var MaxValidator = (function () {
    function MaxValidator() {
    }
    MaxValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.max(this.max);
    };
    MaxValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'max') {
                this.validator = index_1.CustomValidators.max(changes[key].currentValue);
            }
        }
    };
    MaxValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                    providers: [MAX_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MaxValidator.ctorParameters = [];
    MaxValidator.propDecorators = {
        'max': [{ type: core_1.Input },],
    };
    return MaxValidator;
}());
exports.MaxValidator = MaxValidator;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var RANGE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeValidator; }),
    multi: true
};
var RangeValidator = (function () {
    function RangeValidator() {
    }
    RangeValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.range(this.range);
    };
    RangeValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'range') {
                this.validator = index_1.CustomValidators.range(changes[key].currentValue);
            }
        }
    };
    RangeValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                    providers: [RANGE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    RangeValidator.ctorParameters = [];
    RangeValidator.propDecorators = {
        'range': [{ type: core_1.Input },],
    };
    return RangeValidator;
}());
exports.RangeValidator = RangeValidator;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var DIGITS_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.digits(c);
    };
    DigitsValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                    providers: [DIGITS_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    DigitsValidator.ctorParameters = [];
    return DigitsValidator;
}());
exports.DigitsValidator = DigitsValidator;
//# sourceMappingURL=digits.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var NUMBER_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.number(c);
    };
    NumberValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                    providers: [NUMBER_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    NumberValidator.ctorParameters = [];
    return NumberValidator;
}());
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=number.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var URL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.url(c);
    };
    UrlValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                    providers: [URL_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    UrlValidator.ctorParameters = [];
    return UrlValidator;
}());
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var EMAIL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EmailValidator; }),
    multi: true
};
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.email(c);
    };
    EmailValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    EmailValidator.ctorParameters = [];
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = (function () {
    function DateValidator() {
    }
    DateValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.date(c);
    };
    DateValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                    providers: [DATE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    DateValidator.ctorParameters = [];
    return DateValidator;
}());
exports.DateValidator = DateValidator;
//# sourceMappingURL=date.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var MIN_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = (function () {
    function MinDateValidator() {
    }
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.minDate(this.minDate);
    };
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = index_1.CustomValidators.minDate(changes[key].currentValue);
            }
        }
    };
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                    providers: [MIN_DATE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MinDateValidator.ctorParameters = [];
    MinDateValidator.propDecorators = {
        'minDate': [{ type: core_1.Input },],
    };
    return MinDateValidator;
}());
exports.MinDateValidator = MinDateValidator;
//# sourceMappingURL=min-date.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var MAX_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = (function () {
    function MaxDateValidator() {
    }
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.maxDate(this.maxDate);
    };
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = index_1.CustomValidators.maxDate(changes[key].currentValue);
            }
        }
    };
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                    providers: [MAX_DATE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MaxDateValidator.ctorParameters = [];
    MaxDateValidator.propDecorators = {
        'maxDate': [{ type: core_1.Input },],
    };
    return MaxDateValidator;
}());
exports.MaxDateValidator = MaxDateValidator;
//# sourceMappingURL=max-date.js.map

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var DATE_ISO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateISOValidator; }),
    multi: true
};
var DateISOValidator = (function () {
    function DateISOValidator() {
    }
    DateISOValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.dateISO(c);
    };
    DateISOValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                    providers: [DATE_ISO_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    DateISOValidator.ctorParameters = [];
    return DateISOValidator;
}());
exports.DateISOValidator = DateISOValidator;
//# sourceMappingURL=date-iso.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var CREDIT_CARD_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.creditCard(c);
    };
    CreditCardValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                    providers: [CREDIT_CARD_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    CreditCardValidator.ctorParameters = [];
    return CreditCardValidator;
}());
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=credit-card.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var JSON_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return JSONValidator; }),
    multi: true
};
var JSONValidator = (function () {
    function JSONValidator() {
    }
    JSONValidator.prototype.validate = function (c) {
        return index_1.CustomValidators.json(c);
    };
    JSONValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                    providers: [JSON_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    JSONValidator.ctorParameters = [];
    return JSONValidator;
}());
exports.JSONValidator = JSONValidator;
//# sourceMappingURL=json.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var BASE64_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return index_1.CustomValidators.base64(c);
    };
    Base64Validator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                    providers: [BASE64_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    Base64Validator.ctorParameters = [];
    return Base64Validator;
}());
exports.Base64Validator = Base64Validator;
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var PHONE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return PhoneValidator; }),
    multi: true
};
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.phone(this.phone);
    };
    PhoneValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'phone') {
                this.validator = index_1.CustomValidators.phone(changes[key].currentValue);
            }
        }
    };
    PhoneValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
                    providers: [PHONE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    PhoneValidator.ctorParameters = [];
    PhoneValidator.propDecorators = {
        'phone': [{ type: core_1.Input },],
    };
    return PhoneValidator;
}());
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var UUID_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UUIDValidator; }),
    multi: true
};
var UUIDValidator = (function () {
    function UUIDValidator() {
    }
    UUIDValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.uuid(this.uuid);
    };
    UUIDValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'uuid') {
                this.validator = index_1.CustomValidators.uuid(changes[key].currentValue);
            }
        }
    };
    UUIDValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    UUIDValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                    providers: [UUID_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    UUIDValidator.ctorParameters = [];
    UUIDValidator.propDecorators = {
        'uuid': [{ type: core_1.Input },],
    };
    return UUIDValidator;
}());
exports.UUIDValidator = UUIDValidator;
//# sourceMappingURL=uuid.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.equal(this.equal);
    };
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = index_1.CustomValidators.equal(changes[key].currentValue);
            }
        }
    };
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                    providers: [EQUAL_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    EqualValidator.ctorParameters = [];
    EqualValidator.propDecorators = {
        'equal': [{ type: core_1.Input },],
    };
    return EqualValidator;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=equal.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var index_1 = __webpack_require__(505);
var EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualToValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                    providers: [EQUAL_TO_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    EqualToValidator.ctorParameters = [];
    EqualToValidator.propDecorators = {
        'equalTo': [{ type: core_1.Input },],
    };
    return EqualToValidator;
}());
exports.EqualToValidator = EqualToValidator;
//# sourceMappingURL=equal-to.js.map

/***/ })

});
//# sourceMappingURL=0.js.map