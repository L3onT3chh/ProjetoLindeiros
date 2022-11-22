/* eslint-disable react-hooks/rules-of-hooks */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA_POST, TokenUser } from "config";
import { INewsPost } from "interfaces/data/news.interface";

const RegisterNews = async (newsSave: INewsPost) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA_POST, token: `${token}` };
    const News = await API("/news", {
      headers,
      method: "POST",
      data: newsSave,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (News.isValid) {
      return {
        status: 200,
        message: "Noticia registrado com sucesso!",
      };
    }
    return {
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Não foi possível inserir uma noticia",
    };
  }
};

export default {
  register: RegisterNews,
};
