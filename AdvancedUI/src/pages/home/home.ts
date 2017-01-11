import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListDemoPage } from '../list-demo/list-demo';
import { SliderDemoPage } from '../slider-demo/slider-demo';
import { PipeDemoPage } from '../pipe-demo/pipe-demo';
import { DirectiveDemoPage } from '../directive-demo/directive-demo';
import { NavigationDemoPage } from '../navigation-demo/navigation-demo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  listDemo(){
    this.navCtrl.push(ListDemoPage);
  }

  sliderDemo(){
    this.navCtrl.push(SliderDemoPage);
  }
  
  pipeDemo(){
    this.navCtrl.push(PipeDemoPage, {
      price: '12.34',
      currency: 'cdn'
    });
  }

  directiveDemo(){
    this.navCtrl.push(DirectiveDemoPage);
  }

  navigationDemo(){
    this.navCtrl.push(NavigationDemoPage);
  }
}
