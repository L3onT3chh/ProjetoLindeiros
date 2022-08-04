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
  userType: string;
}
