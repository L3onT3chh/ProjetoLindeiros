import { AxiosError } from "axios";
/* eslint-disable consistent-return */
import API from "API";
import { HEADERS_DATA, TokenUser } from "config";
import { IUserPost } from "interfaces/data/user.interface";

const RegisterUser = async (userSave: IUserPost) => {
  try {
    const headers = { ...HEADERS_DATA, token: `${TokenUser}` };
    const user = await API("/user", {
      headers,
      method: "POST",
      data: userSave,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    if (user.status === 200) {
      return {
        status: 200,
        message: "Usuário registrado com sucesso!",
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

export const UpdateUser = async () => {};

export const DeleteUser = async (id: string) => {
  try {
    const headers = { ...HEADERS_DATA, token: `${TokenUser}` };
    const userDell = await API(`/user/${id}`, {
      headers,
      method: "DELETE",
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    if (userDell.statu === 200) {
      return {
        status: 200,
        message: "Usuário removido com sucesso",
        idRemove: id,
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
  register: RegisterUser,
  update: UpdateUser,
  delete: DeleteUser,
};
