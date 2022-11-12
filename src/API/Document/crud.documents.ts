import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import { IDocumentPost } from "interfaces/data/document.interface";

const RegisterDocument = async (documentPost: IDocumentPost) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };

    const document = await API("/document", {
      headers,
      method: "POST",
      data: {
        documentPost,
      },
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    if (document.error) {
      return {
        response: 400,
        message: document.error,
      };
    }
    if (document.status === 200) {
      return {
        status: 200,
        message: "Documento registrado com sucesso!",
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
  register: RegisterDocument,
};
