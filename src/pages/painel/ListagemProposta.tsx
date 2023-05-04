/* eslint-disable @typescript-eslint/no-shadow */
// import ButtonCard from "components/Buttons/ButtonCard";
import { filterAll, filterSearch, selectCurrentDemands } from "app/reducers/demand/demandSlice";
import { myRelatedDemand } from "app/reducers/demand/thunk";
import { fetchProposalRelatedDemand, fetchProposalRelatedDemandById } from "app/reducers/proposital/thunk";
import { AppDispatch } from "app/store";
import { recent } from "assets/icons";
import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { LoadingDefault } from "components/Loading";
import PDefault from "components/Popups";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import { SelectMenu } from "components/Select";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { ContainerPainel } from "pages/css/styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatKeyTypes } from "util/function";

export function ListagemProposta({
  type,
  children,
  active,
  state,
}: IPropsGlobal) {
  let dispatch = useDispatch<AppDispatch>();
  const [reset, setReset] = useState(false);
  const [search, setSearch] = useState<any>();
  const { item } = useSelector((state: IStateData) => state.demands);
  const [typeSelector, setTypeSelector] = useState<string>();
  const demand = useSelector(selectCurrentDemands);


  // useEffect(() => {
  //   let searchTemp = search ?? "";

  //   dispatch(filterAll({ "citySelector": '', "axesSelector": '', "searchSelector": searchTemp, "stateSelector": '' }));
  // }, [search, dispatch]);

  useEffect(() => {
    dispatch(myRelatedDemand());
  }, []);

  useEffect(() => {
    if (typeSelector) {
      if(typeSelector === "none"){
        dispatch(fetchProposalRelatedDemand());
      }else{
        dispatch(fetchProposalRelatedDemandById(typeSelector));
      }
    }
  }, [typeSelector]);

  return (
    <ContainerPainel>
      <MenuRight />
      <LoadingDefault active={active} />
      <div className="container">
        <div className="content-header">
          <SelectMenu
            setSelected={setTypeSelector}
            iconFinal={recent}
            defaultValue={typeSelector}
            disabled={reset}
            background="rgba(0, 0, 0, 0.33)"
            options={formatKeyTypes(["Pesquisa por demanda", ...item], {})}
            width="225px"
            color="white"
          />
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
