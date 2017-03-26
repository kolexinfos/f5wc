import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {TutorialPage} from '../pages/tutorial/tutorial'
import { HomePage } from '../pages/home/home';
import { MorePage } from '../pages/more/more';
import { JoinPage } from '../pages/join/join';
import { EnquiryPage } from '../pages/enquiry/enquiry';
import { HistoryPage } from '../pages/history/history';


interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TutorialPage;

  @ViewChild('Nav') nav: NavController;

  pages : PageObj[] = [
    { title: 'Home', component: HomePage, icon: 'contacts' },
    { title: 'Join', component: JoinPage, icon: 'add', index:2 },
    { title: 'Enquiry', component: EnquiryPage, icon: 'information-circle', index:3 },
    { title: 'History', component: HistoryPage, icon: 'mail', index:4 },
    { title: 'More', component: MorePage, icon: 'logo-twitter', index:5 }
   // { title: 'Call Us', component: VerifyPage, icon: 'mail', index:3 }
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      platform.registerBackButtonAction(() => {
        console.log("Back button pressed");
        
        if(this.nav.canGoBack()){
           this.nav.pop();
         }
        else
        {
          navigator['app'].exitApp();  
        }
        
        }, 100);
    });
  }

  openPage(page: PageObj) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      if(page.index == 5)
      {
        
      }
      else if(page.index == 6){
        
      }
      else if (page.index == 7){
        
      }
      else{
        this.nav.push(page.component, {tabIndex: page.index});
      }

    } else {
      this.nav.setRoot(page.component);
    }
  }
}
