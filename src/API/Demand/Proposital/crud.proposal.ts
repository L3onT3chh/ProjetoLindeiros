/* eslint-disable prettier/prettier */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA_POST, TokenUser } from "config";
import { IProposalPost } from "interfaces/data/demand.interface";

const RegisterProposal = async (proposalSave: IProposalPost) => {
  try {
    const token = TokenUser()?.toString();
    const headers = {
      ...HEADERS_DATA_POST,
      token: token?.trim(),
    };
    const Proposal = await API.post("/proposal", {
      headers,
      form: { ...proposalSave },
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (Proposal.isValid) {
      return {
        status: 200,
        message: "Proposta registrado com sucesso!",
      };
    }
    return {
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      status: 404,
      message: err.message,
    };
  }
};

export default {
  register: RegisterProposal,
};
