import React from "react";
import { Card, CardContentBody } from "../style";

interface ICard {
  title: string;
  logo: {
    alt: string;
    src: string;
  };
  description: string;
}

function CardEixos({ title, logo, description }: ICard) {
  return (
    <Card>
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
