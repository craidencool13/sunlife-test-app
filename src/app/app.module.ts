import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { PROVIDER, PLUGINS, NATIVE } from '../app/imports'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


var config = {
  backButtonText: '',
  iconMode: 'ios',
  mode:'ios',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  pageTransition: 'ios',
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, config),
    HttpModule,
    HttpClientModule,
    PLUGINS,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDER,
    NATIVE,
  ]
})
export class AppModule {}
