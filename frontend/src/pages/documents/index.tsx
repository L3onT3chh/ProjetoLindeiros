/* eslint-disable react/no-array-index-key */
import React from "react";
import NavBar from "components/NavBar";
import ButtonCard from "components/Buttons/ButtonCard";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { CardDocs } from "components/CardDocs";
import IDocument from "interfaces/data/document.interface";
import { ContainerDocuments } from "./styled";

export function Documents() {
  const { document } = useSelector((state: IStateData) => state.documents);
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
          <div className="content-docs">
            {document.map((item: IDocument, index) => (
              <CardDocs
                key={index}
                demands_id={item.demands_id}
                extension={item.extension}
                fullPath={item.fullPath}
                name={item.name}
                path={item.path}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </ContainerDocuments>
    </>
  );
}
