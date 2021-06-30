import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite  } from '@ionic-native/sqlite';
import { AddannoncePage } from '../pages/addannonce/addannonce';
import { EditannoncePage } from '../pages/editannonce/editannonce';
import { ConnexionProvider } from '../providers/connexion/connexion';
import { LoginPage } from '../pages/login/login';
import { FormPage } from '../pages/form/form';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddannoncePage,
    EditannoncePage,
    LoginPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddannoncePage,
    EditannoncePage,
    LoginPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnexionProvider
  ]
})
export class AppModule {}
