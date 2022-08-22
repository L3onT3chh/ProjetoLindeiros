/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";
import API from "API";

export const findAllDemands = async (token: string) => {
  try {
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
