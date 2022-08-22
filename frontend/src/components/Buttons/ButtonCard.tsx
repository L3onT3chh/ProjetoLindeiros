/* eslint-disable react/require-default-props */
import React from "react";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerButton } from "../style";

function ButtonCard({ value, width, className, router }: IPropsGlobal) {
  return (
    <Link to={`/${router}`} className="link-painel">
      <ContainerButton
        className={className}
        background="#1B4977"
        color="white"
        width={width || "180px"}
        height="52px"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
        font="16px"
        top="37px"
      >
        <p>{value}</p>
      </ContainerButton>
    </Link>
  );
}

export default ButtonCard;
