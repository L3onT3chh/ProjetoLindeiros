import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerH1 } from "../style";

function TitleDefault({ name, color, bold, font, className, Icon }: IPropsGlobal) {
  return (
    <ContainerH1
      color={color}
      bold={bold}
      font={font ?? "35px"}
      className={className}
    >
      {Icon && (
        <Icon/>
      )}
      <span style={{marginLeft: (Icon) ? '7px' : '0'}}>{name}</span>
    </ContainerH1>
  );
}

export default TitleDefault;
