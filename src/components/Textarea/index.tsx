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
  value?: string;
  length?: number;
}

function TextArea({
  name,
  height,
  title,
  placeholder,
  required,
  className,
  setState,
  length,
  value,
}: IPros) {
  return (
    <ContainerTextarea height={height} className={className}>
      <textarea
        value={value}
        onChange={(e) => setState(e.target.value)}
        name={name}
        maxLength={length}
        id={`textarea-${title}`}
        placeholder={placeholder}
        required={required || false}
      />
    </ContainerTextarea>
  );
}

export default TextArea;
