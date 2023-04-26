import NavBar from "components/NavBar";
import { ContainerPage } from "pages/css/styled";
import React, { useEffect, useRef, useState } from "react";
import imgNotFound from "assets/img/image 16.png";
import ButtonDefault from "components/Buttons/ButtonDefault";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputStyle from "components/Inputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { showErrorMessage } from "util/function";
import { changePassword, linkVerify } from "API/User/crud.user";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { createUserRequestThunk } from "app/reducers/user/thunk";
import { cleanMessage, cleanStatus, usersErrors, usersStatus } from "app/reducers/user/userSlice";
import { IStateData } from "interfaces/components.interface";

export function CompleteAccount() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(usersStatus);
  const { error } = useSelector((state: IStateData) => state.users);
  const nav = useNavigate();
  const form: any = useRef();
  const { link } = useParams();

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [phone_ddd, setDDD] = useState("");
  const [phone, setPhone] = useState("");
  const [born_date, setBdate] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [finish, setFinish] = useState(false);

  useEffect(()=>{
    dispatch(cleanStatus());
  }, [])

  useEffect(() => {
    if (link) {
      verifyLink(link);
    }
  }, [link]);

  useEffect(() => {
    if (form.current[3]) {
      form.current[3].value = "";
      form.current.reset();
    }
  }, [form]);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    dispatch(cleanStatus());

    if (name.length === 0 || cpf.length === 0 || phone_ddd.length === 0 || phone.length === 0 || born_date.length === 0 || password.length === 0 || confPassword.length === 0) {
      showErrorMessage("Preencha todos os campos", "error");
      return;
    }
    if (password.length !== confPassword.length) {
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

    setFinish(true);
  }

  useEffect(() => {
    console.log(status);
    if(status === 200 && finish){
      nav("/login");
    }
  }, [status, finish]);

  const verifyLink = async (link: string) => {
    let resp = await linkVerify(link);
    if (!resp.response) {
      nav("/");
    }
  }
  return (
    <ContainerPage className="retrive complete">
      <div className="container-page">
        <div className="card">
          <form action="" className="form-login" onSubmit={handleRegister} ref={form}>
            <input type="hidden" value="something" />
            <div className="content-basic-data">
              <h1>Dados básicos</h1>
              <InputStyle
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Nome"
                valueChanges={name}
                maxLength={60}
                marginB="10px"
                autocomplete
                title=""
                type="text"
                className="form-control-demand"
              />
              <InputStyle
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF"
                marginB="10px"
                name="cpf"
                autocomplete
                valueChanges={cpf}
                title=""
                maxLength={11}
                type="text"
                className="form-control-demand"
              />
              <div className="double-data" style={{ marginBottom: "10px" }}>
                <InputStyle
                  onChange={(e) => setDDD(e.target.value)}
                  placeholder="DDD"
                  title=""
                  autocomplete
                  valueChanges={phone_ddd}
                  maxLength={2}
                  name="phone_ddd"
                  type="text"
                  className="text-double"
                />
                <InputStyle
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nº de telefone"
                  title=""
                  autocomplete
                  valueChanges={phone}
                  maxLength={9}
                  name="phone"
                  type="text"
                  className="text-double"
                />
              </div>
              <InputStyle
                onChange={(e) => setBdate(e.target.value)}
                placeholder="Data de nascimento"
                name="born_date"
                autocomplete
                valueChanges={born_date}
                title="Data de nascimento"
                type="date"
                className="form-control-demand"
              />
              <h1 style={{ marginTop: "20px" }}>Criar uma senha de usuario</h1>
              <InputStyle
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                marginB="10px"
                autocomplete
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
                autocomplete
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
