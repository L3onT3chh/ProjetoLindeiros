/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerSearch } from "../style";

export function InputSearch({
  text,
  background,
  size,
  borderRadius,
  borderColor,
  height,
  color,
  setState,
}: IPropsGlobal) {
  const [valueSearch, setValueSearch] = useState(text);
  const handleWriteSearch = (value: string) => {
    setValueSearch(value);
    setState(value);
  };
  return (
    <ContainerSearch
      height={height}
      color={color}
      background={background}
      width={size}
      borderRadius={borderRadius}
      border={borderColor}
    >
      <AiOutlineSearch color={color} />
      <input
        type="text"
        placeholder={valueSearch === "" ? text : valueSearch}
        onChange={(e) => handleWriteSearch(e.target.value)}
      />
    </ContainerSearch>
  );
}
