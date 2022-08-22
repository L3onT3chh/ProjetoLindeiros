import { IUserLogin } from "./../interfaces/IfaceProps";
import { Auth } from "API";

const labelStore = {
  insert: "bottom",
  container: "bottom-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 2000,
    onScreen: true,
  },
};

const ProviderAuthentication = {
  isAuthentication: false,
  async signin(user: IUserLogin, callback: VoidFunction, Store: any) {
    const { status, response, auth } = await Auth(user);
    if (status === 200) {
      localStorage.setItem("token_jwt", response);
      ProviderAuthentication.isAuthentication = auth;
      Store.addNotification({
        title: "Login realizado com sucesso!",
        message: "Redirecionando para a página de login.",
        type: "success",
        ...labelStore,
      });
      setTimeout(callback, 1000);
      return true;
    }
    Store.addNotification({
      title: "Usuário inválido!",
      message: "Verifique todos os campos",
      type: "danger",
      ...labelStore,
    });
    return false;
  },
  signout(callback: VoidFunction) {
    localStorage.setItem("token_jwt", "");
    ProviderAuthentication.isAuthentication = false;
    setTimeout(callback, 100);
  },
};

export { ProviderAuthentication };
