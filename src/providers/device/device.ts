import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";

@Injectable()
export class DeviceProvider {
  constructor(private platform: Platform) {}

  getWidth() {
    return this.platform.width();
  }

  getHeight() {
    return this.platform.height();
  }

  getPlatform() {
    return this.platform.is("ios") ? "ios" : "android";
  }
}
