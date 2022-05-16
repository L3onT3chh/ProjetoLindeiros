import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/index.css";
// Styles
import "../../assets/css/noticias.css";
//Images
import * as ImagesEixos from "../../assets/img/eixos";
import Footer from "../../components/footer/Footer";
// Components
import Header from "../../components/header/Header";
import { Container } from "./styles";

export const News = () => {
  return (
    <>
      <Header />
      <div className="noticias">
        <div className="top">
          <div className="container">
            <div
              className="header_btn"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                marginBottom: '10px'
              }}
            >
              <h1 className="title border-left-secondary color-secondary">
                Noticías recentes
              </h1>
              {localStorage.getItem("token_jwt")?.toString() !== "" ? (
                <button className="btn color-secondary border-secondary btn-docs">
                  Adicionar documento
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="itens">
              <Link
                to="itemNews"
                className="item"
                style={{
                  backgroundImage: `url(${ImagesEixos.default[1].image})`,
                }}
              >
                <p>25 de jan, 2022</p>
                <h1>
                  Conselho dos Lindeiros solidifica parcerias para projetos
                  estruturantes na região
                </h1>
              </Link>
              <Link
                to="itemNews"
                className="item"
                style={{
                  backgroundImage: `url(${ImagesEixos.default[0].image})`,
                }}
              >
                <p>25 de jan, 2022</p>
                <h1>
                  Conselho dos Lindeiros solidifica parcerias para projetos
                  estruturantes na região
                </h1>
              </Link>
              <Link
                to="itemNews"
                className="item"
                style={{
                  backgroundImage: `url(${ImagesEixos.default[2].image})`,
                }}
              >
                <p>25 de jan, 2022</p>
                <h1>
                  Conselho dos Lindeiros solidifica parcerias para projetos
                  estruturantes na região
                </h1>
              </Link>
              <Link
                to="itemNews"
                className="item"
                style={{
                  backgroundImage: `url(${ImagesEixos.default[3].image})`,
                }}
              >
                <p>25 de jan, 2022</p>
                <h1>
                  Conselho dos Lindeiros solidifica parcerias para projetos
                  estruturantes na região
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="container">
            <div className="main">
              <h1 className="title border-left-secondary color-secondary">
                Noticías do momento
              </h1>
              <div className="itens" style={{ marginBottom: "3%" }}>
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[4].image})`,
                  }}
                >
                  <p>25 de jan, 2022</p>
                  <h1>
                    Conselho dos Lindeiros solidifica parcerias para projetos
                    estruturantes na região
                  </h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque, provident blanditiis! Architecto fuga repudiandae.
                  </p>
                </Link>
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[5].image})`,
                  }}
                >
                  <p>25 de jan, 2022</p>
                  <h1>
                    Conselho dos Lindeiros solidifica parcerias para projetos
                    estruturantes na região
                  </h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque, provident blanditiis! Architecto fuga repudiandae.
                  </p>
                </Link>
              </div>
              <div className="itens">
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[8].image})`,
                  }}
                >
                  <p>25 de jan, 2022</p>
                  <h1>
                    Conselho dos Lindeiros solidifica parcerias para projetos
                    estruturantes na região
                  </h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque, provident blanditiis! Architecto fuga repudiandae.
                  </p>
                </Link>
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[9].image})`,
                  }}
                >
                  <p>25 de jan, 2022</p>
                  <h1>
                    Conselho dos Lindeiros solidifica parcerias para projetos
                    estruturantes na região
                  </h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque, provident blanditiis! Architecto fuga repudiandae.
                  </p>
                </Link>
              </div>
            </div>
            <aside className="others">
              <h1 className="title border-left-secondary color-secondary">
                Mais noticías
              </h1>
              <div className="block">
                <Link to="itemNews" className="item">
                  <Container
                    background={ImagesEixos.default[4].image}
                    className="img"
                  />

                  <div className="info">
                    <p>25 de jan, 2022</p>
                    <h1>
                      Conselho dos Lindeiros solidifica parcerias para projetos
                      estruturantes na região
                    </h1>
                  </div>
                </Link>
                <Link to="itemNews" className="item">
                  <Container
                    background={ImagesEixos.default[5].image}
                    className="img"
                  />
                  <div className="info">
                    <p>25 de jan, 2022</p>
                    <h1>
                      Conselho dos Lindeiros solidifica parcerias para projetos
                      estruturantes na região
                    </h1>
                  </div>
                </Link>
                <Link to="itemNews" className="item">
                  <Container
                    background={ImagesEixos.default[6].image}
                    className="img"
                  />
                  <div className="info">
                    <p>25 de jan, 2022</p>
                    <h1>
                      Conselho dos Lindeiros solidifica parcerias para projetos
                      estruturantes na região
                    </h1>
                  </div>
                </Link>
                <Link to="itemNews" className="item">
                  <Container
                    background={ImagesEixos.default[7].image}
                    className="img"
                  />
                  <div className="info">
                    <p>25 de jan, 2022</p>
                    <h1>
                      Conselho dos Lindeiros solidifica parcerias para projetos
                      estruturantes na região
                    </h1>
                  </div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
