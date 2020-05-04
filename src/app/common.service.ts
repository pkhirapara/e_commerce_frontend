import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appSetting } from "./app.setting";
@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  login(obj: any) {
    return this.httpClient.post(appSetting.LOGIN, obj);
  }
  register(obj: any) {
    return this.httpClient.post(appSetting.REGISTER, obj);
  }
}
