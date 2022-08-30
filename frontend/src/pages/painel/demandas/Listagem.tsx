// import ButtonCard from "components/Buttons/ButtonCard";
import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { LoadingDefault } from "components/Loading";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerPainel } from "pages/styled";
import React from "react";

export function ListagemDemanda({
  setState,
  type,
  children,
  active,
  state,
}: IPropsGlobal) {
  return (
    <ContainerPainel>
      <MenuRight />
      <LoadingDefault active={active} />
      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard
              state={state}
              value={`Adicionar ${type}`}
              router="/painel/demandas"
              setState={setState}
            />
          </div>

          <InputSearch
            text="Pesqusiar demanda"
            background="#cecece"
            size="83%"
            setState={setState}
            borderRadius="40px 0 0 40px"
          />
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
