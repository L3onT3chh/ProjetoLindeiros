import React from "react";
import { SContainerProps } from "../../interfaces/global.interface";
import TitleDefault from "../Label/Title";
import { ContainerProgress } from "../style";

interface IProgress extends SContainerProps {
  percentage: string;
}

function ProgressBar({ percentage, color, font }: IProgress) {
  return (
    <ContainerProgress>
      <TitleDefault
        color={color}
        font={font}
        name={`Progresso ${percentage}%`}
      />
    </ContainerProgress>
  );
}

export default ProgressBar;
