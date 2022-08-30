/* eslint-disable consistent-return */
import API from "API";
import { IUserLogin } from "../interfaces/data/user.interface";

interface IAuthUser {
  auth: boolean;
  status: number;
  response: string;
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
      const { User } = DataAuth.response;
      return {
        auth: true,
        status: 200,
        response: User.jwt,
      };
    }
    return {
      auth: false,
      status: 404,
      response: "Usuário inválido",
    };
  } catch (e) {
    return {
      auth: false,
      status: 400,
      response: "Não foi possível realizar o login",
    };
  }
};

const logoutUser = () => {
  localStorage.removeItem("token_jwt");
};

const isAuthentication = () => {
  if (localStorage.getItem("token_jwt") !== "") {
    return true;
  }
};

export default { login: loginUser, logout: logoutUser, isAuthentication };
