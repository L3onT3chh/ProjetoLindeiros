import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { MenuRight } from "../../components/SubMenu/MenuRight";
import { ContainerPainel } from "../css/styled";
import { history } from "util/_helped";
import { cleanDemand } from "app/reducers/demand/demandSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";

export function MeuPainel() {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  
  useEffect(()=>{
    dispatch(cleanDemand());
    nav("/meupainel/demandas");
  }, []);

  return (
    <ContainerPainel>
      <MenuRight />
      <div className="container home">
      </div>
    </ContainerPainel>
  );
}
