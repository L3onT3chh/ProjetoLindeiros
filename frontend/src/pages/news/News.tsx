/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import ButtonCard from "components/Buttons/ButtonCard";
import NavBar from "components/NavBar";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/index.css";
// Styles
import "../../assets/css/noticias.css";
// Images
import * as ImagesEixos from "../../assets/img/eixos";
// Components
import { ContainerBackground } from "../css/styled";

// Refazer com styled component
export function News() {
  return (
    <>
      <NavBar />
      <div className="noticias">
        <div className="top">
          <div className="container">
            <div
              className="header_btn"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            />
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
        <ButtonCard value="Adicionar Noticias" router="addNews/" />
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
                  <ContainerBackground
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
                  <ContainerBackground
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
                  <ContainerBackground
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
                  <ContainerBackground
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
      </div>
    </>
  );
}
