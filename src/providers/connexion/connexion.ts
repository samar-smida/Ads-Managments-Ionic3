
import { Injectable } from '@angular/core';
import { SQLite  } from '@ionic-native/sqlite';
/*
  Generated class for the ConnexionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnexionProvider {

  constructor( public sqlite : SQLite) {
    console.log('Hello ConnexionProvider Provider');
  }
 connexion(){
   return this.sqlite.create({
    name: 'data.db',
    location: 'default'
   }) 



 }



}
