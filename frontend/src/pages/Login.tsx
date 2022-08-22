import NavBar from "components/NavBar";
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
    <>
      <NavBar />
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

            <ButtonCard router="painel" value="Entrar" width="200" />
          </form>

          <div className="container-footer">
            <CardDefault
              width="224px"
              height="154px"
              title="Esqueci minha senha"
              icon={lock}
              url=" "
            />
            <CardDefault
              width="224px"
              height="154px"
              title="Não possui cadastro?"
              icon={addUser}
              url=" "
            />
          </div>
        </div>
      </ContainerPage>
    </>
  );
}

export default Login;
