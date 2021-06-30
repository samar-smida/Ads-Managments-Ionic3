import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditannoncePage } from './editannonce';

@NgModule({
  declarations: [
    EditannoncePage,
  ],
  imports: [
    IonicPageModule.forChild(EditannoncePage),
  ],
})
export class EditannoncePageModule {}
