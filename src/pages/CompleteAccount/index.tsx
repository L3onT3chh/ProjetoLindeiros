import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import React, { useEffect, useState } from "react";
import imgNotFound from "assets/img/image 16.png";
import ButtonDefault from "components/Buttons/ButtonDefault";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputStyle from "components/Inputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { showErrorMessage } from "util/function";
import { changePassword, linkVerify } from "API/User/crud.user";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { createUserRequestThunk } from "app/reducers/user/thunk";

export function CompleteAccount() {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const { link } = useParams();

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [phone_ddd, setDDD] = useState("");
  const [phone, setPhone] = useState("");
  const [born_date, setBdate] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  useEffect(()=>{
    if(link){
      verifyLink(link);
    }
  }, [link]);

  const handleRegister = async () => {
    if(name.length === 0 || cpf.length === 0 || phone_ddd.length === 0 || phone.length === 0 || born_date.length === 0 || password.length === 0 || confPassword.length === 0) {
        showErrorMessage("Preencha todos os campos", "error");
        return;
    }
    if(password.length !== confPassword.length) {
      showErrorMessage("Senhas não coincidem", "error");
      return;
    }

    dispatch(createUserRequestThunk({
      name,
      cpf,
      phone_ddd,
      phone,
      born_date,
      password,
      link
    }))

    nav("/login");
  }

  const verifyLink = async (link:string) =>{
    let resp = await linkVerify(link);
    if(!resp.response){
      nav("/");
    }
  }
  return (
    <ContainerPage className="retrive complete">
      <div className="container-page">
        <div className="card">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="content-basic-data">
              <h1>Dados básicos</h1>
              <InputStyle
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Nome"
                valueChanges={name}
                maxLength={60}
                marginB="10px"
                title=""
                type="text"
                className="form-control-demand"
              />
              <InputStyle
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF"
                marginB="10px"
                name="cpf"
                valueChanges={cpf}
                title=""
                maxLength={11}
                type="number"
                className="form-control-demand"
              />
              <div className="double-data" style={{ marginBottom: "10px" }}>
                <InputStyle
                  onChange={(e) => setDDD(e.target.value)}
                  placeholder="phone_ddd"
                  title=""
                  valueChanges={phone_ddd}
                  maxLength={2}
                  name="phone_ddd"
                  type="number"
                  className="text-double"
                />
                <InputStyle
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nº de telefone"
                  title=""
                  valueChanges={phone}
                  maxLength={9}
                  name="phone"
                  type="phone"
                  className="text-double"
                />
              </div>
              <InputStyle
                onChange={(e) => setBdate(e.target.value)}
                placeholder="Data de nascimento"
                name="born_date"
                valueChanges={born_date}
                title=""
                type="date"
                className="form-control-demand"
              />
              <h1 style={{ marginTop: "20px" }}>Criar uma senha de usuario</h1>
              <InputStyle
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                marginB="10px"
                valueChanges={password}
                maxLength={60}
                placeholder="Senha"
                title=""
                type="password"
                className="form-control-demand"
              />
              <InputStyle
                name="password"
                onChange={(e) => setConfPassword(e.target.value)}
                valueChanges={confPassword}
                maxLength={60}
                placeholder="Confirmar senha"
                title=""
                type="password"
                className="form-control-demand"
              />
            </div>
          </form>
          <div style={{ marginBottom: "15px" }}></div>
          <button onClick={handleRegister}>Enviar</button>
          <div className="back">
            <Link to="/"><AiOutlineArrowLeft style={{ marginRight: "10px" }} />Voltar para home</Link>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
