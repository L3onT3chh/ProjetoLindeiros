/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";
import API from "API";

export const findTeam = async (id: string) => {
  try {
    const headers = { ...HEADERS_DATA };
    const responseTeam = await API(`/team/${id}`, {
      headers,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    return responseTeam.data.Team;

  } catch (err: any) {
    return {
      response: "",
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};
