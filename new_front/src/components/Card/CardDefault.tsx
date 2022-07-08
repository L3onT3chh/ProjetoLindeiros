import React from "react";
import { Card, ContainerDefault } from "../style";

interface IProps {
  type: boolean;
  icon: string;
  title: string;
  url: string;
}

function CardDefault({ icon, title, url, type }: IProps) {
  return (
    <Card
      width={type ? "224px" : "300px"}
      shadow="10px 4px 10px rgba(0, 0, 0, 0.25)"
      height={type ? "154px" : "300px"}
    >
      <ContainerDefault>
        <img src={icon} alt="icon" />
        <span> </span>
        <a className="subtitle" href={url}>
          {title}
        </a>
      </ContainerDefault>
    </Card>
  );
}

export default CardDefault;
