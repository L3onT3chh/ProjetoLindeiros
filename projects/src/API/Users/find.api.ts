import { IUser } from "./../../interfaces/IfaceProps";
import ApiConfig from ".config/api";
import { AxiosError } from "axios";

type TUserFind = {
  idFind: string;
};

type TAllUser = {
  response: IUser[];
  status: number;
  msg_error: string;
};

export const FindAllUser = async (): Promise<TAllUser | undefined> => {
  try {
    const token = localStorage.getItem("token_jwt")?.toString();
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      token: `${token}`,
      "Access-Control-Allow-Headers": "Authorization",
    };

    const Users = await ApiConfig("/user", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));

    const { User } = Users.data;
    if (User) {
      return {
        response: User,
        status: 200,
        msg_error: "",
      };
    }
  } catch (e: any) {
    return {
      response: e.message,
      status: 400,
      msg_error: "",
    };
  }
};

export const FindUserById = async ({ idFind }: TUserFind) => {
  try {
    await ApiConfig.get(`user/${idFind}`, {
      headers: { "Content-Type": "application/json" },
      params: idFind,
    })
      .then((response) => response.data)
      .catch((err: Error | AxiosError) => Promise.resolve(err));
  } catch (e) {}
};
