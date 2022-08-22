import React from "react";
import { send } from "../../assets/icons";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import { ContainerDoubt, InputStyle, TextareaStyle } from "../style";

function DoubtedCard() {
  return (
    <ContainerDoubt height="339px">
      <div className="container-left">
        <h1 className="title-h1">Dúvidas?</h1>
        <p className="subtitle-p">
          Envie suas dúvidas ou sugestões no formulário ao lado.
        </p>
      </div>
      <div className="container-center" />
      <div className="container-right">
        <InputStyle width="475px" height="47px" placeholder="Assunto" />
        <span />
        <TextareaStyle width="475px" rows={5} placeholder="Mensagem" />
        <ButtonSubmit className="icon-send" icon={send} />
      </div>
    </ContainerDoubt>
  );
}

export default DoubtedCard;
