import { IResponseData } from "interfaces/global.interface";
import { IconType } from "react-icons";

export interface IToast {
  message: string;
  type: string;
  icon?: IconType;
}

export interface IDataToast extends IResponseData {
  toasts: IToast;
}
