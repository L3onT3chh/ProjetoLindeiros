import { SetStateAction } from "react";
import { IDataDemand, IDemand } from "interfaces/data/demand.interface";
import { IDataDocument } from "interfaces/data/document.interface";
import { IDataUser } from "interfaces/data/user.interface";
import { IDataTypes, ITypes } from "interfaces/data/types.interface";
import { SContainerProps } from "./global.interface";

export interface IPropsGlobal extends SContainerProps {
  key?: string;
  IInterface?: any;
  value?: string;
  width?: string;
  className?: string;
  listValue?: string[];
  icon?: string;
  title?: string;
  url?: string;
  description?: string;
  borderIntern?: boolean;
  height?: string;
  n_integrantes?: number;
  approve?: boolean;
  date?: string;
  fields?: string[];
  id?: string;
  type?: string;
  name?: string;
  status?: string;
  photo?: string;
  date_create?: string;
  datePublished?: string;
  children?: JSX.Element;
  image?: Array<string>;
  optionsMenu?: ISubItens[];
  text?: string;
  iconFinal?: any;
  author?: string;
  path?: string;
  setSelected?: SetStateAction<any>;
  eixos?: Array<string>;
  cities?: Array<string>;
  statusFilter?: Array<string>;
  colorFont?: string;
  colorTitle?: string;
  color?: string;
  router?: string;
  colorBackground?: string;
  link?: string;
  subtitle?: string;
  background?: string;
  size?: string;
  borderRadius?: string;
  borderColor?: string;
  setState?: any;
  state?: boolean;
  configsSets?: ISets;
  dataDemand?: IDemand[];
  options?: IOptions[];
  types?: ITypes[];
}

export interface IOptions {
  id: string;
  name: string;
  iDBack?: string;
}
export interface ISets {
  s1?: string;
  s2?: string;
  s3?: string;
  setOne?: any;
  setTwo?: any;
  setThree?: any;
}

export interface IPopup {
  dataDemand?: IDemand[] | undefined;
  className?: string;
  width?: string | "416";
  height?: string | "509";
  setTrigger?: any;
  trigger?: boolean;
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
}

export interface ICard {
  className: string;
  title: string;
  logo: {
    alt: string;
    src: string;
  };
  description: string;
}

export interface IOtherNewsProps {
  description: string;
  date: string;
  title: string;
  logo: {
    src: string;
    alt: string;
  };
}

type TDataChip = {
  name: string;
  url: string;
};

interface ISubItens extends IPopup {
  activePopUp?: boolean;
  title: string;
  subitems?: TDataChip[];
  urlMain?: string;
}

export interface IStateData {
  users: IDataUser;
  demands: IDataDemand;
  documents: IDataDocument;
  userTypes: IDataTypes;
}
