import React from "react";
import { Card, ContainerCardDemandas } from "../style";
import demandas from "../../assets/img/demandas.png";
import ButtonCard from "../Buttons/ButtonCard";

function CardDemandas() {
  return (
    <Card width="100%" height="400px" background={demandas}>
      <ContainerCardDemandas>
        <span>
          <h1 className="title-h1">Confira todas as demandas</h1>
          <ButtonCard value="Ver mais" width="200" router="/demandas" />
        </span>
      </ContainerCardDemandas>
    </Card>
  );
}

export default CardDemandas;
