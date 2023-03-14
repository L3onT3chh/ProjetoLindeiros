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
  cleanFilters
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
  const { userTypes, users } = useSelector((state: IStateData) => state);
  const [OpenUserCard, setOpenUserCard] = useState(false);
  const [reset, setReset] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const cleanAllFilters = () => {
    if (users.touched) {
      setReset(true);
      dispatch(cleanFilters());

      setTimeout(() => {
        setReset(false);
      }, 10)
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
            background="#cecece"
            text="Pesquisar usuário"
            size="83%"
            borderRadius="40px 0 0 40px"
            setState={filterSearch}
          />
        </div>

        <div className="content-body-painel">
          <div className="content-filter-painel">
            <SelectMenu
              setSelected={filterTypeUser}
              iconFinal={recent}
              disabled={reset}
              background="rgba(0, 0, 0, 0.33)"
              options={formatKeyTypes(["Todos os usuários", ...userTypes.types], {})}
              width="200px"
              color="white"
            />

            <SelectMenu
              setSelected={filterCity}
              iconFinal={recent}
              disabled={reset}
              background="rgba(0, 0, 0, 0.33)"
              options={formatKeyTypes(["Municípios", ...Cities], {})}
              color="white"
              width="200px"
            />
            <button
              style={{ opacity: (users.touched) ? 1 : 0.35, cursor: (users.touched) ? "pointer" : "initial"}}
              className="btn-click-clear clear"
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
