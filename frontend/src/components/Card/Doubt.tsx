/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from "react";
import emailsJs from "emailjs-com";
import ButtonSubmit from "components/Buttons/ButtonSubmit";
import { send } from "assets/icons";
import { ContainerDoubt, InputStyle, TextareaStyle } from "../style";

const SERVICE_ID = "service_nwuckoq";
const TEMPLATE_ID = "template_9o57sg8";
const USER_ID = "2P1DZILSItyOdsFHk";

function DoubtedCard() {
  const sendEmail = (dataEmail: any) => {
    if (Object.keys(dataEmail).length > 0) {
      alert("E-mail enviado com sucesso!");
      emailsJs
        .sendForm(SERVICE_ID, TEMPLATE_ID, dataEmail.target, USER_ID)
        .then((text) => console.log(text.text))
        .catch((e) => console.log(e));
    }
  };
  return (
    <ContainerDoubt height="389px">
      <div className="container-left">
        <h1 className="title-h1">Dúvidas?</h1>
        <p className="subtitle-p">
          Envie suas dúvidas ou sugestões no formulário ao lado.
        </p>
      </div>
      <div className="container-center" />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e);
        }}
      >
        <div className="container-right">
          <InputStyle
            width="475px"
            name="subject_name"
            height="47px"
            placeholder="Endereço de email"
          />
          <InputStyle
            className="form-control-demand"
            width="475px"
            name="from_name"
            height="47px"
            placeholder="Assunto"
          />
          <span />
          <TextareaStyle width="475px" rows={5} placeholder="Mensagem" />
          <ButtonSubmit className="icon-send" icon={send} />
        </div>
      </form>
    </ContainerDoubt>
  );
}

export default DoubtedCard;
