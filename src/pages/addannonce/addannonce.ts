import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-addannonce',
  templateUrl: 'addannonce.html',
})
export class AddannoncePage {

  data= {
    nomarticle :'',
    prix :0 ,
    adresse :'',
    telephone:'' ,
    description :''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddannoncePage');
  }


  savaData(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
  })
   .then((db: SQLiteObject) => {

    db.executeSql('INSERT INTO annonce VALUES(NULL,?,?,?,?,?,?)',
     [ 
     this.data.nomarticle,
     this.data.prix ,
     this.data.adresse ,
     this.data.telephone ,
     this.data.description ,
    localStorage.getItem('idc') ])

       .then(() => {
         console.log('Executed SQL insert');
         //after add , go to homepage
         this.navCtrl.push(HomePage) ;
      })
       .catch(e => console.log(e));

 }) .catch(e => console.log(e)); 
  }




}
