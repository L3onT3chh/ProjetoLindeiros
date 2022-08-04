/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import API from "..";

const HEADERS_DATA = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization",
};

export const findAllUsers = async (token: string) => {
  try {
    // const token = localStorage.getItem("token_jwt")?.toString();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    console.log(process.env.URL_BASE);
    const responseUsers = await API.get("/user", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { User } = await responseUsers.data;

    if (User) {
      return User;
    }
  } catch (e: any) {
    return undefined;
  }
};
