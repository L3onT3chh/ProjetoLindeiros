/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import { IPropsGlobal } from "interfaces/components.interface";
// import { Cities } from "assets/data/filters";
import { LoadingDefault } from "components/Loading";
// import { ITypes } from "interfaces/data/types.interface";
import { SelectMenu } from "../../components/Select";
import { ContainerPainel } from "../styled";
import { recent } from "../../assets/icons";
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
  return (
    <ContainerPainel>
      <LoadingDefault active={active} />
      <MenuRight />
      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard value={`Adicionar ${type}`} />
          </div>
          <InputSearch
            text="Pesquisar usuário"
            background="#cecece"
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
              options={[
                { key: "1", label: "Tipo de usuário" },
                { key: "2", label: "Administrador" },
                { key: "3", label: "Representantes" },
              ]}
              width="200px"
              color="white"
            />
            <SelectMenu
              setSelected={configsSets && configsSets.setTwo}
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={[
                { label: "Instituição", key: "1" },
                { label: "UTFPR", key: "2" },
                { label: "UFPR", key: "3" },
              ]}
              color="white"
              width="200px"
            />
            <SelectMenu
              setSelected={configsSets && configsSets.setThree}
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={[]}
              // ["Município", ...Cities]
              color="white"
              width="200px"
            />
          </div>
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
