import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the SetrootDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setroot-demo',
  templateUrl: 'setroot-demo.html'
})
export class SetrootDemoPage {
  data: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetrootDemoPage');
  }

  backToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
