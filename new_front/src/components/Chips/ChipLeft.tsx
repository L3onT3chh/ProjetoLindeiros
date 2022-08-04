import React from "react";
import { ContainerChipLeft } from "../style";

interface IProps {
  text: string;
  icon: string;
  subtitle: string;
  className: string;
}

export function ChipLeft({ text, icon, subtitle, className }: IProps) {
  return (
    <ContainerChipLeft className={className}>
      <img src={icon} className="span-icon" alt={text.replaceAll("", "-")} />
      <div className="span-text">
        <span className="subtitle">{subtitle}</span>
        <h2 className="title-h2">{text}</h2>
      </div>
    </ContainerChipLeft>
  );
}
