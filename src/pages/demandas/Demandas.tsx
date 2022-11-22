/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useState } from "react";
import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import { InputSearch } from "components/Inputs/Search";
import { SelectMenu } from "components/Select";
import MenuSuspenso from "components/Card/MenuSuspenso";
import ChipFilter from "components/Chips/chipFilters";
import { CardDemandas } from "components/Card/Demandas";
import { useDispatch, useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { IDemand } from "interfaces/data/demand.interface";
import { Link } from "react-router-dom";
import { LoadingDefault } from "components/Loading";
import { setCitySelected } from "app/reducers/city/citySlice";
import { setSelectAxes } from "app/reducers/axes/axesSlice";
import { isValid } from "util/function";
import {
  filterAxes,
  filterCity,
  filterSearch,
  mergeDemandFilter,
} from "app/reducers/demand/demandSlice";
import { AppDispatch } from "app/store";

export default function Demandas() {
  const dispatch = useDispatch<AppDispatch>();
  const { demands, city, axes } = useSelector((state: IStateData) => state);
  const [demand] = useReducer<any>(demands.demand, demands.demand);
  const [dataNew, setDataNew] = useState<any>();
  const [dataCheckbox, setCheckbox] = useState({
    a: "0",
    b: "0",
    c: "0",
  });
  useEffect(() => {
    if (
      (axes.axes_selector.includes("Tod") || axes.axes_selector.length === 0) &&
      (city.city_selector.length === 0 || city.city_selector.includes("Tod"))
    ) {
      console.log(axes.axes_selector, city.city_selector)
      setDataNew(demands.demand);
    } else if (
      dataCheckbox.a !== "0" ||
      dataCheckbox.b !== "0" ||
      dataCheckbox.c !== "0"
    ) {
      const data = dataNew.filter(
        (item: IDemand) =>
          item.status.toString() === dataCheckbox.a ||
          item.status.toString() === dataCheckbox.b ||
          (item.status.toString() === dataCheckbox.c && item),
      );
      setDataNew(data);
    } else if (axes.axes_selector || city.city_selector) {
      if (isValid(axes.axes_selector)) {
        dispatch(
          filterAxes({
            axes: axes.axes_selector,
            city: city.city_selector,
          }),
        );
      }
      if (isValid(city.city_selector)) {
        dispatch(
          filterCity({
            axes: axes.axes_selector,
            city: city.city_selector,
          }),
        );
      }
      dispatch(mergeDemandFilter());
    } else {
      setDataNew(demands.demand);
    }
  }, [
    axes.axes_selector,
    city.city_selector,
    demands.demand,
    dataCheckbox.a,
    dataCheckbox.b,
    dataCheckbox.c,
    filterSearch,
  ]);

  useEffect(() => {
    if (demands.demandFilter.search.length > 0) {
      dispatch(mergeDemandFilter());
    }
  }, [demands.demandFilter.search]);

  useEffect(() => {
    const data = demands.demandFilter.filtered.filter(
      (ele, index, self) => index === self.indexOf(ele),
    );
    setDataNew(data);
  }, [demands.demandFilter.filtered]);

  useEffect(() => {
    if (demand) {
      setDataNew(demand);
    }
  }, [demand]);
  return (
    <>
      <NavBar />
      <ContainerPage>
        <LoadingDefault
          active={demands.loading || axes.loading || city.loading}
        />
        <div className="container-banner-demandas">
          <div className="header" />
          <div className="data">
            <div className="left-demandas">
              <MenuSuspenso className="menu-suspenso-demandas">
                <>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por municipio</h1>
                    <SelectMenu
                      width="250px"
                      clicked
                      setSelected={setCitySelected}
                      options={[...city.city]}
                      background="rgba(0,0,0,0.1)"
                      color="black"
                      className="filterSelect"
                    />
                  </div>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por eixo</h1>
                    <SelectMenu
                      width="250px"
                      clicked
                      setSelected={setSelectAxes}
                      options={[...axes.axes]}
                      background="rgba(0,0,0,0.1)"
                      color="black"
                      className="filterSelect"
                    />
                  </div>
                  <div className="filters-demandas-modal">
                    <h1 className="title-h2">Pesquisa por status</h1>
                    <div className="search">
                      <span className="check">
                        <input
                          id="execution"
                          type="checkbox"
                          onChange={(e) =>
                            setCheckbox({
                              ...dataCheckbox,
                              a: e.target.checked ? "1" : "0",
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
                              ...dataCheckbox,
                              b: e.target.checked ? "2" : "0",
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
                              ...dataCheckbox,
                              c: e.target.checked ? "3" : "0",
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
                  setState={filterSearch}
                  size="76%"
                  borderRadius="4px"
                  color="white"
                  text="Pesquisar"
                  background="#1B4977"
                  height="55px"
                />
                <SelectMenu
                  width="170px"
                  options={[
                    {
                      name: "Recentes",
                      id: "recentes",
                    },
                  ]}
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
                {/* <ChipFilter
                  className="filter-header"
                  text="Propostas enviadas"
                />
                <ChipFilter className="filter-header" text="N° de envolvidos" /> */}
              </div>

              {dataNew && dataNew.length > 0 ? (
                <div className="cards-demandas">
                  {dataNew &&
                    dataNew.map((item: IDemand) => {
                      return (
                        <div className="demandaCardItem" key={item.id}>
                          <Link to={`/demanda/${item.name}`}>
                            <CardDemandas
                              key={item.id}
                              className="box-demanda"
                              color={
                                item.status.toString() === "1"
                                  ? "#EFBA8B"
                                  : "#EF8B8B"
                              }
                              // "Turismo integrado no te..."
                              title={item.name}
                              // "Eixo - Negócios e renda"
                              subtitle={item.Axes.name}
                              date="24 Jan 2023"
                            />
                          </Link>
                        </div>
                      );
                    })}
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
