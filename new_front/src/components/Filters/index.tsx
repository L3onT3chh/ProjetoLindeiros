/* eslint-disable react/require-default-props */
import React from "react";
import CheckList from "../Inputs/CheckList";
import { ContainerFilter } from "../style";

interface IProps {
  eixos: Array<string>;
  cities: Array<string>;
  status: Array<string>;
  colorFont?: string;
  colorTitle?: string;
  colorBackground?: string;
}

export function FiltersApplied({
  eixos,
  cities,
  status,
  colorBackground,
  colorFont,
  colorTitle,
}: IProps) {
  return (
    <ContainerFilter background={colorBackground} colorT={colorTitle}>
      <div className="container-styled filters-eixos">
        <h3 className="title-h3-alternative">Pesquisas por eixos</h3>

        <div className="content-list">
          {eixos.map((eixo) => (
            <CheckList key={eixo} colorFont={colorFont} title={eixo} />
          ))}
        </div>
      </div>
      <div className="container-styled filters-cities">
        <h3 className="title-h3-alternative">Municípios cadastrados</h3>
        <div className="content-list">
          {cities.map((city) => (
            <CheckList key={city} colorFont={colorFont} title={city} />
          ))}
        </div>
      </div>
      <div className="container-styled filters-status">
        <h3 className="title-h3-alternative">Status ativos</h3>
        <div className="content-list">
          {status.map((st) => (
            <CheckList key={st} colorFont={colorFont} title={st} />
          ))}
        </div>
      </div>
    </ContainerFilter>
  );
}
