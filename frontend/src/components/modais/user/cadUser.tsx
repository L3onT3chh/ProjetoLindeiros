import { createUser } from "API/Users/crud.api";
import React, { ReactChild, ReactChildren, useState } from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { PopUp } from "../representantes/styled";
import { ContainerUser } from "./style";

type IPopUp = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
};
const initialValueForm = {
  name: "",
  address: "",
  cpf: "",
  city: "",
  phone_ddd: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  born_date: "",
  user_type: "",
};

export const PopUpUserCad = (props: IPopUp) => {
  const [userSave, updateFormData] = useState(initialValueForm);

  const handleSaveData = (e: any) => {
    updateFormData({
      ...userSave,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return props.trigger ? (
    <PopUp>
      <ContainerUser
        id="form-dataSend"
        method="post"
        action="#"
        onSubmit={async (e: any) => {
          e.preventDefault();
          const data = await createUser({ userSave });
          if (data?.status === 200) {
            alert(data.message);
          } else {
            alert("Verifique os parâmetros e tente novamente");
            props.setTrigger(false);
          }
        }}
      >
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose size={"24px"} />
        </button>
        <div className="data-header">
          <h2>Cadastrar Usuário</h2>
          <span></span>
        </div>
        <div className="data-content">
          <div className="form-data">
            <div className="title-data-user">
              <h3>Dados do usuário</h3>
              <AiOutlineUser size={25} />
            </div>

            <div className="user-data-form">
              <div className="container-div_one">
                <input
                  onChange={handleSaveData}
                  required
                  className="text-field"
                  name="name"
                  type="text"
                  placeholder="Nome completo"
                />
                <input
                  onChange={handleSaveData}
                  required
                  className="text-field"
                  type="text"
                  name="address"
                  placeholder="Endereço completo"
                />

                <div className="user-personal">
                  <input
                    onChange={handleSaveData}
                    required
                    className="text-field"
                    type="text"
                    placeholder="N° do CPF"
                    name="cpf"
                  />
                  <input
                    onChange={handleSaveData}
                    type="date"
                    required
                    placeholder="Data de nascimento"
                  />
                </div>

                <div className="user-city">
                  <input
                    onChange={handleSaveData}
                    className="text-field"
                    type="text"
                    placeholder="Município"
                    required
                    id="field-municipio"
                    name="city"
                  />
                  <input
                    onChange={handleSaveData}
                    required
                    id="field-uf"
                    type="text"
                    placeholder="UF"
                    minLength={2}
                    maxLength={2}
                    name="uf_city"
                  />
                </div>
              </div>
              <div className="container-div_two">
                <select required name="user-type" className="type-user">
                  <option className="text-field" value="">
                    Tipo de usuário
                  </option>
                  <option className="text-field" value="">
                    Administrador
                  </option>
                  <option className="text-field" value="">
                    Representante
                  </option>
                </select>

                <div className="user-contact">
                  <input
                    onChange={handleSaveData}
                    name="phone_ddd"
                    className="text-field"
                    type="number"
                    placeholder="DDD"
                    required
                    id="field-ddd"
                    minLength={2}
                    maxLength={3}
                  />
                  <input
                    onChange={handleSaveData}
                    className="text-field"
                    type="phone"
                    id="field-phone"
                    required
                    placeholder="Telefone"
                    minLength={9}
                    name="phone"
                  />
                  <input
                    onChange={handleSaveData}
                    name="email"
                    type="email"
                    className="text-field"
                    id="field-email"
                    required
                    placeholder="E-mail"
                  />
                </div>

                <div className="user-login">
                  <input
                    onChange={handleSaveData}
                    type="text"
                    required
                    name="username"
                    className="text-field"
                    placeholder="Usuário"
                  />
                </div>

                <div className="user-valid-password">
                  <input
                    onChange={handleSaveData}
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Confirme a senha"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-send-user">
          <button
            onClick={() => {
              props.setTrigger(false);
            }}
            className="exit-user"
          >
            Cancelar
          </button>
          <button className="cad-user">Cadastrar usuário</button>
        </div>
      </ContainerUser>
    </PopUp>
  ) : (
    <div></div>
  );
};
