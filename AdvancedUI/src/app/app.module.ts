import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListDemoPage } from '../pages/list-demo/list-demo';
import { SliderDemoPage } from '../pages/slider-demo/slider-demo';
import { PipeDemoPage } from '../pages/pipe-demo/pipe-demo';
import { DirectiveDemoPage } from '../pages/directive-demo/directive-demo';
import { NavigationDemoPage } from '../pages/navigation-demo/navigation-demo';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { SetrootDemoPage } from '../pages/setroot-demo/setroot-demo';

import { CurrencyAnnotation } from '../pipes/currency-pipe';
import { ElasticHeader } from '../components/elastic-header/elastic-header';
import { HighLighter } from '../components/high-lighter/high-lighter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListDemoPage,
    SliderDemoPage,
    PipeDemoPage,
    DirectiveDemoPage,
    NavigationDemoPage,
    ItemDetailsPage, 
    SetrootDemoPage,
    CurrencyAnnotation,
    ElasticHeader,
    HighLighter
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListDemoPage,
    SliderDemoPage,
    PipeDemoPage,
    DirectiveDemoPage,
    NavigationDemoPage,
    ItemDetailsPage,
    SetrootDemoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
