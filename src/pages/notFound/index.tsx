import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import React from "react";
import imgNotFound from "assets/img/image 16.png";
import ButtonDefault from "components/Buttons/ButtonDefault";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <ContainerPage backgroundColor="#1B4977" className="notFound">
      <div className="container-page">
        <div className="data-notFound">
          <img src={imgNotFound} width="400px" alt="" />
          <p className="title-main title-h1">Página não encontrado</p>
          <p className="title-h2">
            Volte a <b>Página Inicial</b> ou tente novamente.
          </p>

          <Link to="/">
              <button className="btnInit">Voltar a tela inicial</button>
          </Link>
        </div>
      </div>
    </ContainerPage>
  );
}
