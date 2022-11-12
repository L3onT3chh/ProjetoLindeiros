import { IResponseData } from "interfaces/global.interface";

export interface IAxes {
  id: string;
  name: string;
  sigle: string;
}

export interface IDataAxes extends IResponseData {
  axes: IAxes[];
  axes_selector: string;
}
