import React from "react";
import TextSublined from "../components/Label/TextSublined";
import TitleDefault from "../components/Label/Title";
import ProgressBar from "../components/progress";
import { ContainerPage } from "./styled";
import backgroundImage from "../assets/img/background-demandas.png";
import NavSubMenu from "../components/NavBar/NavSubMenu";

function Demandas() {
  return (
    <ContainerPage background={backgroundImage}>
      <div className="container-banner">
        <TitleDefault name="Desenvolvimento da demanda 1" bold font="24" />

        <div className="data-banner">
          <ProgressBar color="white" percentage="90" font="16" />

          <TextSublined
            font="15"
            name="Criado por: "
            subtitle="fulano 1, fulano 2"
            bold
          />

          <div className="data-info">
            <TitleDefault name="Ultima atualização em 12/2021" font="12" />

            <TitleDefault name="Prioridade: Alta" font="12" />
          </div>
        </div>
        <div className="shadow-div" />
      </div>

      <div className="content-demanda">
        <NavSubMenu
          childrens={[
            "Detalhe",
            "Objetivos Especificos",
            "Propostas aceitas",
            "Propostas pendentes",
          ]}
        />
      </div>
    </ContainerPage>
  );
}

export default Demandas;
