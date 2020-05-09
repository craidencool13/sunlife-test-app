import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
import { Coverage } from "../../constants/content/dashboard";

@Component({
  selector: "manage-funds",
  templateUrl: "manage-funds.html",
})
export class ManageFundsComponent {
  @Input() assets;
  coverage = Coverage;
  constructor(private navCtrl: NavController) {}

  goToPolicies() {
    this.navCtrl.push("PolicyServingDetailsPage");
  }
}
