/* eslint-disable consistent-return */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";

export const findAllAxes = async () => {
  try {
    // const token = localStorage.getItem("token_jwt")?.toString();
    const headers = { ...HEADERS_DATA };
    const responseAxes = await API.get("/axes", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { Axes } = await responseAxes.data;
    if (Axes) {
      return {
        response: [
          {
            id: "none",
            name: "Todos os eixos",
          },
          ...Axes,
        ],
        status: 200,
        message: "Operação realizada com sucesso",
      };
    }
    return {
      response: [],
      status: 400,
      message: "Não foi possível realizar a operação",
    };
  } catch (e: any) {
    return {
      response: [],
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};
