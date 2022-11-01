import { FindAllUser } from "API/Users/find.api";
import { IUser } from "interfaces/IfaceProps";
import React, { useState } from "react";
import { ReactChild, ReactChildren } from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { PopUp } from "../representantes/styled";
import { ContainerPermission } from "./styled";

type IPopupPermission = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
};

export const PopPermission = (props: IPopupPermission) => {
  const [userData, setUserData] = useState<IUser[]>();
  const [userSelect, setUserSelect] = useState<IUser>();

  const handleGetUserData = async () => {
    const user = await FindAllUser();

    user?.response ? setUserData(user.response) : setUserData([]);
    if (user?.response) {
      setUserSelect(user?.response[0]);
    }
  };
  const handleGetCid = (id: String) => {

    const user = userData?.filter((user) => user.id == id);

    user && setUserSelect(user[0]);
  };

  // ADICIONAR VALIDAÇÃO DE PERMISSÕES
  // const handleUpdateUser = (permission: String) => {
  //    if(userSelect){
  //      const {  } = userSelect;

  //    }
  // }

  handleGetUserData();

  return props.trigger ? (
    <PopUp>
      <ContainerPermission>
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose size={"24px"} />
        </button>
        <div className="data-header">
          <h2>Controle de permissão</h2>
          <span></span>
        </div>
        <div className="data-content">
          <div className="title-data-permission">
            <h3>Listagem de representantes</h3>
            <AiOutlineUser className="user-icon" size={"25"} />
          </div>

          <div className="selection_user">
            <select
              onChange={(e) => handleGetCid(e.target.value)}
              required
              name="user-type"
              className="type-permission t-user"
            >
              {userData &&
                userData?.map((user: IUser) => (
                  <option key={user.id} className="text-field" value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="permission-form">
            <input
              required
              className="text-field"
              name="name"
              type="text"
              placeholder={userSelect?.city}
              disabled
            />
            <select
              required
              name="user-type"
              className="type-permission t-permission"
            >
              <option className="text-field" value="">
                Tipo de usuário
              </option>
              <option className="text-field" value="">
                Administrador
              </option>
              <option className="text-field" value="">
                Associação comercial
              </option>
              <option className="text-field" value="">
                Executivo
              </option>
              <option className="text-field" value="">
                Legislativo
              </option>
              <option className="text-field" value="">
                Universidade
              </option>
              <option className="text-field" value="">
                Representante
              </option>
            </select>
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
          <button className="cad-user">Alterar</button>
        </div>

        <script></script>
      </ContainerPermission>
    </PopUp>
  ) : (
    <div></div>
  );
};
