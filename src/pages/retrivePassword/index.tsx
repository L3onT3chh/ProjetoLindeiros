import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import React, { useState } from "react";
import imgNotFound from "assets/img/image 16.png";
import ButtonDefault from "components/Buttons/ButtonDefault";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputStyle from "components/Inputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { showErrorMessage } from "util/function";
import { changePassword } from "API/User/crud.user";

export function RetrivePassword() {
  const nav = useNavigate();
  const { link } = useParams();

  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  const retrivePassword = async () => {
    if(senha.length === 0 || confSenha.length === 0){
      showErrorMessage("Preencha todos os campos", "error");
      return;
    }

    if(senha !== confSenha){
      showErrorMessage("Senhas não coincidem", "error");
      return;
    }

    if(link){
      let resp = await changePassword(senha, link);
      if(resp.status === 200){
        showErrorMessage("Senha alterada com sucesso", "success");
        setSenha("");
        setConfSenha("");
        setTimeout(()=>{
          nav("/");
        }, 2000);
      }else{
        showErrorMessage(resp.message, "error");
      }
    }
  }
  return (
    <ContainerPage className="retrive">
      <div className="container-page">
        <div className="card">
          <h1>Redefinição de senha</h1>
          <InputStyle
            onChange={(e) => setSenha(e.target.value)}
            valueChanges={senha}
            name="senha"
            title="Senha nova"
            type="password"
            required
            placeholder="senha"
          />
          <div style={{ marginBottom: "15px" }}></div>
          <InputStyle
            onChange={(e) => setConfSenha(e.target.value)}
            valueChanges={confSenha}
            name="confSenha"
            title="Confirmar senha"
            type="password"
            required
            placeholder="Confirmar senha"
          />
          <div style={{ marginBottom: "15px" }}></div>
          <button onClick={retrivePassword}>Enviar</button>
          <div className="back">
            <Link to="/"><AiOutlineArrowLeft style={{ marginRight: "10px" }} />Voltar para home</Link>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
