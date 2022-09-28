import React from "react";

import { ContentMobileMenu } from "components/style";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "interfaces/components.interface";

export function NavMobile({ className, active }: IPropsGlobal) {
  return (
    <ContentMobileMenu active={active} className={className}>
      <Link className="link-btn-mobile" to="/">
        <p>Home</p>
      </Link>
      <Link className="link-btn-mobile" to="/eixos">
        <p>Eixos</p>
      </Link>
      <Link className="link-btn-mobile" to="/demandas">
        <p>Demandas</p>
      </Link>
      <Link className="link-btn-mobile" to="/documentos">
        <p>Documentos</p>
      </Link>
      <Link className="link-btn-mobile" to="/noticias">
        <p>Notícias</p>
      </Link>
      <Link className="link-btn-mobile" to="/contato">
        <p>Contato</p>
      </Link>
    </ContentMobileMenu>
  );
}
