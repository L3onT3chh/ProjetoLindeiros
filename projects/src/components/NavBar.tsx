import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bgcolor-secondary">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/eixos">
          <li>Eixos</li>
        </Link>
        <Link to="/demandas">
          <li>Demandas</li>
        </Link>
        <Link to="/docs">
          <li>Documentos</li>
        </Link>
        <Link to="/news">
          <li>Notícias</li>
        </Link>
        <Link to="/contato">
          <li>Contato</li>
        </Link>
      </ul>
    </nav>
  );
};
