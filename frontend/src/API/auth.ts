/* eslint-disable consistent-return */
import API from "API";
import { IUserLogin, IUserPost } from "../interfaces/data/user.interface";

interface IAuthUser {
  auth: boolean;
  status: number;
  response: string;
  user: IUserPost | undefined;
}

const loginUser = async ({
  username,
  password,
}: IUserLogin): Promise<IAuthUser> => {
  try {
    const DataAuth = await API.post("/login", {
      email: username,
      password,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.resolve(err));
    if (DataAuth.isValid) {
      if (DataAuth.response.User) {
        const { User } = DataAuth.response;
        return {
          auth: true,
          status: 200,
          response: User.jwt,
          user: User,
        };
      }
    }
    return {
      auth: false,
      status: 404,
      response: "Usuário inválido",
      user: undefined,
    };
  } catch (e) {
    return {
      auth: false,
      status: 400,
      response: "Não foi possível realizar o login",
      user: undefined,
    };
  }
};

const isAuthentication = () => {
  if (localStorage.getItem("token_jwt") !== "") {
    return true;
  }
  return false;
};

export default { login: loginUser, isAuthentication };
