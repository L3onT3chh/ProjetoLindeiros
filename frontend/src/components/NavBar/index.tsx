import React from "react";
import { Link } from "react-router-dom";
import { ContainerNavBar } from "../style";
import {
  contactIcon,
  demandasIcon,
  documentosIcon,
  eixosIcon,
  homeIcon,
  loginIcon,
  newsIcon,
} from "../../assets/icons";

function NavBar() {
  return (
    <ContainerNavBar>
      <div className="content-links">
        <ul>
          <div className="content-link">
            <Link className="link-btn" to="/">
              <img className="img-btn" src={homeIcon} alt="home-icon" />
              Home
            </Link>
          </div>
          <div className="content-link">
            <Link className="link-btn" to="/eixos">
              <img className="img-btn" src={eixosIcon} alt="eixos-icon" />
              Eixos
            </Link>
          </div>
          <div className="content-link">
            <Link className="link-btn" to="/demandas">
              <img className="img-btn" src={demandasIcon} alt="demandas-icon" />
              Demandas
            </Link>
          </div>
          <div className="content-link">
            <Link className="link-btn" to="/documentos">
              <img
                className="img-btn"
                src={documentosIcon}
                alt="documents-icon"
              />
              Documentos
            </Link>
          </div>
          <div className="content-link">
            <Link className="link-btn" to="/noticias">
              <img className="img-btn" src={newsIcon} alt="news-icon" />
              Notícias
            </Link>
          </div>
          <div className="content-link">
            <Link className="link-btn" to="/contato">
              <img className="img-btn" src={contactIcon} alt="contact-icon" />
              Contato
            </Link>
          </div>
        </ul>

        <Link className="link-login" to="/login">
          <img className="img-btn" src={loginIcon} alt="login-icon" />
          Efetuar login
        </Link>
      </div>
    </ContainerNavBar>
  );
}

export default NavBar;
