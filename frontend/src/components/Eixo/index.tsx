import React from "react";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerBackground } from "pages/styled";

export function Eixo({ link, text }: IPropsGlobal) {
  return (
    <ContainerBackground className="content" background={link}>
      <p>{text}</p>
    </ContainerBackground>
  );
}
