import React, { ReactChild, ReactChildren } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { RiAddFill } from "react-icons/ri";
import { PopUp } from "../representantes/styled";
import { ContainerDemandas } from "./styled";

type IPopupDemandas = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
};

export const PopupDemandas = (props: IPopupDemandas) => {
  console.log("oi")
  return props.trigger ? (
    <PopUp>
      <ContainerDemandas>
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose size={"24px"} />
        </button>

        <div className="data-header">
          <h2>Cadastro da Demanda</h2>
          <span></span>
        </div>

        <div className="data-content">
          <div className="form-data">
            <div className="title-data-demanda">
              <h3>Dados da demanda</h3>
              <VscGraphLine size={24} />
            </div>

            <div className="field-data">
              <div className="left-field">
                <input type="text" required placeholder="Nome" />
                <input type="text" required placeholder="Prioridade" />
                <select name="area-field" id="select-area-field">
                  <option value="">Área do conhecimento</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>

                <input type="date" required placeholder="Tempo estimado" />
                <input type="text" required placeholder="Cidade" />
              </div>
              <div className="right-field">
                <textarea required placeholder="Objetivo geral" />
                <div className="objective-add">
                  <input
                    type="text"
                    required
                    placeholder="Objetivo específico"
                  />
                  <a href="/painel">
                    Adicionar <RiAddFill />
                  </a>
                </div>
              </div>
            </div>

            <textarea
              name="description-textarea"
              id="textarea-description"
              placeholder="Descrição da demanda"
            ></textarea>
          </div>
        </div>
        <div className="btn-send-demanda">
          <div></div>
          <button
            onClick={() => {
              props.setTrigger(false);
            }}
            className="exit-demanda"
          >
            Cancelar
          </button>
          <button className="cad-demanda">Cadastrar demanda</button>
        </div>
      </ContainerDemandas>
    </PopUp>
  ) : (
    <div></div>
  );
};
