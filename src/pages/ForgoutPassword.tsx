/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import WelcomeLogin from "components/Card/Welcome";
import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import SublinedText from "components/Label/Sublined";
import ButtonForm from "components/Buttons/ButtonForm";
import CardDefault from "components/Card/CardDefault";
import { lock, loginIconDefault } from "assets/icons";
import InputStyle from "components/Inputs";
import { Link } from "react-router-dom";
import { showErrorMessage } from "util/function";
import { useSelector } from "react-redux";
import { selectUsersMessage } from "app/reducers/user/userSlice";
import { findOneUserByEmail } from "API/User/find.user";
import { forgotPassword } from "util/emailJs";

function ForgoutPassword() {

  const user = useSelector(selectUsersMessage);
  const [email, setEmail] = useState("");

  const handleRequirePassword = async (e:any) => {
    e.preventDefault();

    if(!email){
      showErrorMessage("Informe o e-mail cadastrado!!", "error");
      return;
    }

    const resp:any = await findOneUserByEmail(email);
    if(resp && resp.response === "false"){
      showErrorMessage("Esse e-mail não esta registrado no sistema!!", "error");
      return;
    }

    const linkResp = await forgotPassword(email);
  }
  return (
    <>
      <NavBar />
      <ContainerPage style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <WelcomeLogin />

        <div className="login">
          <SublinedText size="28" title="Esqueceu a senha?" />
          <form action="" className="form-login" onSubmit={handleRequirePassword}>
            <div className="form-control-demand-forgout">
              <p className="title-h2" style={{ marginBottom: "30px", textAlign: "center" }}>
                Digite o seu e-mail abaixo, para receber mais instruções.
              </p>
              <InputStyle
                onChange={(e) => setEmail(e.target.value)}
                valueChanges={email}
                name="email"
                title="Email"
                type="email"
                height={50}
                required
                placeholder="Endereço eletrônico"
              />
            </div>
            <ButtonForm width="100%" className="form-control-demand-forgout">
              <p>Solicitar nova senha</p>
            </ButtonForm>
          </form>

          <div className="container-footer">
            <p className="createAccount">Ja possui uma conta? <Link to="/login"><b>clique aqui</b></Link></p>
          </div>
        </div>
      </ContainerPage>
    </>
  );
}

export default ForgoutPassword;
