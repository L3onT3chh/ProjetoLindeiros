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
}: IPropsGlobal) {
  const [valueSearch, setValueSearch] = useState(text);

  return (
    <ContainerSearch
      background={background}
      width={size}
      borderRadius={borderRadius}
      border={borderColor}
    >
      <AiOutlineSearch />
      <input
        type="text"
        placeholder={valueSearch === "" ? text : valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
      />
    </ContainerSearch>
  );
}
