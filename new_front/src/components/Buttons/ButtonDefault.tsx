import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerButton } from "../style";

function ButtonDefault({ value, icon, width }: IPropsGlobal) {
  return (
    <ContainerButton width={width}>
      {icon && <img src={icon} alt="" />}
      {value}
    </ContainerButton>
  );
}
export default ButtonDefault;
