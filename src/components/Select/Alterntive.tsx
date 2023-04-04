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
  title,
  value,
}: IPropsGlobal) {
  const handleClick = (option: string) => {
    if (option !== undefined) {
      setState(option);
    }
  };
  return (
    <>
      {title &&
        (
          <h2 className="title-h3" style={{ fontSize: "14px", marginBottom: "2.5px", opacity: "0.8" }}>{title}</h2>
        )
      }
      <ContainerSelectAlternative
        className={className}
        background={background}
        color={color}
        icon={iconFinal}
        width={width}
        value={value}
        onChange={(e) => handleClick(e.target.selectedOptions[0].value)}
      >
        {options &&
          options.map((option: IOptions, index) => (
            <option
              defaultValue={value?.trim() === option.name ? option.name : ""}
              className="text-popup"
              value={option.id}
              key={index.toString()}
            >
              {option.name}
              {"  "}
            </option>
          ))}
      </ContainerSelectAlternative>
    </>
  );
}
