/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { IOptions, IPropsGlobal } from "interfaces/components.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { ContainerSelect } from "../style";

export function SelectMenu({
  disabled,
  className,
  color,
  options,
  background,
  iconFinal,
  width,
  setSelected,
}: IPropsGlobal) {
  const [svalue, sSetValue] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (option: string) => {
    if (option !== " ") {
      dispatch(setSelected(option.trim()));
    }
  };

  useEffect(()=>{
    if(!disabled){
      sSetValue(0);
    }
  }, [disabled])
  return (
    <ContainerSelect
      className={className}
      background={background}
      color={color}
      icon={iconFinal}
      width={width}
      onChange={(e) => {handleClick(e.target.selectedOptions[0].outerText); sSetValue(parseInt(e.target.selectedOptions[0].value))}}
      disabled={disabled}
      value={svalue}
      // onChange={(e) => handleClick(e.target.value)}
    >
      {options &&
        options.map((option: IOptions, index) => (
          <option value={index} key={option.id}>
            {option.name}
            {"  "}
          </option>
        ))}
    </ContainerSelect>
  );
}
