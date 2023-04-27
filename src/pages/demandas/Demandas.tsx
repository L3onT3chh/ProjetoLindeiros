import React, { useEffect, useReducer, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

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
  cleanItem,
  filterAll,
  filterAxes,
  filterCity,
  filterSearch,
  mergeDemandFilter,
} from "app/reducers/demand/demandSlice";
import { AppDispatch } from "app/store";
import { selectCurentUser } from "app/reducers/auth/authSlice";
import { MdPlaylistAddCheck } from "react-icons/md";
import PDefault from "components/Popups";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import { GetMonth } from "util/getMonth";
import { fetchDemandsThunk } from "app/reducers/demand/thunk";
import { AutenticateCard } from "components/AutenticateAdd";

export default function Demandas() {
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);
  const [user, logged] = useSelector(selectCurentUser);
  const dispatch = useDispatch<AppDispatch>();
  const [filterState, setFilterState] = useState(false);
  const [sendDemand, setSendDemand] = useState(false);
  const { demands, city, axes } = useSelector((state: IStateData) => state);
  const { demand } = useSelector((state: IStateData) => state.demands);

  const [searchSelector, setSearchSelector] = useState<string>();
  const [axesSelector, setAxesSelector] = useState<string>();
  const [citySelector, setCitySelector] = useState<string>();
  const [stateSelector, setStateSelector] = useState<string>();

  useEffect(() => {
    dispatch(cleanItem());
    dispatch(fetchDemandsThunk());
  }, [dispatch])

  useEffect(() => {
    let axesTemp = axesSelector ?? "none";
    let cityTemp = citySelector ?? "none";
    let searchTemp = searchSelector ?? "";
    let stateTemp = stateSelector ?? "";

    dispatch(filterAll({ "citySelector": cityTemp, "axesSelector": axesTemp, "searchSelector": searchTemp, "stateSelector": stateTemp }));
  }, [axesSelector, citySelector, searchSelector, stateSelector, dispatch]);

  useEffect(() => {
    console.log(demand)
  }, [demand]);

  const handleFilter = () => {
    if (filterState === true) {
      setFilterState(false);
    } else {
      setFilterState(true);
    }
  }

  const checktitle = (title: string) => {
    let min = title.substring(0, 40) + "...";
    return (title.length >= 40) ? min : title;
  }

  const handleDemandColor = (status: number) => {
    if (status == 1) return "#EFBA8B";
    if (status == 2) return "#8BEFBF";
    if (status == 3) return "#EF8B8B";
  }

  const cleanFilter = () => {
    setAxesSelector("none");
    setCitySelector("none");
    setStateSelector("");
    setSearchSelector("");
  }

  function dataFormat(data: string): string {
    let format = new Date(data);
    let formatString = format.toLocaleDateString("pt-BR").split("/");
    console.log(parseInt(formatString[1]))
    let text = `${formatString[0]} de ${GetMonth(parseInt(formatString[1]))}, ${formatString[2]}`;

    return text;
  }

  return (
    <>
      <NavBar text="demandas"/>
      <ContainerPage>
        <LoadingDefault
          active={demands.loading || axes.loading || city.loading}
        />
        <span className="ResponsiveFilter" onClick={handleFilter}>
          <BiFilter color="#333" size="35" style={{ display: (filterState) ? "none" : "flex" }} />
          <FaTimes color="#333" size="35" style={{ display: (filterState) ? "flex" : "none" }} />
        </span>
        <div className="container-banner-demandas">
          <div className="header" />
          <div className="data">
            <div className="left-demandas" style={{ display: (filterState) ? "flex" : "none" }}>
              <MenuSuspenso className="menu-suspenso-demandas">
                <>
                  <div className="filters-demandas-modal" style={{ marginBottom: "20px" }}>
                    <h1 className="title-h2">Pesquisa por municipio</h1>
                    <SelectMenu
                      width="250px"
                      clicked
                      setSelected={setCitySelector}
                      defaultValue={citySelector}
                      options={[...city.city]}
                      background="rgba(0,0,0,0.1)"
                      color="black"
                      className="filterSelect"
                    />
                  </div>
                  <div className="filters-demandas-modal" style={{ marginBottom: "20px" }}>
                    <h1 className="title-h2">Pesquisa por eixo</h1>
                    <SelectMenu
                      width="250px"
                      clicked
                      setSelected={setAxesSelector}
                      defaultValue={axesSelector}
                      options={[...axes.axes]}
                      background="rgba(0,0,0,0.1)"
                      color="black"
                      className="filterSelect"
                    />
                  </div>
                  <div className="filters-demandas-modal" style={{ marginBottom: "20px" }}>
                    <h1 className="title-h2">Pesquisa por status</h1>
                    <div className="search">
                      <span className="check">
                        <input
                          id="execution"
                          type="radio"
                          name="state"
                          checked={(stateSelector === "1") ? true : false}
                          onChange={(e) =>
                            setStateSelector("1")
                          }
                        />
                        <label htmlFor="execution">Em execução</label>
                      </span>
                      <span className="check">
                        <input
                          id="close"
                          type="radio"
                          checked={(stateSelector === "3") ? true : false}
                          name="state"
                          onChange={(e) =>
                            setStateSelector("3")
                          }
                        />
                        <label htmlFor="close">Encerrados</label>
                      </span>
                      <span className="check">
                        <input
                          id="send"
                          type="radio"
                          name="state"
                          checked={(stateSelector === "2") ? true : false}
                          onChange={(e) =>
                            setStateSelector("2")
                          }
                        />
                        <label htmlFor="send">Recebendo Propostas</label>
                      </span>
                    </div>
                  </div>
                  <button className="btnAddDemand" onClick={() => cleanFilter()}>Limpar filtro <MdPlaylistAddCheck size="25" /></button>
                </>
              </MenuSuspenso>
            </div>
            <div className="right-demandas">
              <div className="search-demandas">
                <InputSearch
                  setState={setSearchSelector}
                  size="100%"
                  borderRadius="4px"
                  color="white"
                  valueDefault={searchSelector}
                  text="Pesquisar"
                  background="#1B4977"
                  height="55px"
                />
              </div>
              <div className="bodyTop" style={{marginTop: (logged) ? "90px" : "70px"}}>
                <AutenticateCard isPublic={true} setState={setOpenPopupDemandas} title="Adicionar" text="Clique no botão a direita para realizar o cadastro de uma nova demanda">
                  <PDefault
                    height="90%"
                    width="569"
                    title="Cadastro de demandas"
                    subtitle="Preencha todos os campos marcados *"
                    setTrigger={setOpenPopupDemandas}
                    trigger={openPopupDemandas}
                    setPrimaryState={setSendDemand}
                    primaryValue={sendDemand}
                    primaryBlocked={sendDemand}
                  >
                    <RegisterDemandas setState={setOpenPopupDemandas} setPrimary={setSendDemand} primaryValue={sendDemand} />
                  </PDefault>
                </AutenticateCard>
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
                </div>
              </div>

              {demand && demand.length > 0 ? (
                <div className="cards-demandas">
                  {demand &&
                    demand.map((item: IDemand) => {
                      return (
                        <div className="demandaCardItem" key={item.id}>
                          <Link to={`/demanda/${item.url}`}>
                            <CardDemandas
                              key={item.id}
                              className="box-demanda"
                              color={handleDemandColor(item.status)}
                              // "Turismo integrado no te..."
                              title={checktitle(item.name)}
                              // "Eixo - Negócios e renda"
                              subtitle={item.Axes.name}
                              date={dataFormat(item.createdAt)}
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
