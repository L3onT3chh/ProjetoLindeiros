import React from "react";
import demandas from "assets/data/demandas";
import { ReactChild, ReactChildren } from "react";
import { useParams } from "react-router";
import { PopUp } from "../representantes/styled";
import { ContainerStatus } from "./styled";
import { AiOutlineClose } from "react-icons/ai";

type IPopupPropostas = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  id: string | undefined;
  setTrigger: any;
};

export const StatusPropostas = (props: IPopupPropostas) => {
  const data = demandas.filter(
    (item) => item.id === Number(props.id) && item
  )[0];

  return props.trigger ? (
    <PopUp>
      <ContainerStatus>
        <div className="progressoDemanda">
          <button className="btn-close" onClick={() => props.setTrigger(false)}>
            <AiOutlineClose size={"24px"} />
          </button>
          <h1 className="color-secondary" style={{ fontSize: "1.7rem" }}>
            <i
              className="fas fa-circle color-secondary"
              style={{ fontSize: "0.9rem" }}
            />
            <i
              className="fas fa-circle color-secondary"
              style={{ fontSize: "1.25rem", margin: "0 5px" }}
            />
            Progresso da proposta aceita
          </h1>
          <div className="content">
            {data.progress.step.map((progress) => (
              <div key={progress.modify} className="item">
                <div className="data">
                  <p>Realizado em {progress.date}</p>
                </div>
                <div className="detalhe">
                  <h4>Modificação tal que foi feita</h4>
                  <p>
                    <b>Feito por: </b>Guilherme a{" "}
                    {progress.finish.time + " " + progress.finish.period} atrás
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerStatus>
    </PopUp>
  ) : (
    <div></div>
  );
};
