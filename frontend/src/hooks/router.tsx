import { Documents } from "pages/documents";
import { Route, Routes } from "react-router-dom";
import { Demanda } from "../components/demanda";
import { NewsItems } from "../components/news";
import { Contato } from "../pages/contact/Contato";
import { Demandas } from "../pages/demands/Demandas";
import { Eixos } from "../pages/eixos/Eixos";
import { Equipe } from "../pages/equipe/Equipe";
import { Home } from "../pages/home/Home";
import { News } from "../pages/news/News";
import { Painel } from "../pages/painel/painel";
import { Cadastro } from "../pages/sign_up/Cadastro";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="demandas" element={<Demandas />} />
      <Route path="eixos" element={<Eixos />} />
      <Route path="painel" element={<Painel />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="contato" element={<Contato />} />
      <Route path="news" element={<News />} />
      <Route path="time" element={<Equipe />} />
      <Route path="docs" element={<Documents />} />
      <Route path="itemNews" element={<NewsItems />} />
      <Route path="demandas/:id" element={<Demanda />} />
      <Route path="validate/:user" element={() => {}} />
      <Route path="*" element={<li>Not found</li>} />
    </Routes>
  );
};
