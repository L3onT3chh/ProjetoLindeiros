import React, { ReactChild, ReactChildren } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { RiAddFill } from "react-icons/ri";
import { PopUp } from "../representantes/styled";
import { ContainerProposta } from "./styled";

type IPopupPropostas = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
};

export const PopupPropostas = (props: IPopupPropostas) => {
  return props.trigger ? (
    <PopUp>
      <ContainerProposta>
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose size={"24px"} />
        </button>

        <div className="data-header">
          <h2>Cadastro da Proposta</h2>
          <span></span>
        </div>

        <div className="data-content">
          <div className="form-data">
            <div className="title-data-proposta">
              <h3>Dados da proposta</h3>
              <VscGraphLine size={24} />
            </div>

            <div className="field-data">
              <div className="left-field">
                <input type="text" id="name" required placeholder="Nome" />
                <textarea
                  required
                  id="textarea-description"
                  placeholder="Descrição da proposta"
                />
                <select name="priority-field" id="select-priority-field">
                  <option value="1">Baixa</option>
                  <option value="2">Média</option>
                  <option value="3">Alta</option>
                </select>
                <div className="field-budget">
                  <input
                    type="text"
                    required
                    placeholder="Valor do orçamento"
                  />
                  <input type="text" required placeholder="Prazo de execução" />
                </div>
              </div>
              <div className="right-field">
                <select name="city-field" id="select-city-field">
                  <option value="">Selecione a cidade</option>
                  <option value="">Medianeira</option>
                  <option value="">Santa Helena</option>
                  <option value="">Missal</option>
                  <option value="">Foz do Iguaçu</option>
                  <option value="">Mundo novo</option>
                  <option value="">Pato Bragado</option>
                  <option value="">Guaíra</option>
                </select>

                <h3 id="h3_team">Equipe</h3>
                <input type="text" required placeholder="Membros da equipe" />
                <a href="/painel">
                  Adicionar <RiAddFill />
                </a>
                <input
                  type="file"
                  required
                  style={{ border: 0 }}
                  placeholder="Adicionar Documento PDF"
                />
                <a href="/painel">
                  Adicionar <RiAddFill />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-send-proposta">
          <button
            onClick={() => {
              props.setTrigger(false);
            }}
            className="exit-proposta"
          >
            Cancelar
          </button>
          <button className="cad-proposta">Cadastrar Proposta</button>
        </div>
      </ContainerProposta>
    </PopUp>
  ) : (
    <div></div>
  );
};
