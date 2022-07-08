import React from "react";
import { addUser, lock } from "../assets/icons";
import ButtonCard from "../components/Buttons/ButtonCard";
import CardDefault from "../components/Card/CardDefault";
import WelcomeLogin from "../components/Card/Welcome";
import InputStyle from "../components/Inputs";
import SublinedText from "../components/Label/Sublined";
import { ContainerPage } from "./styled";

function Login() {
  return (
    <ContainerPage style={{ display: "flex", height: "100vh" }}>
      <WelcomeLogin />

      <div className="login">
        <SublinedText size="32" title="Login" />

        <form className="form-login">
          <InputStyle
            title="Email"
            type="email"
            required
            placeholder="Digite o seu e-mail"
          />
          <span> </span>
          <InputStyle
            title="Senha"
            type="password"
            required
            placeholder="Digite a sua senha"
          />

          <ButtonCard value="Entrar" width="100%" />
        </form>

        <div className="container-footer">
          <CardDefault title="Esqueci minha senha" icon={lock} url=" " type />
          <CardDefault
            title="Não possui cadastro?"
            icon={addUser}
            url=" "
            type
          />
        </div>
      </div>
    </ContainerPage>
  );
}

export default Login;
