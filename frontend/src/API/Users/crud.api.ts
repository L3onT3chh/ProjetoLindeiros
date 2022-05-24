import ApiConfig from ".config/api";
import { IUser } from "interfaces/IfaceProps";

type TResponseData = {
  response: IUser | string;
  status: number;
  message: string;
};

const headers = {
  token: "",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization",
};

type TParams = {
  idUser?: string;
  userSave?: IUser;
};

export const deleteUser = async ({
  idUser,
}: TParams): Promise<TResponseData | undefined> => {
  try {
    const token = localStorage.getItem("token_jwt")?.toString();

    if (token) headers.token = token;
    console.log(idUser, token);
    await ApiConfig.delete(`/user/${idUser}`, {
      headers,
    })
      .then((response) => console.log(response))
      .catch((responseErr) => Promise.resolve(responseErr));
  } catch (err: any) {
    return {
      response: err.message,
      status: 400,
      message: err.message,
    };
  }
};

export const createUser = async ({
  userSave,
}: TParams): Promise<TResponseData | undefined> => {
  try {
    const tokenSave = localStorage.getItem("token_jwt")?.toString();
    if (tokenSave) {
      headers["token"] = tokenSave;
    } else {
      return {
        response: "Request inválida",
        status: 400,
        message: "Request inválida, realize o login novamente",
      };
    }
    const save = await ApiConfig("/user", {
      method: "POST",
      headers,
      data: {
        userSave,
      },
    })
      .then((response) => Promise.resolve(response))
      .catch((err) => Promise.resolve(err));
    if (save.status === 200) {
      return {
        response: save.data,
        status: 200,
        message: "Usuário criado com sucesso!",
      };
    } else {
      return {
        response: "Erro data",
        status: 400,
        message: "Verifique os dados enviados!",
      };
    }
  } catch (err: any) {
    return {
      response: err.message,
      status: 400,
      message: err.message || "Error",
    };
  }
};

export const updateUser = async ({
  userSave,
}: TParams): Promise<TResponseData | undefined> => {
  try {
    const tokenSave = localStorage.getItem("token_jwt")?.toString();
    if (tokenSave) {
      headers["token"] = tokenSave;
    } else {
      return {
        response: "Request inválida",
        status: 400,
        message: "Request inválida, realize o login novamente",
      };
    }
    const save = await ApiConfig("/user"+userSave?.id, {
      method: "PUT",
      headers,
      data: {
        userSave,
      },
    })
      .then((response) => Promise.resolve(response))
      .catch((err) => Promise.resolve(err));
    if (save.status === 200) {
      return {
        response: save.data,
        status: 200,
        message: "Usuário alterado com sucesso!",
      };
    } else {
      return {
        response: "Erro data",
        status: 400,
        message: "Verifique os dados enviados!",
      };
    }
  } catch (err: any) {
    return {
      response: err.message,
      status: 400,
      message: err.message || "Error",
    };
  }
};
