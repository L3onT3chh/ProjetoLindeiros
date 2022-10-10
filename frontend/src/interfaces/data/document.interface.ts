import { IResponseData } from "interfaces/global.interface";

export default interface IDocument {
  id: string;
  name: string;
  extension: string;
  path: string;
  fullPath: string;
  demands_id: string;
}

export interface IDataDocument extends IResponseData {
  document: IDocument[];
  documentSelect: IDocument | undefined;
}
