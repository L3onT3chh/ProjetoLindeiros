import { IPropsGlobal } from "interfaces/components.interface";
import React from "react";
import { ContainerMenuSuspenso } from "../../style";

function MenuSuspenso({ className, children }: IPropsGlobal) {
  return (
    <ContainerMenuSuspenso className={className}>
      {children}
    </ContainerMenuSuspenso>
  );
}

export default MenuSuspenso;
