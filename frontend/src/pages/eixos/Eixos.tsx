import "@";
import "assets/css/eixo.css";
import { eixo } from "assets/data/eixo";
import ImagesEixos from "assets/img/eixos";
import { Eixo } from "components/eixo";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React from "react";

export const Eixos = () => {
  return (
    <>
      <Header />
      <div className="parallax">
        {eixo.map((item) => {
          const image = ImagesEixos.filter((img) => img.sigle === item.url)[0];
          return (
            <div className="item paxItem" key={item.eixo} id={`${item.eixo}`}>
              <div className="title">
                <div className="icon">
                  <i className="fas fa-hotel color-secondary" />
                </div>
                <h2 className="color-secondary">{item.title}</h2>
                <h3 className="color-secondary">Eixo {item.eixo}</h3>
              </div>
              <div className="cover" />
              <Eixo
                link={image.image}
                text={item.fullText}
                key={item.eixo}
              ></Eixo>
            </div>
          );
        })}
      </div>
      <button className="btnTopo bgcolor-secondary">
        <i className="fas fa-arrow-up" />
      </button>
      <Footer />
    </>
  );
};
