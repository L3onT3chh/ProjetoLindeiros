/* eslint-disable react/require-default-props */
import React, { SetStateAction } from "react";
import { ContainerSelect } from "../style";

interface IProps {
  options: Array<string>;
  background?: string;
  iconFinal?: any;
  width?: string;
  color?: string;
  setSelected?: SetStateAction<any>;
}

export function SelectMenu({
  color,
  options,
  background,
  iconFinal,
  width,
  setSelected,
}: IProps) {
  const handleClick = (option: string) => {
    if (setSelected) {
      setSelected(option);
    }
  };
  return (
    <ContainerSelect
      background={background}
      color={color}
      icon={iconFinal}
      width={width}
      onChange={(e) => handleClick(e.target.selectedOptions[0].outerText)}
      // onChange={(e) => handleClick(e.target.value)}
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
