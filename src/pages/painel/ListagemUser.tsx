/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { LoadingDefault } from "components/Loading";
import { SelectMenu } from "components/Select";
import { recent } from "assets/icons";
import { Cities } from "assets/data/filters";
import { formatKeyTypes } from "util/function";
import PDefault from "components/Popups";
import RegisterUser from "components/Popups/subContent/registerUser";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import {
  filterCity,
  filterSearch,
  filterTypeUser,
  cleanFilters,
  filterAll,
  filterAllRequest
} from "app/reducers/user/userSlice";
import { ContainerPainel } from "../css/styled";
import { MenuRight } from "../../components/SubMenu/MenuRight";
import ButtonCard from "../../components/Buttons/ButtonCard";
import { InputSearch } from "../../components/Inputs/Search";

export function Listagem({
  type,
  children,
  configsSets,
}: // types,

  IPropsGlobal) {
  const { userTypes, users, city } = useSelector((state: IStateData) => state);
  const [OpenUserCard, setOpenUserCard] = useState(false);
  const [reset, setReset] = useState(false);
  const [citySelector, setCitySelector] = useState<string>();
  const [typeSelector, setTypeSelector] = useState<string>();
  const [searchSelector, setSearchSelector] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const cleanAllFilters = () => {
    setDisabled(!disabled);
    setCitySelector("none");
    setTypeSelector("none");
    setSearchSelector("");
  }

  useEffect(() => {
    callUserFilter();
  }, [citySelector, typeSelector, searchSelector, dispatch]);

  const callUserFilter = () => {
    let cityTemp = citySelector ?? "none";
    let typeTemp = typeSelector ?? "none";
    let searchTemp = searchSelector ?? "";

    if(cityTemp !== "none" || typeTemp !== "none" || searchTemp !== ""){
      setDisabled(true);
    }else{
      setDisabled(false);
    }

    if(type === "Pedidos"){
      dispatch(filterAllRequest({ "citySelector": cityTemp, "typeSelector": typeTemp, "searchSelector": searchTemp }));
    }else{
      dispatch(filterAll({ "citySelector": cityTemp, "typeSelector": typeTemp, "searchSelector": searchTemp }));
    }
  }

  return (
    <ContainerPainel>
      <LoadingDefault active={users.loading || userTypes.loading} />
      <PDefault
        height="90%"
        width="517"
        title="Cadastro de usuário"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenUserCard}
        trigger={OpenUserCard}
      >
        <RegisterUser modal={OpenUserCard} />
      </PDefault>
      <MenuRight />
      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard
              router="/painel/users/"
              state={OpenUserCard}
              setState={setOpenUserCard}
              value={`Adicionar ${type}`}
            />
          </div>
          <InputSearch
            reset={reset}
            valueDefault={searchSelector}
            background="#cecece"
            text={(type === "Pedidos") ? "Pesquisar usuário por e-mail" : "Pesquisar usuário por nome"}
            size="83%"
            borderRadius="40px 0 0 40px"
            setState={setSearchSelector}
          />
        </div>
        <div className="content-body-painel">
          <div className="content-filter-painel">
            <SelectMenu
              setSelected={setTypeSelector}
              iconFinal={recent}
              defaultValue={typeSelector}
              disabled={reset}
              background="rgba(0, 0, 0, 0.33)"
              options={formatKeyTypes(["Todos os usuários", ...userTypes.types], {})}
              width="200px"
              color="white"
            />

            <SelectMenu
              setSelected={setCitySelector}
              iconFinal={recent}
              defaultValue={citySelector}
              disabled={reset}
              background="rgba(0, 0, 0, 0.33)"
              options={formatKeyTypes([...city.city], {})}
              color="white"
              width="200px"
            />
            <button
              style={{ opacity: (disabled) ? 1 : 0.35, cursor: (disabled) ? "pointer" : "initial" }}
              className="btn-click-clear clear"
              disabled={!disabled}
              onClick={() => cleanAllFilters()}
            >
              Limpar filtros
            </button>
          </div>
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
