import { ContainerChipFilter } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";
import React from "react";

function ChipFilter({ className, text, color }: IPropsGlobal) {
  return (
    <ContainerChipFilter className={className} color={color}>
      <span className="log-color" />
      <span className="filter-demand">{text}</span>
    </ContainerChipFilter>
  );
}

export default ChipFilter;
