import { IResponseData } from "interfaces/global.interface";

export interface IDataTypes extends IResponseData {
  types: ITypes[];
}

export interface ITypes {
  id: string;
  name: string;
  permission: number;
}
