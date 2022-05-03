import { IUserLogin } from "./../interfaces/IfaceProps";
import ApiConfig from ".config/api";

interface IAuthUser {
  auth: boolean;
  status: number;
  response: string;
}

export const Auth = async (user: IUserLogin): Promise<IAuthUser> => {
  const response = await ApiConfig("/authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({
      email: user.username,
      password: user.password,
    }),
  }).then((response) => Promise.resolve(response));

  const { jwt } = response.data;
  if (jwt) {
    return {
      auth: true,
      status: 200,
      response: jwt,
    };
  }
  return {
    auth: false,
    status: 404,
    response: "Not found user",
  };
};
