import React from "react";
import news from "../../assets/img/news.png";

import { Card, ContainerNews } from "../style";

interface INews {
  title: string;
  datePublished: string;
}

function CardNews({ title, datePublished }: INews) {
  return (
    <Card width="100%" height="386px" background={news}>
      <ContainerNews>
        <div className="card-floatting">
          <h3 className="title-h3-italic">Última Notícia</h3>
        </div>
        <div className="content-news">
          <h3 className="title-h3-italic">{title}</h3>
          <h6>Por autor em {datePublished}</h6>
        </div>
      </ContainerNews>
    </Card>
  );
}

export default CardNews;
