import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  //apparaitre en cas de connecté
  isLoggedIn():boolean{
    if(localStorage.getItem('email') == null){
      return false;
    }
    return true;
  }

  goToLogin(){
    this.navCtrl.push(LoginPage)   }


  disconnect(){
       localStorage.clear();
       this.navCtrl.push(HomePage)
    }

}
