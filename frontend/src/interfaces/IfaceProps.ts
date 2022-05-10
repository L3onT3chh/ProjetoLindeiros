import { ReactChild, ReactChildren } from "react";

export interface IfaceProps {
  children?: ReactChild | ReactChildren | ReactChild[];
  link?: string;
  name?: string;
  text?: string;
  color?: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUser {
  address: string;
  born_date: Date;
  city: string;
  cpf: string;
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  phone_ddd: string;
  userType: string;
}

export interface IUserAuth {
  user: string;
  password: string;
}
