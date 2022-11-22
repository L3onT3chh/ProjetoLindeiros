/* eslint-disable react-hooks/exhaustive-deps */
import { selectUserLogged } from "app/reducers/auth/authSlice";
import ButtonCard from "components/Buttons/ButtonCard";
import NavBar from "components/NavBar";
import PDefault from "components/Popups";
import RegisterNews from "components/Popups/subContent/registerNews";
import { IStateData } from "interfaces/components.interface";
import { INewsPost } from "interfaces/data/news.interface";
// import INews from "interfaces/data/news.interface";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/css/index.css";
// Styles
import "../../assets/css/noticias.css";
// Images
import * as ImagesEixos from "../../assets/img/eixos";
// Components
import { ContainerBackground } from "../css/styled";

interface INewsUseState {
  mainNews: INewsPost[];
  newsRemaining: INewsPost[];
}

export function News() {
  const [openPNews, setPNews] = useState(false);
  const user = useSelector(selectUserLogged);
  const { news } = useSelector((state: IStateData) => state.news);
  const [newsData, setNews] = useState<INewsUseState>({
    mainNews: news.slice(0, 4),
    newsRemaining: news.slice(5, news.length),
  });
  // Refazer com styled component

  useEffect(() => {
    setNews({
      mainNews: news.slice(0, 4),
      newsRemaining: news.slice(5, news.length),
    });
  }, [news]);

  return (
    <>
      <NavBar />
      <div className="noticias">
        <PDefault
          height="470"
          width="517"
          title="Cadastro de noticias"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setPNews}
          trigger={openPNews}
        >
          <RegisterNews setState={setPNews} />
        </PDefault>
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
        {user?.userType === "Administrador" && (
          <ButtonCard
            router="/noticias"
            state={openPNews}
            setState={setPNews}
            value="Adicionar Noticia"
          />
        )}
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
                  <h1>{newsData.mainNews[0].title.substring(0, 15)}...</h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    {newsData.mainNews[0].body}
                  </p>
                </Link>
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[4].image})`,
                  }}
                >
                  <h1>{newsData.mainNews[1].title.substring(0, 15)}...</h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    {newsData.mainNews[1].body}
                  </p>
                </Link>
              </div>
              <div className="itens">
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[4].image})`,
                  }}
                >
                  <h1>{newsData.mainNews[2].title}</h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    {newsData.mainNews[2].body}
                  </p>
                </Link>
                <Link
                  to="itemNews"
                  className="item"
                  style={{
                    backgroundImage: `url(${ImagesEixos.default[4].image})`,
                  }}
                >
                  <h1>{newsData.mainNews[3].title}</h1>
                  <p className="text">
                    <i className="fas fa-quote-left" />
                    {newsData.mainNews[3].body}
                  </p>
                </Link>
              </div>
            </div>
            <aside className="others">
              <h1 className="title border-left-secondary color-secondary">
                Mais noticías
              </h1>
              <div className="block">
                {newsData.newsRemaining.map((item) => (
                  <Link to="itemNews" className="item" key={item.title}>
                    <ContainerBackground
                      background={ImagesEixos.default[7].image}
                      className="img"
                    />
                    <div className="info">
                      {/* <p>25 de jan, 2022</p> */}
                      <h1>{item.title}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
