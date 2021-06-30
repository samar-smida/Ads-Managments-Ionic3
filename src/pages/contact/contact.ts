import { Component } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';

import { NavController } from 'ionic-angular';
import { ConnexionProvider } from '../../providers/connexion/connexion';
import { AddannoncePage } from '../addannonce/addannonce';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public cnx : ConnexionProvider, public sqlite:SQLite) {

  }
getname(){
  return localStorage.getItem('nom') 
  
}
 getprenom() {
  return localStorage.getItem('prenom')

 }

 getemail() {
  return localStorage.getItem('email')

 }

 //ajouter annonce
 addAnnonce(){
  this.navCtrl.push(AddannoncePage) ; 
}

// //user annonce 
// data : any []
// getData(){
//   this.data=[]
//   this.sqlite.create({
//     name:'data.db',
//     location:'default'
//   }).then((db:SQLiteObject)=>{
//     db.executeSql('select * from annonce a, user u where a.idc=u.idc and a.idc= (?)',[[localStorage.getItem('id')]]).then((res)=>{
//       console.log(res.rows.item(0));
//       for (let index = 0; index < res.rows.length; index++) {
//         this.data.push(res.rows.item(index));
//       }
      
//     }).catch(e=>console.log(e)
//     )
//   })
//   .catch(e=>console.log(e))
// }

 

}
