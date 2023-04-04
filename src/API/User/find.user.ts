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
    const token = localStorage.getItem("token_jwt");
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

export const findOneUserByEmail = async (email: string) => {
  try {
    const headers = { ...HEADERS_DATA };
    const responseUsers = await API("/userByEmail", {
      headers,
      method: "POST",
      data: {email: email},
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    const resp = await responseUsers.data;
    console.log(resp);
    if (resp) {
      return {
        response: resp,
        status: 200,
      };
    }
  } catch (e: any) {
    return [];
  }
};

export const findRequestUser = async () => {
  try {
    const token = localStorage.getItem("token_jwt");
    const headers = { ...HEADERS_DATA, token: `${token?.toString()}` };
    const responseUsers = await API("/userRequest", {
      headers,
      method: "GET"
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    const resp = await responseUsers.data;

    if (resp) {
      return {
        response: resp.User,
        status: 200,
      };
    }
  } catch (e: any) {
    return [];
  }
};
