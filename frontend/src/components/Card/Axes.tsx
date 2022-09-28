import React from "react";
import { ICard } from "../../interfaces/components.interface";
import { Card, CardContentBody } from "../style";

function CardEixos({ title, logo, description, className }: ICard) {
  return (
    <Card className={className} height="380px">
      <CardContentBody>
        <h2 className="title-h2">{title}</h2>

        <div className="logo-card">
          <img src={logo.src} alt={logo.alt} />
        </div>

        <p className="description-card">{description}</p>
      </CardContentBody>
    </Card>
  );
}

export default CardEixos;
