import React, { useEffect } from "react";
import Banner from "assets/img/banner";
import ImageEixos from "assets/icons/eixos";
import { splitTitle } from "util/function";
import NavBar from "components/NavBar";
import DoubtedCard from "components/Card/Doubt";
import CarrouselComp from "../components/Carrousel";
import { ContainerPage } from "./css/styled";
import CardDemandas from "../components/Card/BannerDemanda";
import { logoIcon } from "../assets/icons";
import CardAxes from "../components/Card/Axes";
import CardNews from "../components/Card/News";
import OtherNews from "../components/Card/OtherNews";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import cityOther from "../assets/img/city_retangle.png";
import SponsorList from "../components/Carrousel/Sponsor";
import { ListComponent } from "components/ListComponent";
import { AboutUs } from "components/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { AppDispatch } from "app/store";
import { fetchDemandsThunk } from "app/reducers";

const TITLE =
  "Conselho dos Lindeiros solidifica parcerias para projetos estruturantes na região";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { demands } = useSelector((state: IStateData) => state);
  const { news } = useSelector((state: IStateData) => state);

  useEffect(()=>{
    if(demands.demand.length === 0){
      dispatch(fetchDemandsThunk());
    }
  }, []);
  return (
    <>
      <ContainerPage>
        <NavBar text="home" />
        <div style={{ height: "65vh", position: "relative" }}>
          <CarrouselComp
            title=""
            image={[...Banner]}
            description="dsadadjasdja"
          />
          <div style={{ position: "absolute", top: "0", width: "100%", height: "100%", backgroundImage: "linear-gradient(120deg,#061a2a 0%,#1b4977 100%)", opacity: "0.85" }}></div>
        </div>
        <div className="limiter">
          {demands && (
            <ListComponent title="Ultimas demandas" link="/demandas" objDemand={demands.demand.slice(0, 3)} />
          )
          }
          {news && (
            <ListComponent title="Ultimas noticias" link="/noticias" objNews={news.news.slice(0, 3)} />
          )
          }
        </div>
        <AboutUs />
        <div className="sponsor-content">
          <SponsorList />
        </div>

        {/* <div className="content-about content-body">
          <h1 className="title-h1">
            Conheça o <span className="subtitle">programa de governança</span>
          </h1>

          <div className="description-about">
            <div className="logo-about">
              <img src={logoIcon} alt="logo-about" />
            </div>

            <p className="description">
              O programa de governança, inovação e inteligência para
              desenvolvimento dos arranjos produtivos nos municípios lindeiros
              ao lago de Itaipu, tem por objetivo principal de transformar
              território de forma a contemplar as estruturas, ações e projetos
              em desenvolvimento, integrar as instituições com interesses comuns
              e coletivos e convergir com inteligência os esforços e recursos
              para atender efetivamente as demandas contemporâneas e as
              tendências disruptivas.
            </p>
          </div>
        </div>

        <div className="eixo-programmer content-body">
          <h1 className="title-h1">
            Eixos do <span className="subtitle">programa de governança</span>
          </h1>

          <div className="eixos-programmer">
            <CardAxes
              className="card-eixo-home"
              description="Implantar governança integrada e inteligente para transformar a região oeste do Paraná e aproveitar os recursos de forma eficiente."
              logo={{ src: ImageEixos.inteligent, alt: "" }}
              title="Governança inteligente"
            />
            <CardAxes
              className="card-eixo-home"
              description="Promover a sustentabilidade efetiva para o desenvolvimento com ações coordenadas visando maior equilíbrio entre as dimensões sociais, econômicas e ambientais."
              logo={{ src: ImageEixos.sustentability, alt: "" }}
              title="Sustentabilidade"
            />
            <CardAxes
              className="card-eixo-home"
              description="O objetivo é aumentar emprego e renda por meio da ampliação de negócios e atração de investimentos com ajuda da Invest Paraná."
              logo={{ src: ImageEixos.money, alt: "" }}
              title="Negócios e renda"
            />
            <CardAxes
              description="Diagnosticar a situação da saúde pública e qualidade de vida da população do oeste do Paraná para proposição de ações e políticas públicas."
              className="card-eixo-home"
              logo={{ src: ImageEixos.saude, alt: "" }}
              title="Saúde"
            />
            <CardAxes
              className="card-eixo-home"
              description="Desenvolver ações visando a qualidade de vida, uso equilibrado e racional dos recursos naturais, e, viabilidade econômica da agricultura familiar."
              logo={{ src: ImageEixos.family, alt: "" }}
              title="Agricultura Familiar"
            />
            <CardAxes
              className="card-eixo-home"
              description="Desenvolver ações para garantir a segurança e a competitividade da cadeia produtiva de proteínas animais e vegetal."
              logo={{ src: ImageEixos.security, alt: "" }}
              title="Segurança"
            />
          </div>
          <ButtonDefault value="Veja todos os eixos" icon="" router="eixos" />
        </div>

        <div className="news-container content-body">
          <h1 className="title-h1">
            Fique por dentro do{" "}
            <span className="subtitle">programa de governança</span>
          </h1>

          <div className="news-content">
            <CardNews title={TITLE} datePublished="25 jan de 2022" />

            <div className="others-news">
              <OtherNews
                title={splitTitle(TITLE)}
                date="25 jan de 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
                logo={{ src: cityOther, alt: "Imagem cidade" }}
              />
              <OtherNews
                title={splitTitle(TITLE)}
                date="25 jan de 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
                logo={{ src: cityOther, alt: "Imagem cidade" }}
              />
              <OtherNews
                title={splitTitle(TITLE)}
                date="25 jan de 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
                logo={{ src: cityOther, alt: "Imagem cidade" }}
              />
            </div>
          </div>
          <ButtonDefault value="Ver mais" icon="" router="noticias" />
        </div>

        <CardDemandas />

        <div className="sponsor-content">
          <h1 className="title-h1">
            Nossos <span className="subtitle">parceiros</span>
          </h1>

          <SponsorList />
        </div>

        <DoubtedCard /> */}
      </ContainerPage>
    </>
  );
}

export default Home;
