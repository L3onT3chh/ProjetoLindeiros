import { IResponseData } from "interfaces/global.interface";

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUser {
  address: string;
  city: string;
  city_id?: string;
  cpf: string;
  id?: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  phone_ddd: string;
  born_date: string;
  userType_id?: string;
  userType: string;
}

export interface IUserPost {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  born_date: string;
  address: string;
  phone: number | string;
  phone_ddd: number | string;
  userType: string;
  city: string;
  password: string;
}

export interface IUserPostEdit {
  id: string;
  ename: string;
  email: string;
  cpf: string;
  born_date: string;
  address: string;
  phone: number | string;
  phone_ddd: number | string;
  userType: string;
  city: string;
  password: string;
}

export interface IDataUser extends IResponseData {
  tryLogin: boolean;
  typeMessage: string;
  users: IUser[];
  fullUsers: IUser[];
  touched?: boolean;
  filters: {
    type: IUser[];
    search: IUser[];
    city: IUser[];
    merge: IUser[];
    clicked: IUser | undefined;
  };
}
