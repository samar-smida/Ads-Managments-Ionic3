import { Component } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionProvider} from '../../providers/connexion/connexion';
import { FormPage } from '../form/form';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string ;
  password : string ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public log :ConnexionProvider, public alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(form){
  this.log.connexion().then( (db:SQLiteObject) => {
    db.executeSql('select * from user WHERE user.password= (?) and user.email = (?) ',[[this.password],[this.email]]).then((res) => {
      if (res.rows.length !=0) {
        if (res.rows.item(0).email == this.email && res.rows.item(0).password == this.password) {
          localStorage.setItem('email', this.email);
          localStorage.setItem('nom', res.rows.item(0).nom);
          localStorage.setItem('prenom', res.rows.item(0).prenom);
          localStorage.setItem('id', res.rows.item(0).idc);
          this.navCtrl.push(HomePage);
          //console.log(this.email);
        }
      }
      else{
        this.showAlert("parametre login non valide");
      }
    })
      .catch((e) => {
        this.showAlert("Requete non valide"+e);
        console.log("this is an error", e);
})

  } ).catch((e) => {
    this.showAlert("base");
    console.log("this is an error", e);
})


}

showAlert(msg) {
  const alert = this.alert.create({
    title: 'Erreur',
    subTitle: msg,
    buttons: ['OK']
  });
  alert.present();
}

nouvelprofil(){
  this.navCtrl.push(FormPage)
}
}
