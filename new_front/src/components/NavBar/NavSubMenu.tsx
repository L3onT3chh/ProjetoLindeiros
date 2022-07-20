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
          <ul key={child.id}>
            {/* eslint-disable-next-line */}
            <li onClick={() => setText(child.id)}>{child.name}</li>
          </ul>
        ))}
      </nav>
    </ContainerNavMenu>
  );
}

export default NavSubMenu;
