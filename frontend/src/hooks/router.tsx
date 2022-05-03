/* eslint-disable react/jsx-no-undef */
import { ProviderAuthentication } from "API/auth";
import { Documents } from "pages/documents";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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

interface IAuthContext {
  user: any;
  signin: (
    user: string,
    password: string,
    callback: VoidFunction,
    Store: any
  ) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<IAuthContext>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (
    username: string,
    password: string,
    callback: VoidFunction,
    Store: any
  ) => {
    ProviderAuthentication.signin(
      { username, password },
      () => {
        setUser({ user, password });
        callback();
      },
      Store
    );

    setUser(localStorage.getItem("token_jwt"));
  };

  let signout = (callback: VoidFunction) => {
    return ProviderAuthentication.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  if (!localStorage.getItem("token_jwt")) {
    return <Navigate to="/cadastro" state={{ from: location }} replace />;
  }

  return children;
};

function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demandas" element={<Demandas />} />
        <Route path="eixos" element={<Eixos />} />
        <Route
          path="painel"
          element={
            <RequireAuth>
              <Painel />
            </RequireAuth>
          }
        />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="contato" element={<Contato />} />
        <Route path="news" element={<News />} />
        <Route path="time" element={<Equipe />} />
        <Route path="docs" element={<Documents />} />
        <Route path="itemNews" element={<NewsItems />} />
        <Route path="demandas/:id" element={<Demanda />} />
        <Route path="validate/:user" element={<Demanda />} />
        <Route path="*" element={<li>Not found</li>} />
      </Routes>
    </AuthProvider>
  );
}

export default Router;
