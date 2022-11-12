import React from "react";

import {
  addFile,
  addNews,
  addUser,
  cityspcape,
  eixo_one,
} from "../../assets/icons";
import CardDefault from "../../components/Card/CardDefault";
// import { StatisticGraph } from "../../components/Card/Statistic";
import { ChipLeft } from "../../components/Chips/ChipLeft";
import { MenuRight } from "../../components/SubMenu/MenuRight";
import { ContainerPainel } from "../css/styled";

export function InicioPainel() {
  return (
    <ContainerPainel>
      <MenuRight />
      <div className="container">
        <div className="container-header-main">
          <h1 className="title-h3">Seja bem vindo</h1>
          <p className="subtitle">Por onde gostaria de começar?</p>
        </div>
        <div className="card-header">
          <CardDefault
            width="32%"
            height="134px"
            icon={addFile}
            title="NOVA DEMANDA"
            url="/painel/demandas/add"
            borderIntern={false}
            className="cardP"
          />
          <CardDefault
            width="32%"
            height="134px"
            icon={addUser}
            borderIntern={false}
            title="NOVO USUÁRIO"
            url="/painel/users/add"
            className="cardP"
          />
          <CardDefault
            width="32%"
            height="134px"
            icon={addNews}
            borderIntern={false}
            title="NOVA NOTICÍA"
            url="/painel/news/add"
            className="cardP"
          />
        </div>
        {/* 
        <div className="statistic">
          <StatisticGraph
            className="content-box left"
            title="Nº de demandas por eixos"
            width="60%"
            height="317px"
          />
          <StatisticGraph
            className="content-box right"
            title="Crescimento comparado com utimo mês"
            width="40%"
            height="317px"
          />
        </div> */}

        <div className="chips-footer">
          <ChipLeft
            icon={eixo_one}
            text="Segurança"
            subtitle="Eixo com mais demandas"
            className="content-box"
          />
          <ChipLeft
            icon={cityspcape}
            text="Foz do Iguaçu"
            subtitle="Cidade com mais demandas"
            className="content-box"
          />
          <ChipLeft
            icon={eixo_one}
            text="Segurança"
            subtitle="Eixo com mais demandas"
            className="content-box"
          />
        </div>
      </div>
    </ContainerPainel>
  );
}
