import React from "react";
import CarrouselComp from "../components/Carrousel";
import { ContainerPage } from "./styled";
import imagem from "../assets/img/imagem.jpg";
import imagem2 from "../assets/img/imagem2.jpg";
import CardDemandas from "../components/Card/BannerDemanda";
import { logoIcon } from "../assets/icons";
import CardAxes from "../components/Card/Axes";
import CardNews from "../components/Card/News";
import OtherNews from "../components/Card/OtherNews";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import cityOther from "../assets/img/city_retangle.png";
import SponsorList from "../components/Carrousel/Sponsor";
import DoubtedCard from "../components/Card/Doubt";
import Footer from "../components/Footer";

function Home() {
  return (
    <ContainerPage>
      <CarrouselComp
        title=""
        image={[imagem, imagem2]}
        description="dsadadjasdja"
      />

      <div className="content-about content-body">
        <h1 className="title-h1">
          Conheça o <span className="subtitle">programa de governança</span>
        </h1>

        <div className="description-about">
          <div className="logo-about">
            <img src={logoIcon} alt="logo-about" />
          </div>

          <p className="description">
            O programa de governança, inovação e inteligência para
            desenvolvimento dos arranjos produtivos nos municípios lindeiros ao
            lago de Itaipu, tem por objetivo principal de transformar território
            de forma a contemplar as estruturas, ações e projetos em
            desenvolvimento, integrar as instituições com interesses comuns e
            coletivos e convergir com inteligência os esforços e recursos para
            atender efetivamente as demandas contemporâneas e as tendências
            disruptivas.
          </p>
        </div>
      </div>

      <div className="eixo-programmer content-body">
        <h1 className="title-h1">
          Eixos do <span className="subtitle">programa de governança</span>
        </h1>

        <div className="eixos-programmer">
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
          <CardAxes
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
            logo={{ src: "", alt: "" }}
            title="Governança inteligente"
          />
        </div>
        <ButtonDefault value="Veja todos os 11 eixos" icon="" />
      </div>

      <div className="news-container content-body">
        <h1 className="title-h1">
          Fique por dentro do{" "}
          <span className="subtitle">programa de governança</span>
        </h1>

        <div className="news-content">
          <CardNews
            title="Conselho dos Lindeiros solidifica parcerias para projetos estruturantes na região"
            datePublished="25 jan de 2022"
          />

          <div className="others-news">
            <OtherNews
              date="25 jan de 2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
              logo={{ src: cityOther, alt: "Imagem cidade" }}
            />
            <OtherNews
              date="25 jan de 2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
              logo={{ src: cityOther, alt: "Imagem cidade" }}
            />
            <OtherNews
              date="25 jan de 2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis augue velit. Sed eget luctus velit."
              logo={{ src: cityOther, alt: "Imagem cidade" }}
            />
          </div>
        </div>
        <ButtonDefault value="Ver mais" icon="" />
      </div>

      <CardDemandas />

      <div className="sponsor-content">
        <h1 className="title-h1">
          Nossos <span className="subtitle">parceiros</span>
        </h1>

        <SponsorList />
      </div>

      <DoubtedCard />

      <Footer />
    </ContainerPage>
  );
}

export default Home;
