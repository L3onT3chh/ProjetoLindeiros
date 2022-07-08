import React from "react";
import { addUser, lock } from "../../assets/icons";
import backgroundLogin from "../../assets/img/background-login.png";
import { Card, ContainerWelcome } from "../style";
import AccessLogin from "./AccessLogin";

function WelcomeLogin() {
  return (
    <Card width="56%" height="100vh" background={backgroundLogin}>
      <ContainerWelcome>
        <p className="subtitle-p-white">Autenticação de usuário</p>
        <h1 className="title-h1-white">Seja Bem-vindo</h1>

        <AccessLogin
          icon={lock}
          title="Esqueci minha senha"
          description="Clique no campo “esqueci minha senha” no menu ao lado para alterar sua senha.
Informe o e-mail vinculado a sua conta, o código de verificação será enviado."
          url="/reset"
        />

        <AccessLogin
          icon={addUser}
          title="Não possui cadastro?"
          description="Clique no campo “Criar conta” no menu ao lado para consultar o processo de criação de conta de acordo com o municipio selecionado, realizando seu pré-cadastro"
          url="/register"
        />
      </ContainerWelcome>
    </Card>
  );
}

export default WelcomeLogin;
