import { IResponseData } from "interfaces/global.interface";

export default interface INews {
  id: string;
  title: string;
  title_url: string;
  body: string;
  city_id: string;
  axes_id: string[];
}

export interface IDataNews extends IResponseData {
  filters: {
    lastNews: [];
  };
  news: INews[];
}

export interface INewsPost {
  title: string;
  body: string;
  title_url: string;
  city_id: string;
  axes_id?: string[] | string;
}
