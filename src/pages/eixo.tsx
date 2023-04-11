/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import "assets/css/eixo.css";
import ImagesEixos from "assets/img/eixos";
import { Eixo } from "components/Eixo";
import NavBar from "components/NavBar";
import { eixoData } from "../assets/data/eixo";
import { BiArrowToTop } from "react-icons/bi";

export function Eixos() {
  useEffect(()=>{
    scrollToTop();
  }, []);

  function scrollToTop(){
    window.scrollTo(0, 0);
  }
  return (
    <>
      <NavBar text="eixos"/>
      <button className="btnTopo" onClick={scrollToTop}><BiArrowToTop size={25} color="#fff"/></button>
      <div className="parallax">
        {eixoData.map((item) => {
          const image = ImagesEixos.filter((img) => img.sigle === item.url)[0];
          return (
            <div className="item paxItem" key={item.eixo} id={`${item.eixo}`}>
              <div className="title">
                <h2 className="color-secondary">{item.title}</h2>
                <h3 className="color-secondary">Eixo {item.eixo}</h3>
              </div>
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
