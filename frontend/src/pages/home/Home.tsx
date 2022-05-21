import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImagensCities from "assets/banner/Banner Imagens";
// Style
import "assets/css/global.css";
import Demandas from "assets/data/demandas";
// Assets
import { eixo as Eixos } from "assets/data/eixo";
import { idea, logo } from "assets/img";
// Images
import * as Images from "assets/img/contributors";
import { Card } from "components/card";
// Components
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { IDemandas } from "interfaces/IDemandas";
import { ContainerHome } from "./style";

export const Home: React.FC = () => {
  const [filterDemandas, setFilterDemandas] = useState<any>([]);

  useEffect(() => {
    Demandas.map((item) =>
      item ? setFilterDemandas([...filterDemandas, item]) : ""
    );
  }, []);
  return (
    <>
      <Header />
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              key=" "
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            {ImagensCities.map((item, index) =>
              index === 0 ? (
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{ width: "100%" }}
                    src={item}
                    alt="First slide"
                  />
                </div>
              ) : (
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{ width: "100%" }}
                    src={item}
                    alt="First slide"
                  />
                </div>
              )
            )}
          </div>
          <a
            className="carousel-control-prev style-button-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next style-button-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon " aria-hidden="true" />
          </a>
        </div>

        <ContainerHome
          className="contributors"
          background="url(assets/img/Rectangle.png)"
        >
          <div className="imgs">
            <ContainerHome background={Images.image2}></ContainerHome>
            <ContainerHome background={Images.image3}></ContainerHome>
            <ContainerHome background={Images.image4}></ContainerHome>
            <ContainerHome background={Images.image5}></ContainerHome>
            <ContainerHome background={Images.image6}></ContainerHome>
            <ContainerHome background={Images.image7}></ContainerHome>
            <ContainerHome background={Images.image8}></ContainerHome>
            <ContainerHome background={Images.image9}></ContainerHome>
          </div>
        </ContainerHome>
      </div>
      <div className="recentPaper">
        <h1 className="color-secondary">Eixos estruturantes</h1>
        <div className="inner">
          {Eixos.map((item) => (
            <Card
              key={item.eixo}
              eixo={item.eixo}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="description">
        <div className="left">
          <h1 className="border-left-secondary color-secondary">Objetivos</h1>
          <p>
            O programa de governança, inovação e inteligência para
            desenvolvimento dos arranjos produtivos nos municípios lindeiros ao
            lago de Itaipu, tem por objetivo principal de transformar território
            de forma a contemplar as estruturas, ações e projetos em
            desenvolvimento, integrar as instituições com interesses comuns e
            coletivos e convergir com inteligência os esforços e recursos para
            atender efetivamente as demandas contemporâneas e as tendências
            disruptivas.
          </p>
          <ContainerHome className="img" background={idea} />
        </div>
        <div className="right">
          <div className="top">
            <h1 className="color-secondary">Ultimas demandas</h1>
            <Link to="demandas">
              <button className="btn bgcolor-secondary">Ver todas</button>
            </Link>
          </div>
          <div className="demandas">
            {filterDemandas
              ? filterDemandas.map((item: IDemandas) => (
                  <div key={item.id} className="item">
                    <ContainerHome
                      className="img"
                      background={logo}
                      key={item.id}
                    />
                    <div className="info">
                      <h2 className="color-secondary">{item.name}</h2>
                      <p>Município: {item.budget?.cityApplied}</p>
                      <p>Categoria: {item.budget?.area[0]}, ...</p>
                    </div>
                  </div>
                ))
              : "Sem últimas demandas"}
          </div>
        </div>
      </div>
      <div className="newsletter bgcolor-secondary">
        <div className="left">
          <h1>Possui alguma duvida?</h1>
          <p>Envie suas dúvidas ou sugestões no formulário ao lado.</p>
        </div>
        <div className="right">
          <div className="block">
            <input type="text" placeholder="Seu email" />
          </div>
          <div className="block" style={{ position: "relative" }}>
            <textarea placeholder="escreva uma mensagem"></textarea>
            <button className="btnEnviar bgcolor-secondary">
              <i className="fas fa-paper-plane" style={{ color: "#fff" }}></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
