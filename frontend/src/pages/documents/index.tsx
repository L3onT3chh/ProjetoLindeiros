/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import NavBar from "components/NavBar";
import ButtonCard from "components/Buttons/ButtonCard";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { CardDocs } from "components/CardDocs";
import IDocument from "interfaces/data/document.interface";
import PDefault from "components/Popups";
import RegisterDocument from "components/Popups/subContent/registerDocument";
import { ContainerDocuments } from "./styled";

export function Documents() {
  const { document } = useSelector((state: IStateData) => state.documents);
  const [openCard, setOpenCard] = useState(false);

  return (
    <>
      <NavBar />
      <ContainerDocuments>
        <PDefault
          height="450"
          width="517"
          title="Cadastro de Documentos"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenCard}
          trigger={openCard}
        >
          <RegisterDocument />
        </PDefault>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos disponíveis</span>
            </h1>
            <ButtonCard
              value="Adicionar Documentos"
              router="/documentos"
              setState={setOpenCard}
              state={openCard}
            />
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
