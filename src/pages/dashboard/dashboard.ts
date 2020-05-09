import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html",
})
export class DashboardPage {
  assets = {};
  activeMenu = "manage"; // manage | claims | servicing
  user = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {
    this.getUser();
    this.getAssets();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }

  getUser() {
    this.dataProvider
      .getData("", "USER_DATA")
      .then((res) => {
        this.user = res;
        console.log("user", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  getAssets() {
    this.dataProvider
      .getData("", "ASSETS")
      .then((res) => {
        console.log("assets", res);
        this.assets = res;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  setActiveMenu(_event) {
    console.log("_event", _event);
    this.activeMenu = _event.value;
  }
}
