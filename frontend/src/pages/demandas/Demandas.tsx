/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import NavBar from "components/NavBar";
import { ContainerPage } from "pages/styled";
import { InputSearch } from "components/Inputs/Search";
import { SelectMenu } from "components/Select";
import MenuSuspenso from "components/Card/MenuSuspenso";
import ChipFilter from "components/Chips/chipFilters";
import { CardDemandas } from "components/Card/Demandas";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { IDemand } from "interfaces/data/demand.interface";
import { Link } from "react-router-dom";
import { Cities, Eixos } from "assets/data/filters";

export default function Demandas() {
  const data = useSelector((state: IStateData) => state);
  const [dataNew, setDataNew] = useState(data.demands.demand);
  const [dataVerify, setDataVerify] = useState(false);
  const [dataFilterEixos, setDataFilterEixos] = useState("");
  const [dataFilterCity, setDataFilterCity] = useState("");
  const [searchDemand, setSearchDemanda] = useState("");
  const [dataCheckbox, setCheckbox] = useState({
    a: 0,
    b: 0,
    c: 0,
  });

  const handleComparationString = (text: string, textTwo: string) => {
    return text.toLowerCase().trim() === textTwo.toLowerCase().trim();
  };

  useEffect(() => {
    if (searchDemand) {
      setDataNew(
        data.demands.demand.filter((item) => item.name.includes(searchDemand)),
      );
    } else {
      setDataNew([...data.demands.demand]);
    }
  }, [searchDemand, data.demands.demand]);

  useEffect(() => {
    if (dataFilterCity.trim() !== "Todas") {
      setDataNew(
        data.demands.demand.filter(
          (item) =>
            handleComparationString(item.Cities.name, dataFilterCity) && item,
        ),
      );
    } else {
      setDataNew([...data.demands.demand]);
    }
  }, [dataFilterCity]);

  useEffect(() => {
    if (dataFilterEixos.trim() !== "Todos") {
      setDataNew(
        data.demands.demand.filter(
          (item) =>
            handleComparationString(item.Axes.name, dataFilterEixos) && item,
        ),
      );
    } else {
      setDataNew([...data.demands.demand]);
    }
  }, [dataFilterEixos]);
  useEffect(() => {
    setDataVerify(data.demands.demand !== undefined);
  }, [data.demands.demand]);
  return (
    <>
      <NavBar />
      <ContainerPage>
        <div className="container-banner-demandas">
          <div className="header" />
          <div className="data">
            <div className="left-demandas">
              <MenuSuspenso className="menu-suspenso-demandas">
                <>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por municipio</h1>
                    <SelectMenu
                      setSelected={setDataFilterCity}
                      options={Cities}
                      background="rgba(0,0,0,0)"
                      color="black"
                    />
                  </div>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por eixo</h1>
                    <SelectMenu
                      setSelected={setDataFilterEixos}
                      options={Eixos}
                      background="rgba(0,0,0,0)"
                      color="black"
                    />
                  </div>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por eixo</h1>
                    <div className="search">
                      <span className="check">
                        <input
                          id="execution"
                          type="checkbox"
                          onChange={(e) =>
                            setCheckbox({
                              a: e.target.checked ? 1 : 0,
                              b: dataCheckbox.b,
                              c: dataCheckbox.c,
                            })
                          }
                        />
                        <label htmlFor="execution">Em execução</label>
                      </span>
                      <span className="check">
                        <input
                          id="close"
                          type="checkbox"
                          onChange={(e) =>
                            setCheckbox({
                              a: dataCheckbox.a,
                              b: e.target.checked ? 2 : 0,
                              c: dataCheckbox.c,
                            })
                          }
                        />
                        <label htmlFor="close">Encerrados</label>
                      </span>
                      <span className="check">
                        <input
                          id="send"
                          type="checkbox"
                          onChange={(e) =>
                            setCheckbox({
                              a: dataCheckbox.a,
                              b: dataCheckbox.b,
                              c: e.target.checked ? 3 : 0,
                            })
                          }
                        />
                        <label htmlFor="send">Recebendo Propostas</label>
                      </span>
                    </div>
                  </div>
                </>
              </MenuSuspenso>
            </div>
            <div className="right-demandas">
              <div className="search-demandas">
                <InputSearch
                  setState={setSearchDemanda}
                  size="76%"
                  borderRadius="4px"
                  color="white"
                  text="Pesquisar"
                  background="#1B4977"
                  height="55px"
                />
                <SelectMenu
                  width="170px"
                  options={["Recentes"]}
                  background="#1B4977"
                />
              </div>
              <div className="filters-demandas">
                <ChipFilter
                  className="filter-header"
                  text="Em execução"
                  color="#EFBA8B"
                />
                <ChipFilter
                  className="filter-header"
                  text="Finalizado"
                  color="#EF8B8B"
                />
                <ChipFilter
                  className="filter-header"
                  text="Recentes"
                  color="#8BEFBF"
                />
                <ChipFilter
                  className="filter-header"
                  text="Propostas enviadas"
                />
                <ChipFilter className="filter-header" text="N° de envolvidos" />
              </div>

              {dataVerify ? (
                <div className="cards-demandas">
                  {dataNew &&
                    dataNew.map((item: IDemand) => (
                      <Link to={`/demanda/${item.name}`}>
                        <CardDemandas
                          className="box-demanda"
                          color=" #EFBA8B"
                          // "Turismo integrado no te..."
                          title={item.name}
                          // "Eixo - Negócios e renda"
                          subtitle={item.Axes.name}
                          date="24 Jan 2023"
                        />
                      </Link>
                    ))}
                </div>
              ) : (
                <div className="notFound">Nenhum dado cadastrado</div>
              )}
            </div>
          </div>
        </div>
      </ContainerPage>
    </>
  );
}
