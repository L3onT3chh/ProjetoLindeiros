/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Contato } from "pages/Contato";
import { Documents } from "pages/documents";
import { Eixos } from "pages/eixo";
import { News } from "pages/news/News";
import { Routes, Route } from "react-router-dom";
import { Demanda } from "pages/demandas/Demanda";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { TableDefaultUser } from "components/Tables";
import { IStateData } from "interfaces/components.interface";
import { ListagemDemanda } from "pages/painel/demandas/Listagem";
import { TableDefaultData } from "components/Tables/TableData";
import {
  fetchDemandsThunk,
  fetchDocumentsThunk,
  fetchUsersThunk,
  fetchTypesThunk,
} from "app/reducers";
import { fetchNewssThunk } from "app/reducers/news/thunk";
import { ToastContainer } from "react-toastify";
import { fetchCitysThunk } from "app/reducers/city/thunk";
import { fetchAxesThunk } from "app/reducers/axes/thunk";
import { MenuRight } from "../components/SubMenu/MenuRight";
import Demandas from "../pages/demandas/Demandas";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { InicioPainel } from "../pages/painel/Inicio";
import { Listagem } from "../pages/painel/ListagemUser";

const fields = ["Ativo", "Nome completo", "Usuário", "Contato", "Tipo"];

const HandleDispatchData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCitysThunk());
    dispatch(fetchDocumentsThunk());
    dispatch(fetchDemandsThunk());
    dispatch(fetchUsersThunk());
    dispatch(fetchTypesThunk());
    dispatch(fetchNewssThunk());
    dispatch(fetchAxesThunk());
  }, []);
};
function Router() {
  HandleDispatchData();
  const { users, demands, userTypes } = useSelector(
    (state: IStateData) => state,
  );

  const [dataSearch, setDataSearch] = useState("");
  const [dataSearchUser, setDataSearchUser] = useState("");
  const [s1, setOne] = useState();
  const [s2, setTwo] = useState();
  const [s3, setThree] = useState();
  const [s4, setFour] = useState();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demandas" element={<Demandas />} />
        <Route path="/demanda/:name" element={<Demanda />} />
        <Route path="/eixos" element={<Eixos />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/contato" element={<Contato />} />

        {/* Painel router */}
        <Route path="/painel" element={<InicioPainel />} />
        <Route path="/painel/users/add" element={<>oi</>} />
        <Route
          path="/painel/users"
          element={
            <Listagem
              active={users.loading}
              type="Usuários"
              configsSets={{ setOne, setTwo, setThree, setFour }}
              setState={setDataSearchUser}
              types={userTypes && userTypes.types}
            >
              <TableDefaultUser
                data={users.users}
                configSets={{ s1, s2, s3, s4, setFour }}
                text={dataSearchUser}
                fields={[...fields]}
              />
            </Listagem>
          }
        />
        <Route
          path="/painel/demandas"
          element={
            <ListagemDemanda
              type="Demanda"
              active={demands.loading}
              setState={setDataSearch}
            >
              <TableDefaultData
                text={dataSearch}
                fields={[
                  "Nome",
                  "Áreas relacionadas",
                  "Prioridade",
                  "Cidade",
                  "Atualizada",
                ]}
              />
            </ListagemDemanda>
          }
        />
        <Route path="/painel/popup/demandas/status" element={<MenuRight />} />
        <Route path="/painel/popup/demandas/add" element={<MenuRight />} />
        <Route path="/painel/news/add" element={<MenuRight />} />
        <Route path="/painel/eixos/add" element={<MenuRight />} />
        <Route path="/painel/docs/add" element={<MenuRight />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default Router;
