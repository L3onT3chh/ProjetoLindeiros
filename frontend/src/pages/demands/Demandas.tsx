import { EStatusDemandas } from "interfaces/types";
import React, { useEffect, useState } from "react";
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
// Styles
import { Container } from "./style";

export const Demandas = () => {
  const [checkedCities, setCheckedCities] = useState([] as any);
  const [checkedEixos, setCheckedEixos] = useState([] as any);
  const [demandasFilter, setDemandasFilter] = useState<any>([...demandaData]);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterSearch, setFilterSearch] = useState<string>("");

  useEffect(() => {
    if (filterSearch != "") {
      setDemandasFilter(
        demandasFilter.filter((item: any) => item.name.includes(filterSearch))
      );
    } else {
      setDemandasFilter([...demandaData]);
    }
  }, [filterSearch]);

  useEffect(() => {
    if (filterSearch != "") {
      setDemandasFilter(
        demandasFilter.filter((item: any) => item.name.includes(filterSearch))
      );
    } else {
      setDemandasFilter([...demandaData]);
    }
  }, [filterSearch]);

  useEffect(() => {
    if (
      (Object.keys(checkedEixos).length || Object.keys(checkedCities).length) >
      0
    ) {
      var filteredDemandas: Array<any> = demandaData.filter(
        (item: any) =>
          checkedEixos.filter(
            (eixo: any) => item.budget.area == eixo && item
          ) == item.budget.area
      );

      var filteredCity: Array<any> = demandaData.filter(
        (item: any) =>
          checkedCities.filter(
            (city: any) => item.budget.cityApplied == city && item
          ) == item.budget.cityApplied
      );
      var arr = Array([]);

      [new Set([...filteredCity, ...filteredDemandas])][0].forEach(
        (item: any) => arr.push(item)
      );

      // Remove o primeiro elemento
      arr.shift();

      setDemandasFilter(arr);
    }
  }, [checkedCities, checkedEixos, filterStatus]);

  const handleCheckedEixos = (event: React.ChangeEvent<HTMLInputElement>) => {
    var updateList = [...checkedEixos];
    var value = event.target.value;
    if (event.target.checked) {
      updateList = [...checkedEixos, value];
    } else {
      updateList.splice(checkedEixos.indexOf(value), 1);
    }
    setCheckedEixos(updateList);
  };

  const handleChecketBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
    var updateList = [...checkedCities];
    var value = event.target.value;
    if (event.target.checked) {
      updateList = [...checkedCities, value];
    } else {
      updateList.splice(checkedCities.indexOf(value), 1);
    }
    setCheckedCities(updateList);
  };

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
                      value={item.name}
                      onChange={handleCheckedEixos}
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
                      className="input_checked"
                      defaultValue={item.sigle}
                      id={item.sigle}
                      value={item.name}
                      onChange={handleChecketBtn}
                    />
                    <label htmlFor={item.sigle}>{item.name}</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="lista">
            <div className="head">
              {localStorage.getItem("token_jwt")?.toString() !== "" ? (
                <button
                  style={{ float: "right" }}
                  className="btn color-secondary border-secondary btn-docs"
                >
                  Adicionar demandas
                </button>
              ) : (
                <></>
              )}
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
                    onChange={(e) => setFilterSearch(e.target.value)}
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
                  <option>Mais recentes</option>
                  <option>Mais antigas</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "50px" }} id="listaDemandas">
              {Object.keys(demandasFilter).length >= 1 ? (
                demandasFilter.map((item: IDemandas) => {
                  return (
                    item && (
                      <div className="item" key={item.id}>
                        <Container className="img" background={logo} />
                        <CardDemanda itemDemanda={item} />
                      </div>
                    )
                  );
                })
              ) : (
                <div>Lista vazia</div>
              )}
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
