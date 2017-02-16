import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

/*
  Generated class for the ListDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-demo',
  templateUrl: 'list-demo.html'
})
export class ListDemoPage {

  public items = [
    { title: 'item1' },
    { title: 'item2' },
    { title: 'item3' },
    { title: 'item4' },
    { title: 'item5' },
    { title: 'item6' },
    { title: 'item7' },
    { title: 'item8' },
    { title: 'item9' },
    { title: 'item10' },
    { title: 'item11' },
    { title: 'item12' },
    { title: 'item13' },
    { title: 'item14' },
    { title: 'item15' },
    { title: 'item16' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDemoPage');
  }

  itemClicked(event, item) {
    // console.log('item.title: ' + item.title);
    // alert(item.title);

    // pass item to the details page
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
