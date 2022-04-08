import { ReactChild, ReactChildren } from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { PopUp } from "../representantes/styled";
import { ContainerUser } from "./style";

type IPopUp = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
};

export const PopUpUserCad = (props: IPopUp) => {
  return props.trigger ? (
    <PopUp>
      <ContainerUser>
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
              <input
                className="text-field"
                type="text"
                placeholder="Nome completo"
              />
              <input
                className="text-field"
                type="text"
                placeholder="Endereço completo"
              />

              <div className="user-personal">
                <input
                  className="text-field"
                  type="text"
                  required
                  placeholder="N° do CPF"
                />
                <input type="date" required placeholder="Data de nascimento" />
              </div>

              <div className="user-city">
                <input
                  className="text-field"
                  type="text"
                  placeholder="Município"
                  required
                  id="field-municipio"
                />
                <input
                  required
                  id="field-uf"
                  type="text"
                  placeholder="UF"
                  minLength={2}
                  maxLength={2}
                />
              </div>

              <select name="user-type" className="type-user">
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
                  className="text-field"
                  type="number"
                  placeholder="DDD"
                  required
                  id="field-ddd"
                  minLength={2}
                  maxLength={3}
                />
                <input
                  className="text-field"
                  type="phone"
                  id="field-phone"
                  required
                  placeholder="Telefone"
                  minLength={9}
                />
                <input
                  type="email"
                  className="text-field"
                  id="field-email"
                  required
                  placeholder="E-mail"
                />
              </div>

              <div className="user-login">
                <input
                  type="text"
                  required
                  className="text-field"
                  placeholder="Usuário"
                />
              </div>

              <div className="user-valid-password">
                <input type="password" required placeholder="Password" />
                <input
                  type="password"
                  required
                  placeholder="Confirme a senha"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-send-user">
          <div></div>
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
