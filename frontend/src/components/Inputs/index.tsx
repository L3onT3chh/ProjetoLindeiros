/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ContainerInput } from "../style";

interface IPros {
  title: string;
  placeholder: string;
  type: string;
  required?: boolean;
}

function InputStyle({ title, placeholder, type, required }: IPros) {
  return (
    <ContainerInput>
      <h2 className="title-h3">{title}</h2>

      <input
        type={type}
        id={`input-${title}`}
        placeholder={placeholder}
        required={required || false}
      />
      <label htmlFor={`input-${title}`} />
    </ContainerInput>
  );
}

export default InputStyle;
