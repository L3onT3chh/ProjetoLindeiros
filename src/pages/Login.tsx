/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { useEffect } from "react";
// import { AppDispatch } from "app/store";
import { LoadingDefault } from "components/Loading";
import NavBar from "components/NavBar";
import { IUserLogin } from "interfaces/data/user.interface";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "util/form/useForm";
import ButtonForm from "components/Buttons/ButtonForm";
import { AppDispatch } from "app/store";
import { useNavigate } from "react-router-dom";
import { authLoginThunk } from "app/reducers/auth/thunk";
// import { selectCurentUser } from "app/reducers/auth/authSlice";
import { IStateData } from "interfaces/components.interface";
import { addUser, lock } from "../assets/icons";
// import ButtonCard from "../components/Buttons/ButtonCard";
import CardDefault from "../components/Card/CardDefault";
import WelcomeLogin from "../components/Card/Welcome";
import InputStyle from "../components/Inputs";
import SublinedText from "../components/Label/Sublined";
import { ContainerPage } from "./css/styled";
import { Link } from "react-router-dom";
import { convertToArray } from "util/handleSelectorObj";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();
  const { users, auth } = useSelector((state: IStateData) => state);

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
  };

  useEffect(() => {
    if (auth.auth.logged) {
      navigator("/meupainel", { replace: true });
      return;
    }
  }, [auth.auth])

  return (
    <>
      <NavBar />
      <LoadingDefault active={users.loading} />
      <ContainerPage style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <WelcomeLogin />

        <div className="login">
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
              height="50px"
              onChange={onChange}
              required
              placeholder="Digite o seu e-mail"
            />

            <InputStyle
              onChange={onChange}
              name="password"
              title="Senha"
              type="password"
              height="50px"
              required
              placeholder="Digite a sua senha"
            />
            <p className="forgotText"><Link to="/forgoutPassword">Esqueci minha senha</Link></p>
            <ButtonForm width="100%" className="form-control-demand-forgout">
              <p>Enviar dados</p>
            </ButtonForm>{" "}
          </form>

          <div className="container-footer">
            <p className="createAccount">Ainda não possui uma conta? <Link to="/register"><b>clique aqui</b></Link></p>
          </div>
        </div>
        <ToastContainer />
      </ContainerPage>
    </>
  );
}

export default Login;
