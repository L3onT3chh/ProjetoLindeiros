import { IResponseData } from "interfaces/global.interface";

export default interface INews {
  id: string;
  title: string;
  title_url: string;
  body: string;
  createdAt: string;
  city_id: string;
  axes_id: string[];
  Photos?: Photos[];
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

export interface Photos {
  extension: string;
  id: string;
  name: string;
  news_id: string
  path: string;
}