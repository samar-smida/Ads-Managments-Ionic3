import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { AddannoncePage } from '../addannonce/addannonce';
import { EditannoncePage } from '../editannonce/editannonce';
import { ConnexionProvider } from '../../providers/connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data : any = [] ; 

  constructor(public navCtrl: NavController, public sqlite: SQLite, public cnx : ConnexionProvider) { this.data=[]; }

//affichage direct dés qu' on ouvre
  ionViewDidLoad() {
      this.getData();
  }
// refresh function
  refresh() {
    this.data=[];
    this.getData();
  }


//création de la base
  getData() {
    this.data=[];
      this.cnx.connexion() 
       .then((db: SQLiteObject) => {

        // db.executeSql('CREATE TABLE IF NOT EXISTS annonce(id INTEGER PRIMARY KEY,nomarticle TEXT,prix INT,adresse TEXT,telephone TEXT,description TEXT)', {})

        //    .then(() => console.log('Executed SQL'))
        //    .catch(e => console.log(e));
  
        db.executeSql('SELECT * FROM annonce ORDER BY id DESC',{} )
         .then(res=>{
              console.log('Executed SQL SELECT done');
              
              for (let index = 0; index < res.rows.length; index++) {

                this.data.push({
                  id:res.rows.item(index).id ,
                  nomarticle :res.rows.item(index).nomarticle ,
                  prix :res.rows.item(index).prix ,
                  adresse :res.rows.item(index).adresse ,
                  telephone :res.rows.item(index).telephone ,
                  description :res.rows.item(index).description ,
                }) 
              }

         }) .catch(e => console.log(e));



     }) .catch(e => console.log(e)); 

  }

  addAnnonce(){
    this.navCtrl.push(AddannoncePage) ; 
  }

  editAnnonce(id,nomarticle,prix,adresse,telephone,description,idc ){
    this.navCtrl.push(EditannoncePage,{
      id:id ,
      nomarticle:nomarticle ,
      prix:prix ,
      adresse:adresse ,
      telephone:telephone ,
      description:description ,
      idc:idc
    }) ;
  }

  deleteAnnonce(id){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('DELETE FROM annonce WHERE id=?', [id])
          .then(() => { 
            console.log('Executed SQL delete')
            this.getData(); /*to refresh*/
          })
          .catch(e => console.log(e));
    }) .catch(e => console.log(e));
    
  }

  isLoggedIn():boolean{
    if(localStorage.getItem('email') == null){
      return false;
    } else
    return true;
  }


  //pour search
  getItems(ev){
    // set val to the value of the searchbar
    
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
        this.data = this.data.filter((item) => {
          return (item.nomarticle.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
          ( item.adresse.toLowerCase().indexOf(val.toLowerCase()) > -1 ) 
          
          
          ;
        })
    }else{
      this.getData()
    }
  }

}
