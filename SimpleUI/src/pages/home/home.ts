import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageUrl: string;
  public name: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.imageUrl = 'assets/img/tree.jpg'
    this.name = 'Lawrence Zhou';
  }

  helloWorld(){
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'Hello World!',
      buttons: [
        { text: 'OK'}
      ]
    });

    alert.present();
  }

  changeName() {
    this.name = 'John Smith';
  }

}
