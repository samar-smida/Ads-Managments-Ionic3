import { Component } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionProvider } from '../../providers/connexion/connexion';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  nom : string ;
  prenom : string ;
  email : string ;
  password : string ;

  constructor(public navCtrl: NavController, public navParams: NavParams , public alert:AlertController, public log : ConnexionProvider
    ) {
  }
  login(form){
    this.log.connexion().then( (db:SQLiteObject) => {
      db.executeSql("insert into user (nom,prenom,email,password) values ((?),(?),(?),(?))",[ [this.nom] ,[this.prenom] ,[this.email],[this.password]]).then((res) => {
            this.showAlert("Succés","Compte crée avec succés");
            this.navCtrl.push(LoginPage)
            //console.log(this.email);
      })
        .catch((e) => {
          this.showAlert("Erreur","Requete non valide");
          console.log("this is an error", e);
  })
  
    } ).catch((e) => {
      this.showAlert("Erreur","base");
      console.log("this is an error", e);
  })
  
  
  }
  
  showAlert(title,msg) {
    const alert = this.alert.create({
      title:title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
