import { IResponseData } from "interfaces/global.interface";

export default interface IDocument {
  id: string;
  name: string;
  extension: string;
  path: string;
  fullPath: string;
  size: string;
  visible?: boolean;
}

export interface IDataDocument extends IResponseData {
  document: IDocument[];
  filtered: IDocument[];
  documentSelect: IDocument | undefined;
  min: number;
  max: number;
}

export interface IDocumentPost {
  name: string;
  extension: string;
  path: string;
  fullPath: string;
  size: string;
}
