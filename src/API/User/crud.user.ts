import { AxiosError } from "axios";
/* eslint-disable consistent-return */
import API from "API";
import { HEADERS_DATA, TokenUser } from "config";
import { IUser, IUserPost } from "interfaces/data/user.interface";

const RegisterUser = async (userSave: IUserPost) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const { userType } = userSave;

    const user = await API("/user", {
      headers,
      method: "POST",
      data: {
        ...userSave,
        user_type: userType,
      },
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Usuário registrado com sucesso!",
      };
    }
    return {
      status: 400,
      message: user.error,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: err.message,
    };
  }
};

export const UpdateUser = async (userUpdate: IUser) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };

    const responseData = await API(`/user/${userUpdate.id}`, {
      headers,
      method: "PUT",
      data: userUpdate,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    if (responseData.data.isValid) {
      return {
        status: 200,
        message: "Usuário atualizado com sucesso!",
        response: userUpdate,
      };
    }
    return {
      status: 400,
      message: "Erro ao atualizar!",
      response: userUpdate,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: err.message,
      response: userUpdate,
    };
  }
};

export const DeleteUser = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const userDell = await API(`/user/${id}`, {
      headers,
      method: "DELETE",
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (userDell.isValid) {
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
    return {
      status: 404,
      message: err.message,
    };
  }
};

export default {
  register: RegisterUser,
  update: UpdateUser,
  delete: DeleteUser,
};
