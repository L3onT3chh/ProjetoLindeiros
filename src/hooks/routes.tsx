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
  fetchTypesThunk,
  fetchUsersThunk,
} from "app/reducers";
import { fetchNewssThunk } from "app/reducers/news/thunk";
import { fetchCitysThunk } from "app/reducers/city/thunk";
import { fetchAxesThunk } from "app/reducers/axes/thunk";
import RegisterRepresent from "pages/Register";
import ForgoutPassword from "pages/ForgoutPassword";
import PrivatRoute from "components/PrivateRouter";
import { Toaster } from "react-hot-toast";
import { NotFound } from "pages/notFound";
import { MenuRight } from "../components/SubMenu/MenuRight";
import Demandas from "../pages/demandas/Demandas";
import Home from "../pages/Home";
import Login from "../pages/Login";

import { InicioPainel } from "../pages/painel/Inicio";
import { Listagem } from "../pages/painel/ListagemUser";
import { MeuPainel } from "pages/meupainel/Inicio";
import { NewsItem } from "pages/news/NewsItem";
import { RetrivePassword } from "pages/retrivePassword";

const fields = ["Ativo", "Nome completo", "Usuário", "Contato", "Tipo"];

const HandleDispatchData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCitysThunk());
    dispatch(fetchDocumentsThunk());
    dispatch(fetchTypesThunk());
    dispatch(fetchNewssThunk());
    dispatch(fetchAxesThunk());
    dispatch(fetchUsersThunk());
  }, [dispatch]);
};
function Routers() {
  HandleDispatchData();
  // const { toasts } = useSelector((state: IStateData) => state.toast);

  const { users, demands } = useSelector((state: IStateData) => state);
  const [dataSearch, setDataSearch] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demandas" element={<Demandas />} />
        <Route path="/demanda/:name" element={<Demanda />} />
        <Route path="/eixos" element={<Eixos />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:name" element={<NewsItem />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/register" element={<RegisterRepresent />} />
        <Route path="/forgoutPassword" element={<ForgoutPassword />} />
        <Route path="/redefinir/:link" element={<RetrivePassword />} />

        <Route
          path="/meupainel"
          element={
            <PrivatRoute>
              <MeuPainel />
            </PrivatRoute>
          }
        />

        <Route
          path="/meupainel/demandas"
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
                    "Ações",
                    "Propostas",
                  ]}
                />
              </ListagemDemanda>
            </PrivatRoute>
          }
        />

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
                    "Ações",
                    "Propostas",
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </>
  );
}

export default Routers;
