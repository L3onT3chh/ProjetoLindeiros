/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

// Style
// import { Container } from "./style";
import "assets/css/contato.css";
import "assets/css/index.css";

// Components
import NavBar from "components/NavBar";

export function Contato() {
  return (
    <>
      <NavBar />
      <div>
        <div className="contato">
          <div className="left">
            <h1 className="color-secondary">Envie sua mensagem</h1>
            <h2>
              Preencha o formulario ao lado e nossa equipe entrará em contato em
              até 48 horas.
            </h2>
            <div className="info-group">
              <div className="info-item">
                <i className="fas fa-phone color-secondary" />
                <p>(45) 3268-2489 / 3268-3823</p>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt color-secondary" />
                <p>Avenida Brasil, 136 - Santa Helena, PR - 85892-000</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope color-secondary" />
                <p>conselho@lindeiros.org.br</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form className="form">
              <label>Seu nome</label>
              <input type="text" />
              <label>Mensagem</label>
              <textarea maxLength={500} defaultValue="" />
              <input
                type="submit"
                defaultValue="Enviar Mensagem"
                className="bgcolor-secondary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
