import { AppDispatch } from "app/store";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerSearch } from "../style";

export function InputSearch({
  reset,
  text,
  background,
  size,
  borderRadius,
  borderColor,
  className,
  height,
  color,
  setState,
  valueDefault
}: IPropsGlobal) {
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
        placeholder={text}
        onChange={(e) => setState(e.target.value)}
        value={valueDefault}
      />
    </ContainerSearch>
  );
}
