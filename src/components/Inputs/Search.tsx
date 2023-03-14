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
}: IPropsGlobal) {
  const dispatch = useDispatch<AppDispatch>();
  const [valueSearch, setValueSearch] = useState(text);
  const [textValue, setTextValue] = useState("");
  const handleWriteSearch = (value: string) => {
    setTextValue(value);
    setValueSearch(value);
    dispatch(setState(value.trim()));
  };

  useEffect(() => {
    if(reset){
      setTextValue("");
    }
  }, [reset])

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
        onChange={(e) => handleWriteSearch(e.target.value)}
        value={textValue}
      />
    </ContainerSearch>
  );
}
