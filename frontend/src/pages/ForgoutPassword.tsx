/* eslint-disable react/button-has-type */
import React from "react";
import WelcomeLogin from "components/Card/Welcome";
import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import SublinedText from "components/Label/Sublined";
import ButtonForm from "components/Buttons/ButtonForm";
import CardDefault from "components/Card/CardDefault";
import { lock, loginIconDefault } from "assets/icons";
import InputStyle from "components/Inputs";

function ForgoutPassword() {
  return (
    <>
      <NavBar />
      <ContainerPage style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <WelcomeLogin />

        <div className="login">
          <SublinedText size="32" title="Não possui cadastro?" />
          <form action="" className="form-login">
            <div className="form-control-demand-forgout">
              <p className="title-h2">
                Para envio de solicitação de recuperação de senha, por favor
                digite o seu e-mail abaixo
              </p>
              <InputStyle
                //   onChange={onChange}
                name="email"
                title=""
                type="email"
                required
                placeholder="Endereço eletrônico"
              />
            </div>
            <ButtonForm width="100%" className="form-control-demand-forgout">
              <p>Solicitar nova senha</p>
            </ButtonForm>
          </form>

          <div className="container-footer">
            <CardDefault
              width="224px"
              height="fit-content"
              title="Esqueci minha senha"
              icon={lock}
              url="/forgoutPassword"
            />
            <CardDefault
              width="224px"
              height="fit-content"
              title="Login"
              icon={loginIconDefault}
              url="/login"
            />
          </div>
        </div>
      </ContainerPage>
    </>
  );
}

export default ForgoutPassword;
