import React from "react";
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import { CardDocs } from "components/cardDocs";
// import { PopupDemandas } from "components/modais/demandas/demandas";
import NavBar from "components/NavBar";
import { ContainerDocuments } from "./styled";

export function Documents() {
  return (
    <>
      <NavBar />
      <ContainerDocuments>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos disponíveis</span>
            </h1>
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
