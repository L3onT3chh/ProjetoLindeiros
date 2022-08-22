/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Contato } from "pages/Contato";
import { Documents } from "pages/documents";
import { Eixos } from "pages/eixo";
import { News } from "pages/news/News";
import { Routes, Route } from "react-router-dom";
import { Demanda } from "pages/demandas/Demanda";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDemandsThunk,
  fetchDocumentThunk,
  fetchUsersThunk,
} from "app/reducers/thunks";
import { AppDispatch } from "app/store";
import { TableDefaultUser } from "components/Tables";
import { IStateData } from "interfaces/components.interface";
import { ListagemDemanda } from "pages/painel/demandas/Listagem";
import { TableDefaultData } from "components/Tables/TableData";
import { MenuRight } from "../components/SubMenu/MenuRight";
import Demandas from "../pages/demandas/Demandas";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { InicioPainel } from "../pages/painel/Inicio";
import { Listagem } from "../pages/painel/listagem";

const fields = ["Ativo", "Nome completo", "Usuário", "Contato", "Tipo"];

const HandleDispatchData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDocumentThunk());
    dispatch(fetchDemandsThunk());
    dispatch(fetchUsersThunk());
  }, []);
};

function Router() {
  HandleDispatchData();
  const { users, demands } = useSelector((state: IStateData) => state);

  return (
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
          <Listagem type="Usuários">
            <TableDefaultUser data={users.users} fields={[...fields]} />
          </Listagem>
        }
      />
      <Route
        path="/painel/demandas"
        element={
          <ListagemDemanda type="Demanda">
            <TableDefaultData
              dataDemand={demands.demand}
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
  );
}

export default Router;
