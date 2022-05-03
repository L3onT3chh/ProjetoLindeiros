import ApiConfig from ".config/api";
import { AxiosError } from "axios";

type TUserFind = {
  idFind: string;
};

export const FindAllUser = async () => {
  try {
    const token = localStorage.getItem("token_jwt")?.toString;
    const headers = {
      "Content-Type": "application/json?=utf-8",
      token: "Bearer" + token,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    };

    const Users = await ApiConfig.get("user", {
      headers,
    })
      .then((response) => response.data)
      .catch((err: Error | AxiosError) => console.log(err));

    console.log(Users.data);
  } catch (e) {}
};

export const FindUserById = ({ idFind }: TUserFind) => {
  try {
    const Users = ApiConfig.get(`user/${idFind}`, {
      headers: { "Content-Type": "application/json" },
      params: idFind,
    })
      .then((response) => response.data)
      .catch((err: Error | AxiosError) => console.log(err));

    console.log(Users);
  } catch (e) {}
};
