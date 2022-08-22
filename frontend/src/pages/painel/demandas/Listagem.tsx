import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerPainel } from "pages/styled";
import React from "react";

export function ListagemDemanda({ setState, type, children }: IPropsGlobal) {
  return (
    <ContainerPainel>
      <MenuRight />

      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard value={`Adicionar ${type}`} />
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
