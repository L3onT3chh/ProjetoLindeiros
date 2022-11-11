/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TokenUser } from "config";
import { NavMobile } from "components/NavBar/NavMobile";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerNavBar, ContentNav } from "../style";

function NavBar({ className }: IPropsGlobal) {
  const [stateNav, setState] = useState(false);
  return (
    <ContentNav className={className}>
      <div className="menu-nav-hamburguer">
        <NavMobile className="ul-mobile" active={stateNav} />
        <input type="checkbox" id="hamburguer-input" />
        <label htmlFor="hamburguer-input">
          <div className="menu-hamburguer" onClick={() => setState(!stateNav)}>
            <span className="hamburguer-line" />
          </div>
        </label>
      </div>
      <ContainerNavBar className="nav-menu-main">
        <div className="content-links">
          <ul>
            <div className="content-link">
              <Link className="link-btn" to="/">
                Home
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/eixos">
                Eixos
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/demandas">
                Demandas
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/documentos">
                Documentos
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/noticias">
                Notícias
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/contato">
                Contato
              </Link>
            </div>
          </ul>

          {TokenUser() ? (
            <Link className="link-login" to="/painel">
              Acessar painel
            </Link>
          ) : (
            <Link className="link-login" to="/login">
              Efetuar Login
            </Link>
          )}
        </div>
      </ContainerNavBar>
    </ContentNav>
  );
}

export default NavBar;
