import { IUserPost } from "interfaces/data/user.interface";
import { IResponseData } from "interfaces/global.interface";

export default interface IAuth {
  jwt: string;
  user: IUserPost | undefined;
  tryLogin: boolean;
}

export interface IDataAuth extends IResponseData {
  auth: IAuth;
}
