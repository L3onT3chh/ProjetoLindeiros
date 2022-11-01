/* eslint-disable react/require-default-props */
import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerSublined } from "../style";

function SublinedText({ title, size, className }: IPropsGlobal) {
  return (
    <ContainerSublined font={size || "30"} className={className}>
      <h3 className="title-h3">{title}</h3>
    </ContainerSublined>
  );
}

export default SublinedText;
