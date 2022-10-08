import { HEADERS_DATA } from "config";
/* eslint-disable consistent-return */
import API from "API";
import { AxiosError } from "axios";

export const findAllTypes = async () => {
  try {
    const token = localStorage.getItem("tokeAuth")?.toString();

    const headers = { ...HEADERS_DATA, token: `${token}` };
    const responseTypes = await API.get("/userType", {
      method: "GET",
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    const { Usertype } = await responseTypes.data;
    if (Usertype) {
      return Usertype;
    }
  } catch (e: any) {
    return [];
  }
};
