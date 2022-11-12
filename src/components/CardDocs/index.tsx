/* eslint-disable react/destructuring-assignment */
import { Card, CardDocsStyled } from "components/style";
import { IStateData } from "interfaces/components.interface";
import IDocument from "interfaces/data/document.interface";
import React from "react";
import { AiFillInfoCircle, AiOutlineCloudDownload } from "react-icons/ai";
import { useSelector } from "react-redux";
// import { BsDownload } from "react-icons/bs";

export function CardDocs(documentSelect: IDocument) {
  const { demand } = useSelector((state: IStateData) => state.demands);

  const handleSearchDemand = (id: string) => {
    const demandSearch = demand.filter(
      (item) => item.id.trim() === id.toString().trim() && item.name,
    )[0];
    if (demandSearch) {
      return demandSearch.name;
    }
    return undefined;
  };

  return (
    <Card width="32%" height="105px">
      <CardDocsStyled color="red">
        <div className="left-doc">
          <div className="color-doc" />
          <div className="data-docs">
            <b>
              {documentSelect?.name.substring(0, 20) || "Nome do documento"}..
            </b>
            <span className="data-docs-especify">
              <b>Tipo:</b>
              <p>{documentSelect?.extension.toLocaleUpperCase()}</p>
            </span>
            <span className="data-docs-especify">
              <b>Demanda:</b>
              <p>
                {handleSearchDemand(
                  documentSelect.demands_id.toString(),
                )?.substring(0, 15)}
                ...
              </p>
            </span>
          </div>
        </div>

        <div className="right-doc">
          <AiFillInfoCircle size={40} color="blue" className="infoIcon" />
          <AiOutlineCloudDownload
            size={45}
            color="green"
            className="downloadIcon"
          />
        </div>
      </CardDocsStyled>
    </Card>
  );
}
