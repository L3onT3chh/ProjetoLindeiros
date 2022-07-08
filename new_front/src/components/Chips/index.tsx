import React from "react";
import { ContainerChip } from "../style";

export interface IProps {
  name: string;
  path: string;
  className: string;
}

function ChipsLink({ name, className, path }: IProps) {
  return (
    <ContainerChip className={className} href={path}>
      {name}
    </ContainerChip>
  );
}

export default ChipsLink;
