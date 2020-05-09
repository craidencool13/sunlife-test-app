import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {DataProvider} from '../../providers/data/data'

@IonicPage()
@Component({
  selector: "page-policy-serving-details",
  templateUrl: "policy-serving-details.html",
})
export class PolicyServingDetailsPage {
  policies: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.getPolicies();
  }

  getPolicies() {
    this.dataProvider.getData('', 'POLICIES').then((res)=>{
      this.policies = res;
    }).catch((err)=>{
      console.log('Err', err);
    })
  }

}
