/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import React from "react";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerButton } from "../style";

function ButtonCard({
  value,
  width,
  className,
  router,
  setState,
  state,
}: IPropsGlobal) {
  return (
    <Link className="link-painel" to={`${router}/`}>
      <ContainerButton
        onClick={() => setState(!state)}
        className={className}
        background="#1B4977"
        color="white"
        width={width || "180px"}
        height="52px"
        shadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
        font="13px"
        top="0px"
      >
        <p>{value}</p>
      </ContainerButton>
    </Link>
  );
}

export default ButtonCard;
