import { ContainerCardInfo } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";
import React from "react";

export function CardInfo({ children, Icon, className }: IPropsGlobal) {
  return (
    <ContainerCardInfo className={className}>
      <div className="icon">
        <Icon size={35} />
      </div>
      <span className="data-cardInfo">{children}</span>
    </ContainerCardInfo>
  );
}
