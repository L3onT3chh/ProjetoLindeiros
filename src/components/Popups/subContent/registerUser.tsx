/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import { ContentProfile } from "components/style";
import InputStyle from "components/Inputs";
import { useForm } from "util/form/useForm";
import { createUserThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserPost } from "interfaces/data/user.interface";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { IStateData } from "interfaces/components.interface";
import { getToast, setMessageToToast } from "app/reducers/toast/toastSlice";
import cep from "cep-promise";
import { showErrorMessage } from "util/function";
import { selectUsersMessage } from "app/reducers/user/userSlice";
import { exit } from "process";
// import { findByCep } from "API/Cep";

interface props {
  modal: any;
  setPrimary: any;
  primaryValue: any;
  setState?: any;
}

function RegisterUser({ modal, setPrimary, primaryValue, setState  }: props) {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: IStateData) => state.users.loading);
  const [typeUser, setTypeUser] = useState("");
  const [cityUser, setCity] = useState("");
  const [cityDefault, setCityDefault] = useState("");
  const [addressFull, setAddressFul] = useState("");

  const [reset, setReset] = useState(false);

  const initialValue: IUserPost = {
    name: "",
    email: "",
    cpf: "",
    born_date: "",
    phone: "",
    phone_ddd: "",
    userType: "",
    city: "",
    password: "",
  };
  const { userTypes, city } = useSelector((state: IStateData) => state);
  const { onChange, values } = useForm(initialValue);
  const form: any = useRef();
  const handleSaveData = async (valuesSave: IUserPost) => {
    let pass = true;
    valuesSave.city = cityUser;
    valuesSave.userType = typeUser;

    Object.values(valuesSave).forEach((value) => {
      if (value.length === 0 || value === undefined) {
        pass = false;
      }
    })

    if (!pass || valuesSave.userType === "standard") {
      showErrorMessage("Todos os campos são obrigatórios", "error");
      return;
    }

    if (valuesSave.password !== valuesSave.confPassword) {
      showErrorMessage("Senhas não coincidem", "error");
      return;
    }

    dispatch(
      createUserThunk({
        ...valuesSave,
        userType: typeUser
      }),
    );

    setReset(true);
    form.target.reset();
  };

  useEffect(()=>{
    if(!loading && reset){
      setState(false);
      setPrimary(false);
    }
  }, [loading, reset, setReset, setPrimary])

  useEffect(() => {
    if (primaryValue) {
      handleSaveData(values);
    }
  }, [primaryValue]);

  useEffect(() => {
    if (form) {
      form.current.reset();
    }
  }, [modal])

  return (
    <ContentProfile>
      <div className="content-default">
        <form
          id="form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          ref={form}
        >
          <input type="hidden" value="something" />
          <div className="content-basic-data">
            <h1 className="title-h3">Dados básicos</h1>
            <InputStyle
              onChange={onChange}
              name="name"
              placeholder="Nome"
              maxLength={60}
              title=""
              type="text"
              className="form-control-demand"
            />
            <InputStyle
              onChange={onChange}
              name="email"
              placeholder="Email"
              autocomplete
              maxLength={80}
              title=""
              type="email"
              className="form-control-demand"
            />
            <InputStyle
              onChange={onChange}
              placeholder="CPF (somente numeros)"
              name="cpf"
              title=""
              maxLength={11}
              type="text"
              className="form-control-demand"
            />
            <div className="double-data" style={{ marginTop: "15px" }}>
              <InputStyle
                onChange={onChange}
                placeholder="DDD"
                title=""
                maxLength={2}
                name="phone_ddd"
                type="text"
                className="text-double"
              />
              <InputStyle
                onChange={onChange}
                placeholder="Nº de telefone"
                title=""
                maxLength={9}
                name="phone"
                type="text"
                className="text-double"
              />
            </div>
            <InputStyle
              onChange={onChange}
              placeholder="Data de nascimento"
              name="born_date"
              title="Data de nascimento"
              type="date"
              className="form-control-demand"
            />
            <div className="double-data" style={{ marginTop: "15px" }}>
              <SelectMenuAlternative
                setState={setTypeUser}
                name="user_type"
                className="text-double text-popup"
                options={[
                  {
                    name: "Tipo de usuário",
                    id: "standard",
                  },
                  ...userTypes.types
                ]}
              />
              <SelectMenuAlternative
                valueDefault={cityDefault}
                setState={setCity}
                name="city_id"
                className="text-double text-popup"
                options={city.city}
              />
            </div>
            <h1 className="title-h3" style={{ marginTop: "20px" }}>Senha do usuario</h1>
            <InputStyle
              name="password"
              onChange={onChange}
              placeholder="Senha"
              autocomplete
              maxLength={60}
              title=""
              type="password"
              className="form-control-demand"
            />
            <InputStyle
              name="confPassword"
              onChange={onChange}
              placeholder="Confirmar senha"
              autocomplete
              title=""
              type="password"
              className="form-control-demand"
            />
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}
export default RegisterUser;
