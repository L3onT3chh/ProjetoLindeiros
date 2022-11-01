import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerH1 } from "../style";
import TitleDefault from "./Title";

function TextSublined({ name, color, subtitle, font, bold }: IPropsGlobal) {
  return (
    <ContainerH1 color={color} font={font}>
      <TitleDefault name={name} font={font} color={color} bold={bold} />
      <span>{`${subtitle}`}</span>
    </ContainerH1>
  );
}

export default TextSublined;
