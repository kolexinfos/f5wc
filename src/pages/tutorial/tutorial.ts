import { Component } from '@angular/core';

import { MenuController, NavController, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  player:any;

  constructor(public loadingCtrl: LoadingController,
  public platform: Platform, public navCtrl: NavController, 
  public menu: MenuController) {
    
    //this.startPlaying();

    this.slides = [
      {
        title: '',
        description: '',
        image: 'img/logo.jpg',
      },
      {
        title: '',
        description: 'The F5WC is the world\'s largest amateur 5 a side football tournament',
        image: 'img/f5wc.jpg',
      },
      {
        title: '',
        description: 'The winning team from each country win an all expenses paid trip to the World Finals in <b>Australia</b>',
        image: 'img/f5wc.jpg'
      }
    ];

    this.platform.ready().then(() => {
    console.log("ionViewWillEnter called");
    
    });
  }

  startApp() {
    this.navCtrl.setRoot(HomePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);

  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);

  }

}
