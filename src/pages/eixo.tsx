/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React from "react";
import "assets/css/eixo.css";
import ImagesEixos from "assets/img/eixos";
import { Eixo } from "components/Eixo";
import NavBar from "components/NavBar";
import { eixoData } from "../assets/data/eixo";

export function Eixos() {
  return (
    <>
      <NavBar />
      <div className="parallax">
        {eixoData.map((item) => {
          const image = ImagesEixos.filter((img) => img.sigle === item.url)[0];
          return (
            <div className="item paxItem" key={item.eixo} id={`${item.eixo}`}>
              <div className="title">
                <h2 className="color-secondary">{item.title}</h2>
                <h3 className="color-secondary">Eixo {item.eixo}</h3>
              </div>
              {/* <div className="cover" /> */}
              <Eixo
                link={image.image}
                text={item.fullText}
                key={item.eixo.toString()}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
