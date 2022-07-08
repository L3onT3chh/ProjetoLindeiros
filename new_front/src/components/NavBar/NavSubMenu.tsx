import React from "react";
import { ContainerNavMenu } from "../style";

interface IProps {
  childrens: string[];
}

function NavSubMenu({ childrens }: IProps) {
  console.log(childrens);
  return (
    <ContainerNavMenu>
      {childrens.map((child) => (
        <p key={child}>{child}</p>
      ))}
    </ContainerNavMenu>
  );
}

export default NavSubMenu;
