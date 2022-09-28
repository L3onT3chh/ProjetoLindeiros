/* eslint-disable @typescript-eslint/no-shadow */
// import ButtonCard from "components/Buttons/ButtonCard";
import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { LoadingDefault } from "components/Loading";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { ContainerPainel } from "pages/css/styled";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export function ListagemDemanda({
  setState,
  type,
  children,
  active,
  state,
}: IPropsGlobal) {
  const { demands } = useSelector((state: IStateData) => state);

  useEffect(() => {
    if (demands.message) {
      toast.error(demands.message);
    }
  }, [demands.message, demands.error, demands]);

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
