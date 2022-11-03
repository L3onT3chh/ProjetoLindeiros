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

function RegisterRepresent() {
  const { city } = useSelector((state: IStateData) => state);
  const [, setSelectCity] = useState("");
  return (
    <>
      <LoadingDefault active={city.loading} />
      <NavBar />
      <ContainerPage style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <WelcomeLogin />

        <div className="login">
          <SublinedText size="32" title="Não possui cadastro?" />
          <form action="" className="form-login">
            <div className="forgout-chip form-control-demand-forgout">
              <SelectMenuAlternative
                title="Selecione um município"
                setState={setSelectCity}
                name="userType"
                options={city.city}
              />
            </div>
            <div className="forgout-chip form-control-demand-forgout">
              <SelectMenuAlternative
                title="Lista de representantes"
                //   setState={setTypeUser}
                name="userType"
                //   options={userTypes.types}
              />
            </div>
            <div className="forgout-chip form-control-demand-forgout">
              <TextArea
                //   setState={setSelectDescription}
                required
                height="150px"
                name="body"
                placeholder="Descrição"
                title="Mensagem"
              />
            </div>

            <ButtonForm width="100%" className="form-control-demand-forgout">
              <p>Solicitar cadastro</p>
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

export default RegisterRepresent;
