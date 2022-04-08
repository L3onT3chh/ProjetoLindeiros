import React from "react";

import { logo } from "assets/img";
import { Container } from "./style";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <Container className="logo" link={logo} />
        <p>Todos os direitos reservados</p>
        <p style={{ textAlign: "center" }}>2021 - 2022</p>
      </div>
      <ul className="col">
        <li className="color-secondary">Conteudo</li>
        <a href="/">
          <li className="color-secondary">Home</li>
        </a>
        <a href="/eixos">
          <li className="color-secondary">Eixos</li>
        </a>
      </ul>
      <ul className="col">
        <li className="color-secondary">Sobre</li>
        <a href="/time">
          <li className="color-secondary">Equipe técnica</li>
        </a>
        <a href="/contato">
          <li className="color-secondary">Contato</li>
        </a>
      </ul>
      <ul className="col">
        <li className="color-secondary">Ação</li>
        <a href="/demandas">
          <li className="color-secondary">Demandas</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
