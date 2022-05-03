import { IUserLogin } from "./../interfaces/IfaceProps";
import ApiConfig from ".config/api";

interface IAuthUser {
  auth: boolean;
  status: number;
  response: string;
}

export const Auth = async (user: IUserLogin): Promise<IAuthUser> => {
  try {
    const DataAuth = await ApiConfig("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        email: user.username,
        password: user.password,
      }),
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.resolve(err));
    const { User } = DataAuth.response;
    if (User.id) {
      return {
        auth: true,
        status: 200,
        response: User.jwt,
      };
    }
    return {
      auth: true,
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
