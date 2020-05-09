import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Environment } from "../../constants/environment";
import { DEBUG_ENDPOINT, PROD_ENDPOINT } from "../../constants/endpoints";

@Injectable()
export class DataProvider {
  constructor(public http: Http, public httpClient: HttpClient) {}

  async postData(data, type) {
    let endPoint = this.getEnvUrl(type);
    return new Promise((resolve, reject) => {
      this.http.post(endPoint, JSON.stringify(data)).subscribe(
        (res) => {
          resolve(res.json());
        },
        (err) => {
          console.log("Error", err);
        }
      );
    });
  }

  async getData(data, type) {
    let endPoint = this.getEnvUrl(type);
    return new Promise((resolve, reject) => {
      let params =
        data != undefined || data != "" ? "?" + this.serialize(data) : "";
      this.http.get(endPoint + params).subscribe(
        (res) => {
          resolve(res.json());
        },
        (err) => {
          console.log("Error", err);
        }
      );
    });
  }

  private getEnvUrl(type) {
    if (Environment.ENV == "DEBUG") {
      return Environment.DEBUG_API + DEBUG_ENDPOINT[type];
    } else {
      return Environment.PROD_API + PROD_ENDPOINT[type];
    }
  }

  private serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}
