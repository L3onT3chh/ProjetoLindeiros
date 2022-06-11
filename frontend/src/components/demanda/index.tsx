import { useParams } from "react-router-dom";
import "assets/css/demandas.css";

// Style
import "assets/css/index.css";
import Demandas from "assets/data/demandas";

// Components
import SendDemandas from "./popUp";
import { PopupPropostas } from "components/modais/propostas/propostas";
import React, { useState } from "react";

export const Demanda = () => {
  const { id } = useParams();
  const [btnTrigger, setTrigger] = useState(false);

  const data = Demandas.filter((item) => item.id === Number(id) && item)[0];
  return (
    <>
      <div>
        <div className="demandasSingle">
          <div
            className="banner"
            style={{ backgroundImage: "url(img/cadastroBanner.jpg)" }}
          >
            <div className="cover" />
            <div className="inner">
              <div className="info">
                <h1 className="txtWhite">{data.name}</h1>
                <p className="txtWhite descricao">{data.description}</p>
                <div className="group">
                  <div className="line">
                    <div className="progressBar">
                      <p>Progresso em {data.progress.total}%</p>
                      <div
                        className="fluid bgcolor-secondary"
                        style={{ width: `${data.progress.total}%` }}
                      />
                    </div>
                  </div>
                  <div className="line">
                    <b className="txtWhite">Criado por</b>
                    <ul className="autores">
                      {data.author.map((item) => (
                        <li key={item}>{item},</li>
                      ))}
                    </ul>
                  </div>
                  <div className="line">
                    <div className="infoItem">
                      <i
                        className="fas fa-calendar-week txtWhite"
                        style={{ marginRight: 10, fontSize: "0.9rem" }}
                      />
                      <p className="txtWhite">
                        Última atualização em {data.updated}
                      </p>
                    </div>
                    <div className="infoItem">
                      <i
                        className="fas fa-exclamation-circle txtWhite"
                        style={{
                          marginRight: 10,
                          fontSize: "0.9rem",
                          transform: "translateY(2px)",
                        }}
                      />
                      <p className="txtWhite">
                        Prioridade {data.priority.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="controle">
                <div
                  className="logo"
                  style={{ backgroundImage: "url(img/logo.png)" }}
                />
                <div className="info">
                  <div className="data">
                    <p>Criado em</p>
                    <h2>{data.budget.createdAt}</h2>
                  </div>
                  <h3 className="title">Mais detalhes</h3>
                  <ul className="lista">
                    <li>
                      <i className="fas fa-city" />
                      <p>Aplicado em {data.budget.cityApplied}</p>
                    </li>
                    <li>
                      <i className="far fa-lightbulb" />
                      <p>Area {data.budget.area}</p>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setTrigger(true)}
                  className="btnProposta bgcolor-secondary"
                >
                  Enviar proposta
                </button>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="objetivoGeral">
              <h1 className="color-secondary" style={{ fontSize: "1.7rem" }}>
                <i
                  className="fas fa-circle color-secondary"
                  style={{ fontSize: "0.9rem" }}
                />
                <i
                  className="fas fa-circle color-secondary"
                  style={{ fontSize: "1.25rem", margin: "0 5px" }}
                />
                Objetivo Geral
              </h1>
              <div className="text">
                {data.objective.general.map((item) => (
                  <p style={{ textAlign: "justify" }} key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="objetivoEspecifico" style={{ marginTop: 50 }}>
              <h1 className="color-secondary" style={{ fontSize: "1.7rem" }}>
                <i
                  className="fas fa-circle color-secondary"
                  style={{ fontSize: "0.9rem" }}
                />
                <i
                  className="fas fa-circle color-secondary"
                  style={{ fontSize: "1.25rem", margin: "0 5px" }}
                />
                Objetivos Específicos
              </h1>
              <div className="text">
                <ul className="block">
                  {data.objective.specific.map(
                    (item, index) =>
                      index < 2 && (
                        <li>
                          <h3
                            className="color-secondary"
                            style={{ margin: "0 0 5px" }}
                          >
                            Titulo específico
                          </h3>
                          <p>{item}</p>
                        </li>
                      )
                  )}
                </ul>
                <ul className="block">
                  {data.objective.specific.map(
                    (item, index) =>
                      index > 1 && (
                        <li>
                          <h3
                            className="color-secondary"
                            style={{ margin: "0 0 5px" }}
                          >
                            Titulo específico
                          </h3>
                          <p>{item}</p>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>

            <button
              style={{ marginBottom: "100px", marginTop: "40px" }}
              id="btnAddUser"
              // onClick={() => setTrigger1(true)}
              className="bgcolor-secondary"
            >
              Status da proposta
            </button>

            {/* <div className="progressoDemanda"> */}
            {/* <h1 className="color-secondary" style={{ fontSize: "1.7rem" }}> */}
            {/* <i */}
            {/* className="fas fa-circle color-secondary" */}
            {/* style={{ fontSize: "0.9rem" }} */}
            {/* /> */}
            {/* <i */}
            {/* className="fas fa-circle color-secondary" */}
            {/* style={{ fontSize: "1.25rem", margin: "0 5px" }} */}
            {/* /> */}
            {/* Progresso da proposta aceita */}
            {/* </h1> */}
            {/* <div className="content"> */}
            {/* {data.progress.step.map((progress) => (
                  <div key={progress.modify} className="item">
                    <div className="data">
                      <i className="fas fa-circle color-secondary" />
                      <p>Realizado em {progress.date}</p>
                    </div>
                    <div className="detalhe">
                      <h4>Modificação tal que foi feita</h4>
                      <p>
                        <b>Feito por: </b>Guilherme a{" "}
                        {progress.finish.time + " " + progress.finish.period}{" "}
                        atrás
                      </p>
                    </div>
                  </div>
                ))} */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <PopupPropostas trigger={btnTrigger} setTrigger={setTrigger} />

        <SendDemandas />
      </div>
    </>
  );
};
