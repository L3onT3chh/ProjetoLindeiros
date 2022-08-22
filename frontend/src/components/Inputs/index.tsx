/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ContainerInput } from "../style";

interface IPros {
  title: string;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
  minLength?: number;
}

function InputStyle({
  minLength,
  className,
  title,
  placeholder,
  type,
  required,
}: IPros) {
  return (
    <ContainerInput className={className}>
      <h2 className="title-h3">{title}</h2>

      <input
        minLength={minLength}
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
