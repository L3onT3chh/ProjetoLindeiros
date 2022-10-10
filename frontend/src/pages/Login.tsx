/* eslint-disable consistent-return */
import React, { useEffect } from "react";
// import { AppDispatch } from "app/store";
import { LoadingDefault } from "components/Loading";
import NavBar from "components/NavBar";
import { IStateData } from "interfaces/components.interface";
import { IUserLogin } from "interfaces/data/user.interface";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "util/form/useForm";
import { useNavigate } from "react-router";
import ButtonForm from "components/Buttons/ButtonForm";
// import { authLoginThunk } from "app/reducers/auth/thunk";
import Home from "pages/Home";
import { AppDispatch } from "app/store";
import { authLoginThunk } from "app/reducers/auth/thunk";
import { addUser, lock } from "../assets/icons";
// import ButtonCard from "../components/Buttons/ButtonCard";
import CardDefault from "../components/Card/CardDefault";
import WelcomeLogin from "../components/Card/Welcome";
import InputStyle from "../components/Inputs";
import SublinedText from "../components/Label/Sublined";
import { ContainerPage } from "./css/styled";

function Login() {
  const { users, auth } = useSelector((state: IStateData) => state);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // const toastId = useRef();
  const initialState: IUserLogin = {
    username: "",
    password: "",
  };

  const { onChange, values } = useForm(initialState);
  const handleSaveData = (data: any) => {
    dispatch(
      authLoginThunk({
        ...data,
      }),
    );
    if (auth.auth.jwt !== " ") navigate("/painel", { replace: true });
    return <Home />;
  };

  useEffect(() => {
    if (users.tryLogin) {
      if (users.error !== "") {
        toast(users.error, {
          autoClose: 3000,
          type: "error",
        });
      } else if (users.message !== "") {
        navigate("/painel");
      }
    }
  }, [navigate, users.error, users.message, users.tryLogin]);

  return (
    <>
      <NavBar />
      <LoadingDefault active={users.loading} />
      <ContainerPage style={{ display: "flex", height: "100vh" }}>
        <WelcomeLogin />

        <div className="login">
          <SublinedText size="32" title="Login" />

          <form
            autoSave="off"
            autoComplete="off"
            className="form-login"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveData(values);
            }}
          >
            <InputStyle
              title="Email"
              name="username"
              type="email"
              onChange={onChange}
              required
              placeholder="Digite o seu e-mail"
            />
            <span> </span>
            <InputStyle
              onChange={onChange}
              name="password"
              title="Senha"
              type="password"
              required
              placeholder="Digite a sua senha"
            />
            <ButtonForm width="100%" className="form-control-demand-forgout">
              <p>Enviar dados</p>
            </ButtonForm>{" "}
          </form>

          <div className="container-footer">
            <CardDefault
              width="224px"
              height="154px"
              title="Esqueci minha senha"
              icon={lock}
              url="/forgoutPassword"
            />
            <CardDefault
              width="224px"
              height="154px"
              title="Não possui cadastro?"
              icon={addUser}
              url="/register"
            />
          </div>
        </div>
        <ToastContainer />
      </ContainerPage>
    </>
  );
}

export default Login;
