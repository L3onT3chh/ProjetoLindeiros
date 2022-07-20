/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ContainerTextarea } from "../style";

interface IPros {
  title: string;
  placeholder: string;
  required?: boolean;
}

function TextArea({ title, placeholder, required }: IPros) {
  return (
    <ContainerTextarea>
      <textarea
        id={`textarea-${title}`}
        placeholder={placeholder}
        required={required || false}
      />
    </ContainerTextarea>
  );
}

export default TextArea;
