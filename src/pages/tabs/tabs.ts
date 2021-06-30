import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage; /*settings*/
  tab3Root = ContactPage; /*profile*/

  constructor( ) {
  }

  isLoggedIn():boolean{
    if(localStorage.getItem('email') == null){
      return false;
    } else
    return true;
  }
}
