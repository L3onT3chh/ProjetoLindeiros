/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { ContentProfile } from "components/style";
import InputStyle from "components/Inputs";
import { useForm } from "util/form/useForm";
import { createUserThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { IUserPost } from "interfaces/data/user.interface";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { IStateData } from "interfaces/components.interface";

function RegisterUser() {
  const dispatch = useDispatch<AppDispatch>();
  const [typeUser, setTypeUser] = useState("");
  const initialValue: IUserPost = {
    name: "",
    email: "",
    cpf: "",
    born_date: "",
    address: "",
    phone: 0,
    phone_ddd: 0,
    user_type: "",
    postalCode: 0,
    city: "",
    password: "",
  };
  const { userTypes } = useSelector((state: IStateData) => state);
  const { onChange, values } = useForm(initialValue);
  const handleSaveData = async (valuesSave: IUserPost) => {
    dispatch(
      createUserThunk({
        ...valuesSave,
        user_type: typeUser,
      }),
    );
  };
  return (
    <ContentProfile>
      <div className="content-default">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveData(values);
          }}
        >
          <div className="content-basic-data">
            <h1 className="title-h3">Dados básicos</h1>
            <InputStyle
              onChange={onChange}
              name="name"
              placeholder="Nome"
              title=""
              type="text"
              className="form-control-demand"
            />
            <InputStyle
              onChange={onChange}
              name="email"
              placeholder="Email"
              title=""
              type="email"
              className="form-control-demand"
            />
            <InputStyle
              onChange={onChange}
              placeholder="CPF"
              name="cpf"
              title=""
              type="number"
              className="form-control-demand"
            />
            <div className="double-data">
              <InputStyle
                onChange={onChange}
                placeholder="DDD"
                title=""
                name="phone_ddd"
                type="number"
                className="text-double"
              />
              <InputStyle
                onChange={onChange}
                placeholder="Nº de telefone"
                title=""
                name="phone"
                type="phone"
                className="text-double"
              />
            </div>
            <div className="double-data">
              <InputStyle
                onChange={onChange}
                placeholder="Data de nascimento"
                name="born_date"
                title=""
                type="date"
                className="text-double"
              />
              <InputStyle
                name="postalCode"
                onChange={onChange}
                placeholder="Código Postal"
                title=""
                type="number"
                className="text-double"
              />
            </div>
            <div className="double-data">
              <SelectMenuAlternative
                setState={setTypeUser}
                name="user_type"
                className="text-double text-popup"
                options={userTypes.types}
              />
              <InputStyle
                onChange={onChange}
                name="city"
                placeholder="Município"
                title=""
                type="text"
                className="text-double"
              />
            </div>
            <InputStyle
              name="address"
              onChange={onChange}
              placeholder="Endereço completo"
              title=""
              type="text"
              className="form-control-demand"
            />
            <InputStyle
              name="password"
              onChange={onChange}
              placeholder="Senha"
              title=""
              type="password"
              className="form-control-demand"
            />
          </div>
          <div className="form-control-demand" />
          <div className="btns-popup">
            <button className="btn-close-two">Fechar</button>
            <button className="btn-send">Enviar dados</button>
          </div>
          <div />
        </form>
      </div>
    </ContentProfile>
  );
}
export default RegisterUser;
