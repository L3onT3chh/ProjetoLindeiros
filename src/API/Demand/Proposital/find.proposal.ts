import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";

export const findProposal = async (id: string) => {
  try {
    const headers = { ...HEADERS_DATA };
    const responseProposital = await API.get(`/proposalGetOne/${id}`, {
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    return responseProposital;
  } catch (e: any) {
    return undefined;
  }
};

export const findByDemandProposal = async (id: string) => {
  try {
    const headers = { ...HEADERS_DATA };
    const responseProposital = await API.get(`/proposal/${id}`, {
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));
    return responseProposital;
  } catch (e: any) {
    return undefined;
  }
};
