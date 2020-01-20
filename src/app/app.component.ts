import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WeekDay } from '@angular/common';
import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {
  appPages = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "Home"
    },
    {
      title: "Tabs",
      url: "/tabs",
      icon: "stats"
    }
  ];
  username: any;
  email: any;
  profilepic: any;
  signOut: boolean;
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginservice: LoginService,
    private router: Router
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.profileView();
  }
  profileView() {
    this.username =  "John Cena";
    this.email =  "john@Wee.com";
    this.profilepic = "assets/images/profilepic.jpeg";
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     const state = this.loginservice.getToken();
     if(state === true){
       this.signOut = true;
      this.router.navigate(['tabs/tab1']);
     }else{
      this.signOut = false;
      this.router.navigate(['login']);
     }
    });
  }
  logOut(){
    this.loginservice.clearToken();
    this.router.navigate(['login']);
  }
}
