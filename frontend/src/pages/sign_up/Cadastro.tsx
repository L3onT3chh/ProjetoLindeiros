import React, { useState } from "react";
// Style
import "assets/css/cadastro.css";
// Imagens
import "assets/css/index.css";
// Componets
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { ContactCad } from "components/modais/button/contact";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/router";

import { ReactNotifications, Store } from "react-notifications-component";

export const Cadastro = () => {
  let navigate = useNavigate();
  let auth = useAuth();

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleConfirmationUser() {
    auth.signin(
      username,
      password,
      () => {
        navigate("/painel", { replace: true });
      },
      Store
    );
  }

  return (
    <>
      <ReactNotifications />
      <Header />
      <div className="cadastro">
        <div className="banner">
          <div
            className="img"
            style={{
              backgroundImage: "url(assets/img/cadastroBanner.jpg)",
            }}
          />

          <div className="cover" />
          <div className="content">
            <div
              className="cad-opt container"
              style={{
                height: "fit-content",
                width: "60%",
                marginRight: "5%",
              }}
            >
              <h1 className="border-left-secondary color-secondary">
                Não possui cadastro?
              </h1>
              <div className="bottom" style={{ height: "410px" }}>
                <ContactCad />
              </div>
            </div>
            <div
              className="cad-login container"
              style={{ height: "fit-content", width: "35%" }}
            >
              <h1 className="border-left-secondary color-secondary">
                Ja possui uma conta?
              </h1>
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirmationUser();
                }}
              >
                <label htmlFor="loginEmail">Usuário:</label>
                <input
                  type="text"
                  placeholder="Seu usuário"
                  name="loginEmail"
                  id="loginEmail"
                  onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="loginSenha">Senha:</label>
                <input
                  type="password"
                  placeholder="Sua senha"
                  name="loginSenha"
                  id="loginSenha"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p id="esqueceuSenha">Esqueceu sua senha?</p>
                <input
                  type="submit"
                  className="btn bgcolor-secondary"
                  value="Entrar"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
