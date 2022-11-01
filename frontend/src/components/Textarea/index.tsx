/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ContainerTextarea } from "../style";

interface IPros {
  title: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  height?: string;
  name?: string;
  setState?: any;
  valueDefault?: string;
}

function TextArea({
  name,
  height,
  title,
  placeholder,
  required,
  className,
  setState,
  valueDefault,
}: IPros) {
  return (
    <ContainerTextarea height={height} className={className}>
      <h2 className="title-h3">{title}</h2>
      <textarea
        defaultValue={valueDefault}
        onChange={(e) => setState(e.target.value)}
        name={name}
        id={`textarea-${title}`}
        placeholder={placeholder}
        required={required || false}
      />
    </ContainerTextarea>
  );
}

export default TextArea;
