import { Component, Input } from "@angular/core";
import { Servicing } from "../../constants/content/dashboard";

@Component({
  selector: "policy-servicing",
  templateUrl: "policy-servicing.html",
})
export class PolicyServicingComponent {
  servicing = Servicing;
  constructor() {}
}
