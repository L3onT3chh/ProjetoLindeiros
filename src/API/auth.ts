/* eslint-disable consistent-return */
import API from "API";
import { HEADERS_DATA } from "config";
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
    console.log(DataAuth);
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

const logoutUser = async () => {
  localStorage.removeItem("token_jwt");

  if (localStorage.getItem("token_jwt")?.toString() !== "") {
    return {
      response: "Usuário deslogado com sucesso",
      status: 200,
    };
  }
  return {
    response: "Erro ao deslogar usuário",
    status: 400,
  };
};

const isAuthentication = () => {
  if (localStorage.getItem("token_jwt") !== "") {
    return true;
  }
  return false;
};

export const validateToken = async (token: string) => {
  try {
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const responseToken = await API.get("/user/validate", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.resolve(error));

    const { User } = responseToken.data;

    if (User) {
      return {
        response: User,
        message: "Operação realizada com sucesso",
        status: 200,
      };
    }
    return {
      response: [],
      message: "Não foi possível realizar a operação",
      status: 400,
    };
  } catch (e: any) {
    return {
      response: [],
      message: e.message,
      status: e.status,
    };
  }
};

export default {
  login: loginUser,
  isAuthentication,
  validate: validateToken,
  logout: logoutUser,
};
