/* eslint-disable consistent-return */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";

export const findAllDocument = async () => {
  try {
    // const token = localStorage.getItem("token_jwt")?.toString();
    const headers = { ...HEADERS_DATA };
    const responseDocument = await API.get("/document", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { Document } = await responseDocument.data;

    if (Document) {
      return Document;
    }
  } catch (e: any) {
    return undefined;
  }
};
