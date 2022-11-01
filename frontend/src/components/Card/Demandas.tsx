import React from "react";
import { ContainerCardChipDemandas } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";

export function CardDemandas({
  color,
  className,
  title,
  subtitle,
  date,
}: IPropsGlobal) {
  return (
    <ContainerCardChipDemandas color={color} className={className}>
      <div className="left-demanda" />
      <div className="right-demanda">
        <div className="content-card-demanda">
          <h2 className="title-h2">{title}</h2>
          <p className="title-h1-card">{subtitle}</p>
        </div>
        <div className="footer-card">
          <p className="date-footer">{date}</p>
        </div>
      </div>
    </ContainerCardChipDemandas>
  );
}
