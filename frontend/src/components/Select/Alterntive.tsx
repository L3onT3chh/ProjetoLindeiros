/* eslint-disable react/no-array-index-key */
import React from "react";
import { ContainerSelectAlternative } from "components/style";
import { IOptions, IPropsGlobal } from "interfaces/components.interface";

export function SelectMenuAlternative({
  className,
  color,
  options,
  background,
  iconFinal,
  setState,
  width,
}: IPropsGlobal) {
  const handleClick = (option: string) => {
    if (option !== undefined) {
      setState(option);
    }
  };

  return (
    <ContainerSelectAlternative
      className={className}
      background={background}
      color={color}
      icon={iconFinal}
      width={width}
      onChange={(e) => handleClick(e.target.selectedOptions[0].value)}
    >
      {options &&
        options.map((option: IOptions, index) => (
          <option
            className="text-popup"
            value={option.id}
            key={index.toString()}
          >
            {option.name}
            {"  "}
          </option>
        ))}
    </ContainerSelectAlternative>
  );
}
