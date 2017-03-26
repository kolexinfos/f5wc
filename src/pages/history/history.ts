import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Toast} from 'ionic-native';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  itemSelected(item){
    console.log(item);

    Toast.show("Slow down chief this page is under construction.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
  }

}
