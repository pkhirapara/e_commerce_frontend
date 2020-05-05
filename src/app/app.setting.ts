import { environment } from "../environments/environment";

export const appSetting = {
  LOGIN: environment.api + "/auth",
  REGISTER: environment.api + "/register",
  ADDPRODUCTS: environment.api + "/addProduct",
};
