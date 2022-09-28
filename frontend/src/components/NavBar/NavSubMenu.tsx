/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { ContainerNavMenu } from "../style";

interface IProps {
  childrens: {
    name: string;
    id: number;
  }[];
  setText: any;
}

function NavSubMenu({ childrens, setText }: IProps) {
  return (
    <ContainerNavMenu>
      <nav>
        {childrens.map((child) => (
          <li onClick={() => setText(child.id)} key={child.id}>
            {child.name}
          </li>
        ))}
      </nav>
    </ContainerNavMenu>
  );
}

export default NavSubMenu;
