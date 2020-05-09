import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyServingDetailsPage } from './policy-serving-details';

@NgModule({
  declarations: [
    PolicyServingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyServingDetailsPage),
  ],
})
export class PolicyServingDetailsPageModule {}
