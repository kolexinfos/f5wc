import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser, Toast} from 'ionic-native';





//import {RadioPlayer} from '../../providers/radio-player/radio-player';

declare var window;
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'home.html',

})
export class HomePage {

  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 2000,
    pager:true
  };

  constructor( public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

onSlideChangeStart(event){
  //console.log("onSlideChangeStart");
}

GoToJoin(){
  Toast.show("Slow down chief this page is under construction.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
}

GoToEnquiry(){
     Toast.show("Slow down chief this page is under construction.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );

}

GoToHistory(){
   Toast.show("Slow down chief this page is under construction.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );

}

GoToMore(){
   Toast.show("Slow down chief this page is under construction.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );

}



}
