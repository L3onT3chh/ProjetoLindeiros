import { IResponseData } from "interfaces/global.interface";

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUser {
  address: string;
  city: string;
  cpf: string;
  id?: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  phone_ddd: string;
  born_date: string;
  userType: string;
}

export interface IUserPost {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  born_date: string;
  address: string;
  phone: number;
  phone_ddd: number;
  user_type: string;
  postalCode: number;
  city: string;
  password: string;
}

export interface IDataUser extends IResponseData {
  tryLogin: boolean;
  users: IUser[];
  filters: {
    type: IUser[];
    search: IUser[];
    city: IUser[];
    merge: IUser[];
    clicked: IUser | undefined;
  };
}
