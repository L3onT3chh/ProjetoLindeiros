/* eslint-disable react/require-default-props */
import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { Card, ContainerDefault } from "../style";

function CardDefault({
  width,
  height,
  icon,
  title,
  url,
  className,
  borderIntern,
}: IPropsGlobal) {
  return (
    <Card
      className={className}
      width={width || "300px"}
      shadow="10px 4px 10px rgba(0, 0, 0, 0.25)"
      height={height || "300px"}
    >
      <ContainerDefault>
        <img src={icon} alt="icon" />
        {borderIntern ?? <span> </span>}
        <a className="subtitle" href={url}>
          {title}
        </a>
      </ContainerDefault>
    </Card>
  );
}

export default CardDefault;
