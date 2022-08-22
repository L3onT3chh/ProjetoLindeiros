import { ReactChild, ReactChildren } from "react";

export interface IfaceProps {
  children?: ReactChild | ReactChildren | ReactChild[];
  link?: string;
  name?: string;
  text?: string;
  color?: string;
  length?: string;
}

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
}

export interface IUserAuth {
  user: string;
  password: string;
}
