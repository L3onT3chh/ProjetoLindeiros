import { AxiosError } from "axios";
/* eslint-disable consistent-return */
import API from "API";
import { HEADERS_DATA, TokenUser } from "config";
import { IUser, IUserPost, IUserPostEdit } from "interfaces/data/user.interface";
import QueryString from "qs";

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
        user: user.data.User
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

export const createUserRequest = async (userSave: any) => {
  try {
    const headers = { ...HEADERS_DATA };

    const user = await API("/userRequest", {
      headers,
      method: "POST",
      data: userSave
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Usuário registrado com sucesso!",
        user: user.data
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

export const sendEmail = async (email:string, subject:string, message:string) => {
  try {
    const headers = { ...HEADERS_DATA };

    const user = await API("/userSendMessage", {
      headers,
      method: "POST",
      data: {email:email, subject:subject, message:message}
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Usuário registrado com sucesso!",
        user: user.data
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

export const UpdateUser = async (userUpdate: IUserPostEdit) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };

    const responseData = await API(`/user/${userUpdate.id}`, {
      headers,
      method: "PUT",
      data: QueryString.stringify(userUpdate),
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

      console.log(responseData)
    if (responseData.data.isValid) {
      return {
        status: 200,
        message: "Usuário atualizado com sucesso!",
        response: responseData.data.data.User,
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
      message: userDell.error,
    };
  } catch (err: any) {
    return {
      status: 404,
      message: err.message,
    };
  }
};

export const createRetriveEmail = async (email: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userGenerateRetriveLink`, {
      headers,
      method: "POST",
      data: {email: email}
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Link criado com sucesso",
        response: user,
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

export const changePassword = async (password: string, link: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userChangePassword`, {
      headers,
      method: "POST",
      data: {password: password, link: link}
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Senha alterada com sucesso",
        response: user,
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

export const requestAccount = async (text: string, email: string, userType: string, city: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userRequestAccount`, {
      headers,
      method: "POST",
      data: {text: text, email: email, userType:userType, city:city}
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Pedido enviado com sucesso",
        response: user,
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

export const requestAccept = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userRequestAccount/${id}`, {
      headers,
      method: "PUT"
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Pedido aceito com sucesso",
        response: user,
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

export const requestDenied = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userRequestAccount/${id}`, {
      headers,
      method: "DELETE"
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    if (user.isValid) {
      return {
        status: 200,
        message: "Pedido aceito com sucesso",
        response: user,
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

export const linkVerify = async (link: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const user = await API(`/userLinkVerify/${link}`, {
      headers,
      method: "GET"
    })
      .then((response) => response.data)
    if (user.isValid) {
      return {
        status: 200,
        message: "Pedido aceito com sucesso",
        response: user.data,
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

export default {
  register: RegisterUser,
  update: UpdateUser,
  delete: DeleteUser,
};
