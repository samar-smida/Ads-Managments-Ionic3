import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddannoncePage } from './addannonce';

@NgModule({
  declarations: [
    AddannoncePage,
  ],
  imports: [
    IonicPageModule.forChild(AddannoncePage),
  ],
})
export class AddannoncePageModule {}
