import { COMPONENTS, USERPIPES, PLUGINS } from './imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    COMPONENTS,
    USERPIPES,
  ],
  imports: [
    IonicModule,
    PLUGINS,
  ],
  exports: [
    COMPONENTS,
    USERPIPES,
    PLUGINS,
  ]
})

export class SharedModule { }