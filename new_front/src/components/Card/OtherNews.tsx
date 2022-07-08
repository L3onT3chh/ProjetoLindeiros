import React from "react";
import { Card, ContainerOtherNews } from "../style";

interface IOtherNewsProps {
  description: string;
  date: string;
  logo: {
    src: string;
    alt: string;
  };
}

function OtherNews({ description, date, logo }: IOtherNewsProps) {
  return (
    <Card width="421px" height="115px">
      <ContainerOtherNews>
        <img src={logo.src} alt={logo.alt} />

        <div className="data-content">
          <h1 className="title-h1-card">{date}</h1>
          <p className="description-card">{description}</p>
        </div>
      </ContainerOtherNews>
    </Card>
  );
}
export default OtherNews;
