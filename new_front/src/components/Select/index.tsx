/* eslint-disable react/require-default-props */
import React from "react";
import { ContainerSelect } from "../style";

interface IProps {
  options: Array<string>;
  background: string;
  iconFinal?: any;
  width?: string;
  color?: string;
}

export function SelectMenu({
  color,
  options,
  background,
  iconFinal,
  width,
}: IProps) {
  return (
    <ContainerSelect
      background={background}
      color={color}
      icon={iconFinal}
      width={width}
    >
      {options.map((option) => (
        <option key={option}>
          {option}
          {"  "}
        </option>
      ))}
    </ContainerSelect>
  );
}
