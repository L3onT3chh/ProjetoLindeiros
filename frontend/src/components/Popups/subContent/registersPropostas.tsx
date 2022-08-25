/* eslint-disable react/button-has-type */
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { SelectMenu } from "components/Select";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import React from "react";

function RegisterProposal() {
  return (
    <ContentProfile>
      <div className="content-default">
        <div className="content-basic-data">
          <h1 className="title-h3">Dados básicos</h1>
          <InputStyle
            placeholder="Nome"
            type="input"
            title=""
            className="form-control-demand"
          />
          <TextArea
            height="110px"
            placeholder="Descrição"
            title=""
            className="form-control-demand text-areax"
          />
          <div className="double-data">
            <InputStyle
              placeholder="Prazo de execução"
              type="date"
              title=""
              className="text-double"
            />
            <InputStyle
              placeholder="Valor do orçamento"
              type="number"
              title=""
              className="text-double"
            />
          </div>
          <SelectMenu
            className="select-demand-popup form-control-demand"
            options={[]}
            // ["Selecione a cidade"]
            width="100%"
          />
        </div>
        <div className="content-data-time">
          <h1 className="title-h3">Dados da equipe</h1>
          <div className="form-control-demand">
            <ChipAdd />
          </div>
        </div>
        <div className="btns-popup">
          <button className="btn-close-two">Fechar</button>
          <button className="btn-send">Enviar dados</button>
        </div>
        <div />
      </div>
    </ContentProfile>
  );
}

export default RegisterProposal;
