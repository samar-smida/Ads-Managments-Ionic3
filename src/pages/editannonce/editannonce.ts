import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-editannonce',
  templateUrl: 'editannonce.html',
})
export class EditannoncePage {

  data= {
    id:0,
    nomarticle :'',
    prix :0 ,
    adresse :'',
    telephone:'' ,
    description :''
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public sqlite: SQLite) {

      this.data.id=navParams.get('id');
      this.data.nomarticle=navParams.get('nomarticle');
      this.data.prix= parseInt( navParams.get('prix') ); 
      this.data.adresse=navParams.get('adresse'); 
      this.data.telephone =navParams.get('telephone');
      this.data.description=navParams.get('description');    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditannoncePage');
  }

//edit function
//   update(){
//     this.sqlite.create({
//       name: 'data.db',
//       location: 'default'
//   })
//    .then((db: SQLiteObject) => {

//     db.executeSql('UPDATE annonce set nomarticle=(?) ,prix=(?) ,adresse=(?) ,telephone=(?) ,description=(?) WHERE id=(?) and idc=(?)', [
     
//      [this.data.nomarticle],
//     [ this.data.prix] ,
//      [this.data.adresse] ,
//      [this.data.telephone] ,
//      [this.data.description] ,
//      [this.data.id],
//      localStorage.getItem('idc') 
//      //lllllloclastorageidc
//        ])

//        .then(() => {
//          console.log('Executed SQL insert');
//          //after add , go to homepage
//          this.navCtrl.pop() ;
//       })
//        .catch(e => console.log(e));

//  }) .catch(e => console.log(e)); 

//   }

update(){
  this.sqlite.create({
    name: 'data.db',
    location: 'default'
})
 .then((db: SQLiteObject) => {

 db.executeSql('UPDATE annonce set nomarticle=? ,prix=? ,adresse=? ,telephone=? ,description=? WHERE id=?', [
   
   this.data.nomarticle,
  this.data.prix,
   this.data.adresse,
  this.data.telephone ,
   this.data.description,
   this.data.id
  
     ])

     .then(() => {
       console.log('Executed SQL update');
       //after add , go to homepage
       this.navCtrl.pop();
    })
     .catch(e => console.log(e));

}) .catch(e => console.log(e)); 

}

}
