import { ReactChild, ReactChildren } from "react";

export interface IfaceProps {
  children?: ReactChild | ReactChildren | ReactChild[];
  link?: string;
  name?: string;
  text?: string;
  color?: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
  change: string;
  email: string;
  phone: string;
  city: string;
}

export interface IUserAuth {
  user: string;
  password: string;
}
