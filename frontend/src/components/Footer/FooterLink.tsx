import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerFooterPainel } from "../style";

export function FooterLink({ title, link }: IPropsGlobal) {
  return (
    <ContainerFooterPainel href={`/${link}`}>{title}</ContainerFooterPainel>
  );
}
