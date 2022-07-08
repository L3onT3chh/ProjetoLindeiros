import React from "react";
import { ContainerButton } from "../style";

interface IProps {
  value: string;
  icon: string;
}

function ButtonDefault({ value, icon }: IProps) {
  return (
    <ContainerButton>
      {icon && <img src={icon} alt="" />}
      {value}
    </ContainerButton>
  );
}
export default ButtonDefault;
