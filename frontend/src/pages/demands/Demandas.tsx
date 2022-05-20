/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import filterCity from "../../assets/data/cities";
import demandaData from "../../assets/data/demandas";
import filterEixos from "../../assets/data/eixos";
import { logo } from "../../assets/img";
import { CardDemanda } from "../../components/demanda/card";
import Footer from "../../components/footer/Footer";
// Components
import Header from "../../components/header/Header";
import { IDemandas } from "../../interfaces/IDemandas";
import { IFilter } from "../../interfaces/IFilter";
import { EStatusDemandas } from "../../interfaces/types";
// Styles
import { Container } from "./style";

export const Demandas = () => {
  const [filter, setFilter] = useState<string>("");
  const [filterCities, setFilterCity] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const [demandasFilter, setDemandasFilter] = useState<any>([...demandaData]);

  useEffect(() => {
    filter
      ? setDemandasFilter(
          demandaData.filter((item) => item.budget.area === filter)
        )
      : setDemandasFilter(demandaData);
  }, [filter]);

  useEffect(() => {
    filterStatus !== ""
      ? setDemandasFilter(
          demandaData.map((item) => {
            return (
              item.progress.status === EStatusDemandas[filterStatus] && item
            );
          })
        )
      : "";
  }, [filterStatus]);

  useEffect(() => {
    filterCities && demandasFilter
      ? setDemandasFilter(
          demandasFilter.filter((item: any) =>
            item.budget.cityApplied.includes(filterCities)
          )
        )
      : setDemandasFilter(demandaData);
  }, [filterCities]);

  const handleSelectFunction = () => {
    const select: any = document.getElementById("selectStatus");
    var value = select.options[select.selectedIndex].value;
    value === "All"
      ? setDemandasFilter([...demandaData])
      : setFilterStatus(value);
  };

  return (
    <>
      <div>
        <Header />
        <div className="demandas">
          <aside className="filtros">
            <div className="block">
              <h2 className="color-secondary">Pesquisa por status</h2>
              <ul style={{ width: "100%" }}>
                <li style={{ width: "80%", height: 50 }}>
                  <select
                    id="selectStatus"
                    name="filter[status]"
                    className="demandaStatus"
                    onChange={handleSelectFunction}
                  >
                    <option value="All">Selecione uma opção</option>
                    <option value="A">Recebendo propostas</option>
                    <option value="B">Encerrados</option>
                    <option value="C">Em execução</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="block">
              <h2 className="color-secondary">Pesquisa por eixos</h2>
              <ul>
                {filterEixos.map((item: IFilter) => (
                  <li key={item.name}>
                    <input
                      key={item.sigle}
                      type="checkbox"
                      name="filter[eixos]"
                      defaultValue={item.sigle}
                      id={item.sigle}
                      onChange={() => setFilter(item.name)}
                    />{" "}
                    <label htmlFor={item.sigle}>{item.name}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block">
              <h2 className="color-secondary">Pesquisa por município</h2>
              <ul>
                {filterCity.map((item: IFilter) => (
                  <li key={item.sigle}>
                    <input
                      type="checkbox"
                      name="filter[cidades]"
                      defaultValue={item.sigle}
                      id={item.sigle}
                      onClick={() => setFilterCity(item.name)}
                    />
                    <label htmlFor={item.sigle}>{item.name}</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="lista">
            <div className="head">
              <div className="title">
                <span className="bgcolor-secondary">
                  {Object.keys(demandaData).length}
                </span>
                <h2>Demandas encontradas</h2>
              </div>
              <div className="controls">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Encontre uma demanda"
                    id="pesquisaDemanda"
                    name="filter[texto]"
                  />
                  <button
                    className="bgcolor-secondary"
                    style={{ lineHeight: 2, borderRadius: 15, marginLeft: 3 }}
                  >
                    <i
                      className="fas fa-search"
                      style={{ padding: 5, color: "#fff" }}
                    />
                  </button>
                </div>
                <select name="filter[order]" className="demandaOrder">
                  <option>Mais recente</option>
                  <option>Mais antigas</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "50px" }} id="listaDemandas">
              {demandasFilter &&
                demandasFilter.map((item: IDemandas) => {
                  return (
                    item && (
                      <div className="item">
                        <Container className="img" background={logo} />
                        <CardDemanda itemDemanda={item} />
                      </div>
                    )
                  );
                })}
            </div>
            <div className="paginacao">
              <button className="btn-anterior bgcolor-secondary">
                Anterior
              </button>
              <ul className="pags">
                <li className="pagination-active bgcolor-secondary">1</li>
                <li key={2}>2</li>
                <li key={3}>3</li>
                <li key={4}>4</li>
                <li key={5}>5</li>
                <li key={6}>6</li>
              </ul>
              <button className="btn-proximo bgcolor-secondary">Proximo</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
