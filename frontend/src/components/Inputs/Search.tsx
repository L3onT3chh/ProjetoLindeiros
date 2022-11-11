/* eslint-disable prettier/prettier */
/* eslint-disable react/require-default-props */
import { AppDispatch } from "app/store";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerSearch } from "../style";

export function InputSearch({
  text,
  background,
  size,
  borderRadius,
  borderColor,
  className,
  height,
  color,
  setState,
}: IPropsGlobal) {
  const dispatch = useDispatch<AppDispatch>();
  const [valueSearch, setValueSearch] = useState(text);
  const handleWriteSearch = (value: string) => {
    setValueSearch(value);
    dispatch(setState(value.trim()));
  };
  return (
    <ContainerSearch
      height={height}
      color={color}
      background={background}
      width={size}
      className={className}
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
