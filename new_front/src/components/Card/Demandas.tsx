/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import ButtonCard from "../Buttons/ButtonCard";
import { CardContainerDemandas } from "../style";

export function CardDemandas({
  photo,
  description,
  name,
  date_create,
  status,
  id,
}: IPropsGlobal) {
  return (
    <CardContainerDemandas>
      <div className="container">
        <img src={photo} className="photo" alt="photo" />

        <div className="content-header">
          <div className="content-title">
            <h3 className="title-h3">{name}</h3>
            <div className="status">{status}</div>
          </div>
          <span className="subtitle-p">{date_create}</span>
        </div>
      </div>
      <div className="content-demandas-body">
        <p>{description}</p>
        <ButtonCard
          className="button-more"
          value="Ver Mais"
          router={`/demandas/${id}`}
        />
      </div>
    </CardContainerDemandas>
  );
}
