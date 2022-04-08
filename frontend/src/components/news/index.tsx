import React from "react";

// Style
import { ContainerNews } from "./styles";

// Images
import * as Images from "assets/img/eixos/index";

// Componentes
import BlockItem from "../blockNews";
import Header from "../header/Header";

export const NewsItems = () => {
  return (
    <>
      <Header />
      <div className="noticiasItem">
        <ContainerNews
          className="cover"
          background="https://www.lindeiros.org.br/upload/170932336561ea00084f57c2.95845073.jpeg"
        />
        <div className="black-cover" />
        <div className="info">
          <h5>25 de jan, 2022</h5>
          <ul className="tag">
            <li>Lindeiros</li>
            <li>Santa Helena</li>
            <li>Gestão</li>
          </ul>
          <h1 className="color-secondary">
            Conselho dos Lindeiros solidifica parcerias para projetos
            estruturantes na região
          </h1>
          <BlockItem>
            <p>
              Na pauta de discussões esteve o Programa de Governança, Inovação e
              Inteligência para Desenvolvimento dos Arranjos Produtivos nos
              Municípios Lindeiros ao Lago de Itaipu com relatório de 2021 e
              ações para 2022; O andamento e funcionamento do convênio TST
              asfaltamentos; Apresentação dos programas e ferramentas do Invest
              Paraná; Apresentação de dispositivo de telemedicina – Invest
              Paraná; Assinatura de termos de cooperação técnica entre o
              Conselho dos Lindeiros e entidades, compostas por universidades e
              órgãos do Estado do Paraná; Prestação de contas do ano de 2021
              pelo conselho fiscal e assuntos gerais
            </p>
          </BlockItem>

          <BlockItem>
            <h2>Termos de cooperação</h2>
            <p>
              O major Washington Vasconcelos Santana, que representou a Itaipu
              Binacional no evento, ressaltou que é uma satisfação verificar o
              trabalho que o Conselho dos Lindeiros faz na região. “Ficamos
              muito felizes com o que foi apresentado na Assembleia Ordinária. A
              região toda terá um ganho fundamental, não só na parte
              infraestrutura como também na inovação, tecnologia, saúde, turismo
              e meio ambiente”, ressalta. “Quero parabenizar o Lindeiros pelo
              brilhante projeto que está sendo desenvolvido o que fortalece a
              parceria com Itaipu”, enfatiza.
            </p>
          </BlockItem>

          <BlockItem>
            <h2>Parceria fortalecida</h2>
            <p>
              O major Washington Vasconcelos Santana, que representou a Itaipu
              Binacional no evento, ressaltou que é uma satisfação verificar o
              trabalho que o Conselho dos Lindeiros faz na rthreegião. “Ficamos
              muito felizes com o que foi apresentado na Assembleia Ordinária. A
              região toda terá um ganho fundamental, não só na parte
              infraestrutura como também na inovação, tecnologia, saúde, turismo
              e meio ambiente”, ressalta. “Quero parabenizar o Lindeiros pelo
              brilhante projeto que está sendo desenvolvido o que fortalece a
              parceria com Itaipu”, enfatiza.
            </p>
          </BlockItem>

          <div className="galeria">
            <h2>Ver fotos</h2>
            <div className="itens">
              {Images.default.map((images) => (
                <ContainerNews className="item" background={images.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
