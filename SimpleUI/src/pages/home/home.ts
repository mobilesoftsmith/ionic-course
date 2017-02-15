import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { FormDemoPage } from '../form-demo/form-demo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public imageUrl: string;
  public name: string;
  public greetings: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.imageUrl = 'assets/img/tree.jpg';
    this.name = 'Lawrence Zhou';
    this.greetings = 'Hello World!';
  }

  changeName() {
    this.name = 'John Smith';
  }

  helloWorld(){
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: this.greetings,
      buttons: [
        { text: 'OK'}
      ]
    });

    alert.present();
  }

  formDemo(){
    this.navCtrl.push(FormDemoPage);
  }
}
