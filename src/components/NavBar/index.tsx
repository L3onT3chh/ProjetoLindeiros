/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TokenUser } from "config";
import { NavMobile } from "components/NavBar/NavMobile";
import { IPropsGlobal } from "interfaces/components.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { logout, selectCurentUser } from "app/reducers/auth/authSlice";
import { ComponenteDropdown, ContainerNavBar, ContentNav } from "../style";
import { convertToArray } from "util/handleSelectorObj";

function NavBar({ className, text }: IPropsGlobal) {
  const [user, logged] = useSelector(selectCurentUser);
  const dataA: any = convertToArray(user)[0];
  const dispatch = useDispatch<AppDispatch>();
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
              <Link className={`link-btn ${(text === "home") ? "active" : ""}`} to="/" replace>
                Home
              </Link>
            </div>
            <div className="content-link">
              <Link className={`link-btn ${(text === "eixos") ? "active" : ""}`} to="/eixos" replace>
                Eixos
              </Link>
            </div>
            <div className="content-link">
              <Link className={`link-btn ${(text === "demandas") ? "active" : ""}`} to="/demandas" replace>
                Demandas
              </Link>
            </div>
            <div className="content-link">
              <Link className={`link-btn ${(text === "documents") ? "active" : ""}`} to="/documentos" replace>
                Documentos
              </Link>
            </div>
            <div className="content-link">
              <Link className={`link-btn ${(text === "noticia") ? "active" : ""}`} to="/noticias" replace>
                Notícias
              </Link>
            </div>
            <div className="content-link">
              <Link className={`link-btn ${(text === "contato") ? "active" : ""}`} to="/contato" replace>
                Contato
              </Link>
            </div>
          </ul>

          {TokenUser() ? (
            <ComponenteDropdown>
              <Dropdown className="dropdown-main">
                <Dropdown.Toggle
                  id="dropdown-basic-button"
                  className="dropdown-nav"
                >
                  Usuário logado
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {logged && (
                    <Dropdown.Item href="/meupainel">
                    <a href="/meupainel">
                      <span className="text-item">Acessar Painel</span>
                    </a>
                  </Dropdown.Item>
                  )}
                  <Dropdown.Item href="/login">
                    <Link
                      to="/login"
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      <span className="text-item">Logout</span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ComponenteDropdown>
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
