import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerH1 } from "../style";

function TitleDefault({ name, color, bold, font }: IPropsGlobal) {
  return (
    <ContainerH1 color={color} bold={bold} font={font ?? "35px"}>
      <span>{name}</span>
    </ContainerH1>
  );
}

export default TitleDefault;
