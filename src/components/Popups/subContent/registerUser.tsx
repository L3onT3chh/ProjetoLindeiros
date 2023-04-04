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
// import { findByCep } from "API/Cep";

interface props {
  modal: any;
}

function RegisterUser({ modal }: props) {
  const dispatch = useDispatch<AppDispatch>();
  const [typeUser, setTypeUser] = useState("");
  const [cityUser, setCity] = useState("");
  const [cityDefault, setCityDefault] = useState("");
  const [addressFull, setAddressFul] = useState("");

  const initialValue: IUserPost = {
    name: "",
    email: "",
    cpf: "",
    born_date: "",
    address: "",
    phone: "",
    phone_ddd: "",
    userType: "",
    city: "",
    password: "",
  };
  const { userTypes, city } = useSelector((state: IStateData) => state);
  const { onChange, values } = useForm(initialValue);
  const form: any = useRef();
  const handleSaveData = async (form: any, valuesSave: IUserPost) => {
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

    dispatch(
      createUserThunk({
        ...valuesSave,
        userType: typeUser,
        city: cityUser,
      }),
    );

    form.target.reset();
  };

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
            handleSaveData(e, values);
          }}
          ref={form}
        >
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
              maxLength={80}
              title=""
              type="email"
              className="form-control-demand"
            />
            <InputStyle
              onChange={onChange}
              placeholder="CPF"
              name="cpf"
              title=""
              maxLength={11}
              type="number"
              className="form-control-demand"
            />
            <div className="double-data" style={{ marginTop: "15px" }}>
              <InputStyle
                onChange={onChange}
                placeholder="DDD"
                title=""
                maxLength={2}
                name="phone_ddd"
                type="number"
                className="text-double"
              />
              <InputStyle
                onChange={onChange}
                placeholder="Nº de telefone"
                title=""
                maxLength={9}
                name="phone"
                type="phone"
                className="text-double"
              />
            </div>
            <InputStyle
              onChange={onChange}
              placeholder="Data de nascimento"
              name="born_date"
              title=""
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
            <InputStyle
              name="password"
              onChange={onChange}
              placeholder="Senha"
              maxLength={60}
              title=""
              type="password"
              className="form-control-demand"
            />
          </div>
          <div className="form-control-demand" />
          <div className="btns-popup">
            <button className="btn-close-two">Limpar</button>
            <button className="btn-send">Enviar dados</button>
          </div>
          <div />
        </form>
      </div>
    </ContentProfile>
  );
}
export default RegisterUser;
