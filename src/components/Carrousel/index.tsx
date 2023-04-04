import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { Banner } from "./style";
import banner from "assets/img/banner.png";
import { Link } from "react-router-dom";
import { logoIcon } from "assets/icons";

function CarrouselComp({ image }: IPropsGlobal) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Banner
      style={{ maxWidth: "100vw", height: "65vh" }}
    >
      <div className="img d-block w-100" style={{ backgroundImage: `url(${banner})`}}>
        <div className="content">
          <img src={logoIcon} alt="logo-about" width={300} style={{marginBottom: "40px"}}/>
          <h1>Bem vindo ao programa de governança</h1>
          <p>Acompanhe as demandas da região oeste do paraná clicando no botão abaixo</p>
          <Link to="/demandas"><button className="btn">Ver demandas</button></Link>
        </div>
      </div>
    </Banner>
  );
}

export default CarrouselComp;
