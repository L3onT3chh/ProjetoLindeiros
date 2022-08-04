import { SContainerProps } from "./global.interface";

export interface IPropsGlobal extends SContainerProps {
  value?: string;
  width?: string;
  className?: string;
  icon?: string;
  title?: string;
  url?: string;
  description?: string;
  borderIntern?: boolean;
  height?: string;
  n_integrantes?: number;
  approve?: boolean;
  date?: string;
  id?: string;
  name?: string;
  status?: string;
  photo?: string;
  date_create?: string;
  datePublished?: string;
  children?: JSX.Element;
  image?: Array<string>;
  optionsMenu?: ISubItens[];
  text?: string;
  path?: string;
  eixos?: Array<string>;
  cities?: Array<string>;
  statusFilter?: Array<string>;
  colorFont?: string;
  colorTitle?: string;
  router?: string;
  colorBackground?: string;
  link?: string;
  subtitle?: string;
  background?: string;
  size?: string;
  borderRadius?: string;
  borderColor?: string;
}

export interface IPopup {
  setTrigger?: any;
  trigger?: boolean;
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

export interface IUserState {
  name: string;
  age: number;
  address: string;
  charge: string;
}
