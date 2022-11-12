/* eslint-disable consistent-return */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";

export const findAllNews = async () => {
  try {
    const headers = { ...HEADERS_DATA };
    const responseNews = await API.get("/news", {
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { News } = responseNews.data;

    if (News) {
      return {
        response: News,
        message: "Operação realizada com sucesso",
        error: "",
        status: 200,
      };
    }
    return {
      response: [],
      message: "Não foi possível realizar a operação",
      error: "",
      status: 400,
    };
  } catch (e: any) {
    return undefined;
  }
};
