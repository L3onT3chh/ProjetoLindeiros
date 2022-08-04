/* eslint-disable react/button-has-type */
import { logoIcon } from "assets/icons";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Cities, Eixos, Status } from "../../assets/data/filters";
import { CardDemandas } from "../../components/Card/Demandas";
import { FiltersApplied } from "../../components/Filters";
import { InputSearch } from "../../components/Inputs/Search";
import SublinedText from "../../components/Label/Sublined";
import NavBar from "../../components/NavBar";
import { SelectMenu } from "../../components/Select";
import { ContainerPage } from "../styled";

export default function Demandas() {
  const [filterBtn, setFilterBt] = useState(false);

  return (
    <>
      <NavBar />
      <ContainerPage active={filterBtn}>
        <div className="header-search">
          <InputSearch
            text="Digite a sua pesquisa"
            background="rgba(0, 0, 0, 0)"
          />
          <SelectMenu
            background="rgba(0, 0, 0, 0.33)"
            options={["Mais recentes", "Menos recentes"]}
          />
        </div>
        <div className="container-demandas">
          <div className="content-demandas">
            <div className="left">
              <button
                className="button-filter-responsive"
                onClick={() => setFilterBt(!filterBtn)}
              >
                <AiOutlineMenu className="icon-responsive" size={14} />
              </button>

              <div className="content-filter-div">
                <FiltersApplied
                  colorBackground="#183B5E"
                  colorTitle="white"
                  colorFont="white"
                  cities={Cities}
                  eixos={Eixos}
                  status={Status}
                />
              </div>
            </div>
            <div className="right">
              <SublinedText
                title="Demandas encontradas"
                className="sublined-text-demandas"
              />
              <div className="right-content">
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
                <CardDemandas
                  date_create="Criado em 12/2021"
                  name="Desenvolvimento 1"
                  photo={logoIcon}
                  status="Encerrado"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat."
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerPage>
    </>
  );
}
