import React from "react";
import { ContainerSubMenu } from "../style";

interface IProps {
  children: any;
}

function ContentSubMenu({ children }: IProps) {
  return <ContainerSubMenu>{children}</ContainerSubMenu>;
}

export default ContentSubMenu;
