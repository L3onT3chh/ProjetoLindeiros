import React from "react";
import { SContainerProps } from "../../interfaces/global.interface";
import { ContainerH1 } from "../style";
import TitleDefault from "./Title";

interface IProps extends SContainerProps {
  name: string;
  subtitle: string;
}

function TextSublined({ name, color, subtitle, font, bold }: IProps) {
  return (
    <ContainerH1 color={color} font={font}>
      <TitleDefault name={name} font={font} color={color} bold={bold} />
      <span>{`${subtitle}`}</span>
    </ContainerH1>
  );
}

export default TextSublined;
