/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import API from "API";

export const findAllDemands = async () => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const responseDemands = await API.get("/demand", {
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));

    const { Demand } = responseDemands.data;

    if (Demand) {
      return Demand;
    }
  } catch (e: any) {
    return undefined;
  }
};
