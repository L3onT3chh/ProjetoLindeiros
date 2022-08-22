import React from "react";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerButton } from "../style";

function ButtonDefault({ value, icon, width, router }: IPropsGlobal) {
  return (
    <ContainerButton width={width}>
      <Link to={`/${router}`}>
        {icon && <img src={icon} alt="" />}
        {value}
      </Link>
    </ContainerButton>
  );
}
export default ButtonDefault;
