/* eslint-disable react-hooks/rules-of-hooks */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import { IProposalPost } from "interfaces/data/demand.interface";

const RegisterProposal = async (proposalSave: IProposalPost) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    console.log(headers);
    const Proposal = await API.post("/proposal", {
      headers,
      body: JSON.stringify(proposalSave),
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (Proposal.status === 200) {
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
