import { IResponseData } from "interfaces/global.interface";

export interface ICity {
  id: string;
  name: string;
  state: string;
  uf: string;
}

export interface IDataCity extends IResponseData {
  city: ICity[];
}
