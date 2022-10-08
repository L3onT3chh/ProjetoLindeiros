import React from "react";
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import { CardDocs } from "components/CardDocs";
// import { PopupDemandas } from "components/modais/demandas/demandas";
import NavBar from "components/NavBar";
import ButtonCard from "components/Buttons/ButtonCard";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { ContainerDocuments } from "./styled";

export function Documents() {
  const { documents } = useSelector((state: IStateData) => state);
  console.log(documents);
  return (
    <>
      <NavBar />
      <ContainerDocuments>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos disponíveis</span>
            </h1>
            <ButtonCard value="Adicionar Documentos" router="addDocs/" />
          </div>
          {/* Remover os objetivos especificos */}
          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
        </div>
      </ContainerDocuments>
    </>
  );
}
