/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";
import API from "..";

export const findAllUsers = async (): Promise<{
  response: [];
  message: string;
  status: number;
}> => {
  try {
    const token = localStorage.getItem("tokeAuth")?.toString();
    const headers = { ...HEADERS_DATA, token: `${token?.toString()}` };
    const responseUsers = await API.get("/user", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { User } = await responseUsers.data;
    if (User) {
      return {
        response: User,
        message: "Operação realizada com sucesso!",
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

export const findOneUser = async (token: string, id: string) => {
  try {
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const responseUsers = await API.get(`/user/${id}`, {
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
    return [];
  }
};