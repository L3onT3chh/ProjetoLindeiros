import React from "react";
import news from "../../assets/img/news.png";
import { IPropsGlobal } from "../../interfaces/components.interface";

import { Card, ContainerNews } from "../style";

function CardNews({ title, datePublished }: IPropsGlobal) {
  return (
    <Card width="100%" height="396px" background={news} className="mainNews">
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
