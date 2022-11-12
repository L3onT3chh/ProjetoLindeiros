import React from "react";
import { logoIcon } from "../../assets/icons";
import ChipsLink from "../Chips";
import { ContainerFooter } from "../style";

function Footer() {
  return (
    <ContainerFooter>
      <div className="container-right">
        <img src={logoIcon} alt="Logo" />
        <p className="subtitle">Todos os direitos reservados</p>
        <p className="subtitle">2021 - 2022</p>
      </div>

      <div className="container-left">
        <div className="container-top">
          <ChipsLink className="subtitle" path="/" name="Home" />
          <ChipsLink
            className="subtitle"
            path="/documentos"
            name="Documentos"
          />
          <ChipsLink className="subtitle" path="/demandas" name="Demandas" />
        </div>

        <div className="container-bottom">
          <ChipsLink className="subtitle" path="/eixos" name="Eixos" />
          <ChipsLink className="subtitle" path="/noticias" name="Notícias" />
          <ChipsLink className="subtitle" path="/contato" name="Contato" />
        </div>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
