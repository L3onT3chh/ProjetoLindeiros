import React, { useEffect, useState } from "react";
import { Contato } from "pages/Contato";
import { Documents } from "pages/documents";
import { Eixos } from "pages/eixo";
import { News } from "pages/news/News";
import { Routes, Route, Navigate } from "react-router-dom";
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
  fetchTypesThunk,
  fetchUsersThunk,
} from "app/reducers";
import { fetchNewssThunk } from "app/reducers/news/thunk";
import { ToastContainer } from "react-toastify";
import { fetchCitysThunk } from "app/reducers/city/thunk";
import { fetchAxesThunk } from "app/reducers/axes/thunk";
import RegisterRepresent from "pages/Register";
import ForgoutPassword from "pages/ForgoutPassword";
import PrivatRoute from "components/PrivateRouter";
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
    dispatch(fetchTypesThunk());
    dispatch(fetchNewssThunk());
    dispatch(fetchAxesThunk());
    dispatch(fetchUsersThunk());
  }, [dispatch]);
};
function Routers() {
  HandleDispatchData();
  const { users, demands, auth } = useSelector((state: IStateData) => state);
  const [dataSearch, setDataSearch] = useState("");

  useEffect(() => {
    console.log(auth.auth.logged && localStorage.getItem("token_jwt") !== " ");
  }, [auth.auth]);

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
        <Route path="/register" element={<RegisterRepresent />} />
        <Route path="/forgoutPassword" element={<ForgoutPassword />} />

        {/* Painel router */}
        <Route
          path="/painel"
          element={
            <PrivatRoute>
              <InicioPainel />
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/users"
          element={
            <PrivatRoute>
              <Listagem active={users.loading} type="Usuários">
                <TableDefaultUser fields={[...fields]} />
              </Listagem>
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/demandas"
          element={
            <PrivatRoute>
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
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/popup/demandas/status"
          element={
            <PrivatRoute>
              <MenuRight />
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/popup/demandas/add"
          element={
            <PrivatRoute>
              <MenuRight />
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/news/add"
          element={
            <PrivatRoute>
              <MenuRight />
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/eixos/add"
          element={
            <PrivatRoute>
              <MenuRight />
            </PrivatRoute>
          }
        />
        <Route
          path="/painel/docs/add"
          element={
            <PrivatRoute>
              <MenuRight />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default Routers;
