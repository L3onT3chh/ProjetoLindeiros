import React from "react";
import { Contato } from "pages/Contato";
import { Documents } from "pages/documents";
import { Eixos } from "pages/eixo";
import { News } from "pages/news/News";
import { Routes, Route } from "react-router-dom";
import { Demanda } from "pages/demandas/Demanda";
import { MenuRight } from "../components/SubMenu/MenuRight";
import Demandas from "../pages/demandas/Demandas";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { InicioPainel } from "../pages/painel/Inicio";
import { Listagem } from "../pages/painel/listagem";

const fields = ["Ativo", "Nome completo", "Usuário", "Contato", "Tipo"];

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/demandas" element={<Demandas />} />
      <Route path="/demandas/:id" element={<Demanda />} />
      <Route path="/eixos" element={<Eixos />} />
      <Route path="/news" element={<News />} />
      <Route path="/docs" element={<Documents />} />
      <Route path="/contact" element={<Contato />} />

      {/* Painel router */}
      <Route path="/painel" element={<InicioPainel />} />
      <Route
        path="/painel/users/add"
        element={<Listagem field={fields} type="Usuários" />}
      />
      <Route path="/painel/users/administrators" element={<MenuRight />} />
      <Route path="/painel/users/representers" element={<MenuRight />} />
      <Route
        path="/painel/popup/permissions"
        element={<Listagem field={fields} type="Demandas" />}
      />

      <Route
        path="/painel/demandas"
        element={<Listagem field={fields} type="Demandas" />}
      />
      <Route path="/painel/popup/demandas/status" element={<MenuRight />} />
      <Route path="/painel/popup/demandas/add" element={<MenuRight />} />

      <Route
        path="/painel/news"
        element={<Listagem field={fields} type="Notícias" />}
      />
      <Route path="/painel/news/add" element={<MenuRight />} />

      <Route
        path="/painel/eixos"
        element={<Listagem field={fields} type="Eixos" />}
      />
      <Route path="/painel/eixos/add" element={<MenuRight />} />

      <Route
        path="/painel/docs"
        element={<Listagem field={fields} type="Documentos" />}
      />
      <Route path="/painel/docs/add" element={<MenuRight />} />
    </Routes>
  );
}

export default Router;
