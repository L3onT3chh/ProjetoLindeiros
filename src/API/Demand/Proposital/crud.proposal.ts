import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA_POST, TokenUser } from "config";
import { IEProposal, IProposal, IProposalPost } from "interfaces/data/demand.interface";
import QueryString from "qs";

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

export const updateProposal = async (proposalSave: IEProposal) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA_POST, token: `${token}` };
    const Proposal = await API(`/proposal/${proposalSave.id}`, {
      headers,
      method: "PUT",
      data: QueryString.stringify(proposalSave)
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (Proposal.isValid) {
      return {
        status: 200,
        message: "Proposta atualizada com sucesso!",
      };
    }
    return {
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      response: "",
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};

export default {
  register: RegisterProposal
};
