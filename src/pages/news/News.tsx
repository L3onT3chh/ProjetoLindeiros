/* eslint-disable react-hooks/exhaustive-deps */
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { AutenticateCard } from "components/AutenticateAdd";
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
import { dataFormat } from "util/dateFormater";
import { convertToArray } from "util/handleSelectorObj";
import { apiUrl } from "config";

interface INewsUseState {
  mainNews: INewsPost[];
  newsRemaining: INewsPost[];
}

export function News() {
  const [openPNews, setPNews] = useState(false);
  const user = useSelector(selectUserLogged);
  const { news } = useSelector((state: IStateData) => state.news);
  const [newsData, setNews] = useState<INewsUseState>();
  const [newsRamdom, setNewsRamdom] = useState<INewsPost[]>();
  const [sendNews, setSendNews] = useState(false);

  // Refazer com styled component

  useEffect(() => {
    setNews({
      mainNews: news.slice(0, 4),
      newsRemaining: news.slice(4, news.length),
    });
    console.log(newsData);
  }, [news]);

  useEffect(() => {
    if (newsData && newsData.newsRemaining) {
      let allNews = newsData.newsRemaining;
      let temp = [];
      let usedIndex: any = [];

      for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * allNews.length);

        if (allNews.length > i && !usedIndex.includes(randomIndex)) {
          temp.push(allNews[randomIndex]);
        }
      }

      setNewsRamdom(temp);
    }
  }, [newsData])

  return (
    <>
      <NavBar text="noticia" />
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
            <AutenticateCard isPublic={false} setState={setPNews} title="Adicionar" text="Clique no botão a direita para realizar o envio de uma nova notícia">
              <PDefault
                height="90%"
                width="517"
                title="Cadastro de noticias"
                subtitle="Preencha todos os campos marcados *"
                setTrigger={setPNews}
                trigger={openPNews}
                setPrimaryState={setSendNews}
                primaryValue={sendNews}
                primaryBlocked={sendNews}
              >
                <RegisterNews primaryValue={sendNews} setPrimary={setSendNews} setState={setPNews} />
              </PDefault>
            </AutenticateCard>
            <div className="itens" style={{ marginTop: (user) ? "20px" : "0" }}>
              {newsData && newsData.mainNews.map((item, i) => (
                <Link
                  to={item.title_url}
                  className="item"
                  style={{
                    backgroundImage: (item.Photos) ? `url(${apiUrl + "/" + convertToArray(item.Photos)[0].path + convertToArray(item.Photos)[0].name})` : `url(${ImagesEixos.default[i].image})`,
                  }}
                >
                  <p>{dataFormat(item.createdAt)}</p>
                  <h1>
                    {item.title}
                  </h1>
                </Link>
              ))
              }
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
                {newsData && newsData.newsRemaining.map((item, i) => (
                  <Link
                    to={item.title_url}
                    className="item"
                    style={{
                      backgroundImage: (item.Photos) ? `url(${apiUrl + "/" + convertToArray(item.Photos)[0].path + convertToArray(item.Photos)[0].name})` : `url(${ImagesEixos.default[i].image})`,
                    }}
                  >
                    <h1>{item.title.substring(0, 15)}...</h1>
                    <p className="text">
                      <i className="fas fa-quote-left" />
                      {item.title}
                    </p>
                  </Link>
                ))
                }
              </div>
            </div>
            <aside className="others">
              <h1 className="title border-left-secondary color-secondary">
                Todas noticías
              </h1>
              <div className="block">
                {news && news.map((item) => (
                  <Link to={item.title_url} className="item" key={item.title}>
                    <ContainerBackground
                      background={(item.Photos) ? apiUrl + "/" + convertToArray(item.Photos)[0].path + convertToArray(item.Photos)[0].name : ImagesEixos.default[7].image}
                      className="img"
                    />
                    <div className="info">
                      <p>{dataFormat(item.createdAt)}</p>
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
