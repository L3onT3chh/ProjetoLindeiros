/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React, { useRef } from "react";
import ButtonSubmit from "components/Buttons/ButtonSubmit";
import { send } from "assets/icons";
import SendEmail from "util/emailJs";
import { ContainerDoubt, InputStyle, TextareaStyle } from "../style";

function DoubtedCard() {
  const formContact = useRef(null);

  return (
    <ContainerDoubt height="389px">
      <div className="container-left">
        <h1 className="title-h1">Dúvidas?</h1>
        <p className="subtitle-p">
          Envie suas dúvidas ou sugestões no formulário ao lado.
        </p>
      </div>
      <div className="container-center" />
      <form ref={formContact} onSubmit={() => SendEmail(formContact)}>
        <div className="container-right">
          <InputStyle
            width="475px"
            name="subject_mail"
            height="47px"
            placeholder="Endereço de email"
          />
          <InputStyle
            className="form-control-demand"
            width="475px"
            name="reply_to"
            height="47px"
            placeholder="Assunto"
          />
          <span />
          <TextareaStyle
            width="475px"
            rows={5}
            name="message"
            placeholder="Mensagem"
          />
          <ButtonSubmit className="icon-send" icon={send} />
        </div>
      </form>
    </ContainerDoubt>
  );
}

export default DoubtedCard;
