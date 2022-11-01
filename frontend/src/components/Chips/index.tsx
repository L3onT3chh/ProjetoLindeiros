import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerChip } from "../style";

function ChipsLink({ name, className, path }: IPropsGlobal) {
  return (
    <ContainerChip className={className} href={path}>
      {name}
    </ContainerChip>
  );
}

export default ChipsLink;
