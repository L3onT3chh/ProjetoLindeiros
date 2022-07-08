/* eslint-disable react/require-default-props */
import React from "react";
import { ContainerSublined } from "../style";

interface IProps {
  title: string;
  size?: string;
}

function SublinedText({ title, size }: IProps) {
  return (
    <ContainerSublined font={size || "30"}>
      <h3 className="title-h3">{title}</h3>
    </ContainerSublined>
  );
}

export default SublinedText;
