/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ContainerInput } from "../style";

interface IPros {
  name?: string;
  title?: string;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
  onChange?: (event: any) => void;
  minLength?: number;
  maxLength?: number;
  valueChanges?: string;
  value?: any;
  height?: any;
}

function InputStyle({
  minLength,
  className,
  title,
  placeholder,
  type,
  name,
  maxLength,
  onChange,
  value,
  valueChanges,
  required,
  height
}: IPros) {
  return (
    <ContainerInput className={className}>
      {title &&
        (
          <h2 className="title-h3" style={{ fontSize: "14px", marginBottom: "2.5px", opacity: "0.8" }}>{title}</h2>
        )
      }
      <input
        defaultValue={value}
        onChange={onChange}
        name={name}
        value={valueChanges}
        className="text-popup"
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        style={{height:height, marginBottom: (height) ? "25px" : "0"}}
        id={`input-${title}`}
        placeholder={placeholder}
        required={required || false}
      />
      <label htmlFor={`input-${title}`} />
    </ContainerInput>
  );
}

export default InputStyle;
