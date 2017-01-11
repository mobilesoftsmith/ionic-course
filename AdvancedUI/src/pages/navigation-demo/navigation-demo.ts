import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PipeDemoPage } from '../pipe-demo/pipe-demo';
import { SetrootDemoPage } from '../setroot-demo/setroot-demo';

/*
  Generated class for the NavigationDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navigation-demo',
  templateUrl: 'navigation-demo.html'
})
export class NavigationDemoPage {

  public returnedValue: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationDemoPage');
  }

  dataBackDemo(){
    let modelPage = this.modalCtrl.create(PipeDemoPage, {
      price: '56.78',
      currency: 'us'
    });

    modelPage.onDidDismiss(data => {
      this.returnedValue = data.value;
    });

    modelPage.present();
  }

  setrootDemo(){
    this.navCtrl.setRoot(SetrootDemoPage, {
      data: 'This is data from navigation demo page'
    });
  }
}
