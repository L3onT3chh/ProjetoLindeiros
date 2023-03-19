import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import { IDocumentPost } from "interfaces/data/document.interface";
import QueryString from "qs";

export const RegisterDocumenty = async (documentPost: any) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, "Content-Type": "multipart/form-data", token: `${token}` };

    const document = await API("/document", {
      headers,
      method: "POST",
      data: documentPost,
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

export const DeleteDocuments = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const DocumentDell = await API(`/document/${id}`, {
      headers,
      method: "DELETE",
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

      console.log(DocumentDell);
    if (DocumentDell.isValid) {
      return {
        status: 200,
        message: "Demanda removido com sucesso",
        idRemove: id,
      };
    }
    return {
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};

export default {
  delete: DeleteDocuments,
};
