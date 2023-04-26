/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import WelcomeLogin from "components/Card/Welcome";
import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import SublinedText from "components/Label/Sublined";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import TextArea from "components/Textarea";
import ButtonForm from "components/Buttons/ButtonForm";
import CardDefault from "components/Card/CardDefault";
import { lock, loginIconDefault } from "assets/icons";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { LoadingDefault } from "components/Loading";
import InputStyle from "components/Inputs";
import { Link } from "react-router-dom";
import { formatKeyTypes, showErrorMessage } from "util/function";
import { requestAccount } from "API/User/crud.user";

function RegisterRepresent() {
  const { city } = useSelector((state: IStateData) => state);
  const { userTypes } = useSelector((state: IStateData) => state);
  const [uemail, setEmail] = useState("");
  const [uText, setText] = useState("");
  const [ucity, setSelectCity] = useState("none");
  const [utype, setSelectType] = useState("none");
  const [message, setMessage] = useState(false);

  const handleRequest = async (e: any) => {
    e.preventDefault();

    if (ucity === "none" || utype === "none" || uText.length === 0 || uemail.length === 0) {
      showErrorMessage("Preencha todos os campos", "error");
      return;
    }

    let resp = await requestAccount(uText, uemail, utype, ucity);

    if(resp.status !== 200){
      showErrorMessage(resp.message, "error");
      return;
    }

    showErrorMessage(resp.message, "success");
    setMessage(true);
  }
  return (
    <>
      <LoadingDefault active={city.loading} />
      <NavBar />
      <ContainerPage style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <WelcomeLogin />

        <div className="login">
          {message ?
            (
              <div className="message">
                <h1>Pedido realizado com sucesso</h1>
                <p>
                  Prezado usuário,
                  Agradecemos pelo seu interesse em participar do Programa de Governança dos Lindeiros. Recebemos o seu pedido de cadastro e informamos que ele será analisado cuidadosamente pela nossa equipe.
                </p>
                <p>
                  Pedimos que aguarde o nosso contato, que será realizado por e-mail, informando o status do seu pedido e os próximos passos a serem seguidos.
                </p>
                <p>Desde já, agradecemos a sua disposição em contribuir para o desenvolvimento da região.
                Atenciosamente,</p>
                <p>Equipe do Programa de Governança dos Lindeiros.</p>
              </div>
        ) :
        (
        <form action="" className="form-login" onSubmit={handleRequest}>
          <div className="forgout-chip form-control-demand-forgout">
            <SelectMenuAlternative
              title="Selecione um município"
              setState={setSelectCity}
              value={ucity}
              name="userType"
              options={city.city}
            />
          </div>
          <div className="forgout-chip form-control-demand-forgout">
            <SelectMenuAlternative
              title="Lista de representantes"
              value={utype}
              setState={setSelectType}
              name="userType"
              options={formatKeyTypes(["Selecione um valor", ...userTypes.publicTypes], {})}
            />
          </div>
          <div className="forgout-chip form-control-demand-forgout">
            <InputStyle
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={uemail}
              required
              name="body"
              placeholder="E-mail pra contato"
              title="Informações de contato"
            />
          </div>
          <div className="forgout-chip form-control-demand-forgout">
            <TextArea
              setState={setText}
              value={uText}
              required
              height="150px"
              name="body"
              placeholder="Descreva sobre sua instituição e motivo da requisição de cadastro"
              title="Mensagem"
            />
          </div>

          <ButtonForm width="100%" className="form-control-demand-forgout">
            <p>Solicitar cadastro</p>
          </ButtonForm>
        </form>
        )
          }
        <div className="container-footer">
          <p className="createAccount">Ja possui uma conta? <Link to="/login"><b>clique aqui</b></Link></p>
        </div>
      </div>
    </ContainerPage>
    </>
  );
}

export default RegisterRepresent;
