/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// Style
import "assets/css/equipe.css";
import "assets/css/index.css";
import "assets/css/global.css";

// Components
import Header from "components/header/Header";
import CardPeople from "components/cardPeople";

// Imagens
import * as Image from "assets/img";
import { Organization } from "components/orgaos";
import EquipeTec from "assets/data/equipe";
import Footer from "components/footer/Footer";

export const Equipe = () => {
  return (
    <>
      <Header />
      <div className="equipe">
        <div className="header bgcolor-secondary">
          <div className="left">
            <h1>Equipe técnica</h1>
            <img src={Image.sponsor} width={60} />
          </div>
          <ul className="right">
            <li>Instituições do Grupo Gestor do Programa de Governança</li>

            <Organization
              name="SETI – Superintendência Geral de Ciência, Tecnologia e Ensino
                Superior"
              link="http://www.seti.pr.gov.br/"
            />
            <Organization
              link="https://www.unioeste.br/portal/campus-marechal-candido-rondon/"
              name="Unioeste – Campus de Marechal Cândido Rondon"
            />

            <Organization
              link="https://www.lindeiros.org.br/"
              name="Conselho dos Municípios Lindeiros"
            />

            <Organization
              link="http://www.fappr.pr.gov.br/"
              name="Fundação Araucária"
            />

            <Organization
              link="http://oestedesenvolvimento.com.br/"
              name="POD – Programa Oeste Desenvolvimento"
            />

            <Organization
              link="https://www.itaipu.gov.br/"
              name=" Itaipu Binacional"
            />
          </ul>
        </div>
        <div className="person">
          {EquipeTec.map((user) => (
            <CardPeople
              key={user.id}
              name={user.name}
              change={user.change}
              local={user.local}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
