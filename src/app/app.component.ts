import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnexionProvider} from '../providers/connexion/connexion';
import { TabsPage } from '../pages/tabs/tabs';
import { SQLiteObject } from '@ionic-native/sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public getdatabase: ConnexionProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.appelconnexionbase()
    });
  }

  appelconnexionbase(){
    this.getdatabase.connexion().then((db: SQLiteObject) => {
      db.executeSql("create table user(idc INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(25), prenom VARCHAR(25),email VARCHAR(100), password VARCHAR(50))", {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

      db.executeSql("insert into user (nom,prenom,email,password) values ('Smida','Samar','samarsmida3@gmail.com','samar123')", {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

        db.executeSql("insert into user (nom,prenom,email,password) values ('Ammar','Mabrouka','mabroukaammar3@gmail.com','mabrouka123')", {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

      // db.executeSql("create table annonce(id INTEGER PRIMARY KEY AUTOINCREMENT, nomarticle VARCHAR(25),adresse VARCHAR(20) ,description VARCHAR(100),prix INTEGER, telephone VARCHAR(8) , idc INTEGER,FOREIGN KEY(idc) REFERENCES user(idc))", {})
      //   .then(() => console.log('Executed SQL'))
      //   .catch(e => console.log(e));
        db.executeSql('CREATE TABLE IF NOT EXISTS annonce(id INTEGER PRIMARY KEY,nomarticle TEXT,prix INT,adresse TEXT,telephone TEXT,description TEXT , idc INTEGER, FOREIGN KEY(idc) REFERENCES user(idc))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

      
        
    }).catch((error) => {
      console.log(error);

    })

  }

}
