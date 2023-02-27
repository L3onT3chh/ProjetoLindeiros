/* eslint-disable @typescript-eslint/no-shadow */
// import ButtonCard from "components/Buttons/ButtonCard";
import { filterSearch } from "app/reducers/demand/demandSlice";
import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { LoadingDefault } from "components/Loading";
import PDefault from "components/Popups";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerPainel } from "pages/css/styled";
import React, { useState } from "react";

export function ListagemDemanda({
  type,
  children,
  active,
  state,
}: IPropsGlobal) {
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);

  return (
    <ContainerPainel>
      <PDefault
        height="90%"
        width="569"
        title="Cadastro de demandas"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenPopupDemandas}
        trigger={openPopupDemandas}
      >
        <RegisterDemandas setState={setOpenPopupDemandas} />
      </PDefault>

      <MenuRight />
      <LoadingDefault active={active} />
      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard
              className="painelButton"
              state={state}
              value={`Adicionar ${type}`}
              router="/painel/demandas"
              setState={setOpenPopupDemandas}
            />
          </div>

          <InputSearch
            className="painelSearch"
            text="Pesquisar demanda"
            background="#cecece"
            size="83%"
            setState={filterSearch}
            borderRadius="40px 0 0 40px"
          />
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
