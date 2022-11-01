import React from "react";
import { IfaceProps } from "interfaces/IfaceProps";

export const Organization = (props: IfaceProps) => {
  const { name } = props;

  return (
    <li>
      <a target="__blank" href={props.link}>
        {name}
      </a>
    </li>
  );
};
