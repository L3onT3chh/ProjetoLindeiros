/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TokenUser } from "config";
import { NavMobile } from "components/NavBar/NavMobile";
import { IPropsGlobal } from "interfaces/components.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { logout } from "app/reducers/auth/authSlice";
import { ComponenteDropdown, ContainerNavBar, ContentNav } from "../style";

function NavBar({ className }: IPropsGlobal) {
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
              <Link className="link-btn" to="/" replace>
                Home
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/eixos" replace>
                Eixos
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/demandas" replace>
                Demandas
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/documentos" replace>
                Documentos
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/noticias" replace>
                Notícias
              </Link>
            </div>
            <div className="content-link">
              <Link className="link-btn" to="/contato" replace>
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
                  <Dropdown.Item href="/painel">
                    <Link to="/painel">
                      <span className="text-item">Acessar painel</span>
                    </Link>
                  </Dropdown.Item>
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
