/* eslint-disable react-hooks/rules-of-hooks */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA, HEADERS_DATA_POST, TokenUser } from "config";
import { INewsPost } from "interfaces/data/news.interface";
import QueryString from "qs";
import { parseToUrl } from "util/parseUrl";

export const addNews = async (newsSave: any) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA_POST, "Content-Type": "multipart/form-data", token: `${token}` };
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
      message: News.error,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Não foi possível inserir uma noticia",
    };
  }
};

export const updateNews = async (newsSave: any, idNews: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, "Content-Type": "multipart/form-data", token: `${token}` };
    const News = await API(`/news/${idNews}`, {
      headers,
      method: "POST",
      data: newsSave,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (News.isValid) {
      return {
        status: 200,
        message: "Noticia editada com sucesso!",
      };
    }
    return {
      status: 400,
      message: News.error,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Não foi possível inserir uma noticia",
    };
  }
};

export const deleteNews = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA_POST, token: `${token}` };
    const News = await API(`/news/${id}`, {
      headers,
      method: "DELETE",
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (News.isValid) {
      return {
        status: 200,
        message: "Noticia deletada com sucesso!",
        id: id
      };
    }
    return {
      status: 400,
      message: News.error,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Não foi possível deletar uma noticia",
    };
  }
};

