/* eslint-disable react/require-default-props */
import React from "react";
import { ContainerButton } from "../style";

interface IProps {
  value: string;
  width?: string;
}

function ButtonCard({ value, width }: IProps) {
  return (
    <ContainerButton
      background="#1B4977"
      color="white"
      width={width || "180px"}
      height="52px"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
      font="16px"
      top="37px"
    >
      {value}
    </ContainerButton>
  );
}

export default ButtonCard;
