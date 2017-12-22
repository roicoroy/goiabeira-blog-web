import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import {TranslateService} from 'ng2-translate';

@Component({
  templateUrl: 'app.html',
  selector: 'MyApp',
  providers: [StatusBar, SplashScreen]
})

export class MyApp {
   @ViewChild(Nav) nav: Nav;
 
  name: any;
  imageUrl:any='assets/img/ricardo_profile.jpg';
  rootPage: string = "HomePage";
  public uid:string;

  constructor(  public af: AngularFireAuth,
                public db: AngularFireDatabase,
                public platform: Platform,
                public statusbar: StatusBar,
                public splashscreen: SplashScreen,
                private events: Events,
                private translateService:TranslateService) {
                this.initializeApp();
           }

  ngOnInit(){
    this.uid=localStorage.getItem('uid');
    if(this.uid!=null){
     this.db.object('/users/' + this.uid).valueChanges().subscribe((res:any) => {
                    this.name=res.name;
                    this.imageUrl= res.image!='' && res.image!=null ? res.image : "assets/img/ricardo_profile.jpg";
                })
   }
      this.useTranslateService();
      // this.getNewsCount();
      // this.getOfferCount();
      this.listenEvents();
  }

  

  private listenEvents(){
    this.events.subscribe('imageUrl',response => {
     this.imageUrl=response.image!='' && response.image!=null? response.image:'assets/img/profile.jpg';
     this.name=response.name;
    })
  }

  private useTranslateService(){
      let value= localStorage.getItem('language');
      let language = value!=null ? value:'en';
      language=='ar'?this.platform.setDir('rtl', true):this.platform.setDir('ltr', true);;
      this.translateService.use(language);
    }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }

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

  home() {
    this.nav.setRoot("HomePage");
  }

  settings() {
    this.nav.setRoot("Settings");
  }

  login() {
    this.nav.setRoot("LoginPage");
  }

  logout() {
    this.af.auth.signOut();
    localStorage.removeItem('uid');
    this.imageUrl='assets/img/profile.jpg';
    this.nav.setRoot("LoginPage");
  }

  isLoggedin() {
    return localStorage.getItem('uid') != null;
  }


  // isCart(){
  //    this.Cart = JSON.parse(localStorage.getItem('Cart'));
  //    this.noOfItemsInCart=this.Cart != null ? this.Cart.length : null;
  //    return true; 
  // }

}
