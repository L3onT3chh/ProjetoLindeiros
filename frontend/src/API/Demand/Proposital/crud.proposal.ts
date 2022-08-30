/* eslint-disable react-hooks/rules-of-hooks */
import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import { IProposalPost } from "interfaces/data/demand.interface";

const RegisterProposal = async (proposalSave: IProposalPost) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const Proposal = await API("/proposal", {
      headers,
      method: "POST",
      data: proposalSave,
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
    return undefined;
  }
};

export default {
  register: RegisterProposal,
};
