import React from "react";
import { SContainerProps } from "../../interfaces/global.interface";
import { ContainerH1 } from "../style";

interface IProps extends SContainerProps {
  name: string;
}

function TitleDefault({ name, color, bold, font }: IProps) {
  return (
    <ContainerH1 color={color} bold={bold} font={font ?? "35px"}>
      <span>{name}</span>
    </ContainerH1>
  );
}

export default TitleDefault;
