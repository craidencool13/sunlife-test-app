import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
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
    public dataProvider: DataProvider
  ) {
    this.getUser();
    this.getAssets();
  }

  getUser() {
    this.dataProvider
      .getData("", "USER_DATA")
      .then((res) => {
        this.user = res;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  getAssets() {
    this.dataProvider
      .getData("", "ASSETS")
      .then((res) => {
        this.assets = res;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  setActiveMenu(_event) {
    this.activeMenu = _event.value;
  }
}
