import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
// import { CurrencyAnnotation } from '../../pipes/currency-pipe';

/*
  Generated class for the PipeDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pipe-demo',
  templateUrl: 'pipe-demo.html'
})
export class PipeDemoPage {
  private price: string;
  private currency: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vc: ViewController) {
    this.price = navParams.get('price');
    this.currency = navParams.get('currency');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PipeDemoPage');
  }

  close() {
    if (this.currency != 'cdn'){
      let data = {
        value: "1234"
      }
      this.vc.dismiss(data);
    }else{
      this.navCtrl.pop();
    }
  }
}
