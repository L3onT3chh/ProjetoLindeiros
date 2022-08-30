/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from "react";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { LoadingDefault } from "components/Loading";
import { SelectMenu } from "components/Select";
import { recent } from "assets/icons";
import { Cities } from "assets/data/filters";
import { formatKeyTypes } from "util/function";
import PDefault from "components/Popups";
import RegisterUser from "components/Popups/subContent/registerUser";
import { useSelector } from "react-redux";
import { ContainerPainel } from "../styled";
import { MenuRight } from "../../components/SubMenu/MenuRight";
import ButtonCard from "../../components/Buttons/ButtonCard";
import { InputSearch } from "../../components/Inputs/Search";

export function Listagem({
  type,
  children,
  setState,
  configsSets,
  active,
}: // types,

IPropsGlobal) {
  const { userTypes } = useSelector((state: IStateData) => state);
  const [OpenUserCard, setOpenUserCard] = useState(false);

  return (
    <ContainerPainel>
      <LoadingDefault active={active} />
      <PDefault
        height="700"
        width="517"
        title="Cadastro de usuário"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenUserCard}
        trigger={OpenUserCard}
      >
        <RegisterUser />
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
            background="#cecece"
            text="Pesquisar usuário"
            size="83%"
            borderRadius="40px 0 0 40px"
            setState={setState}
          />
        </div>

        <div className="content-body-painel">
          <div className="content-filter-painel">
            <SelectMenu
              setSelected={configsSets && configsSets.setOne}
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={userTypes.types}
              width="200px"
              color="white"
            />

            <SelectMenu
              setSelected={configsSets && configsSets.setThree}
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={formatKeyTypes(["Municípios", ...Cities], {})}
              // ["Município", ...Cities]
              color="white"
              width="200px"
            />
            <button
              className="btn-click-clear clear"
              onClick={() => configsSets && configsSets.setFour(true)}
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
