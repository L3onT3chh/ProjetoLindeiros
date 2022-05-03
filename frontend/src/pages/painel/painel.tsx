/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "assets/css/painel.css";
import Users from "assets/data/user";
import { logo } from "assets/img";
// Images
import user from "assets/img/user.png";
import { Container } from "../demands/style";
import { PopUpUserCad } from "components/modais/user/cadUser";
import { FindAllUser } from "API/Users/find.api";
import { PopupDemandas } from "components/modais/demandas/demandas";

export const Painel = () => {
  const [newUsers, _] = useState([...Users]);
  const [btnTrigger, setTrigger] = useState(false);
  const [btnTrigger1, setTrigger1] = useState(false);
  const [btnTrigger2, setTrigger2] = useState(false);
  FindAllUser();
  const handleRemoveUser = (id: number) => {
    // setNewUsers(deleteUser(id, newUsers));
  };
  return (
    <>
      <div>
        <div className="topBar">
          <Container className="img" background={logo} />
          <div className="info">
            <img src={user} width={45} height={45} />
            <div>
              <p>Seja bem vindo novamente</p>
              <b>{"Arlete Beuren - root"}</b>
            </div>
          </div>
          <button className="btnLogOff">
            <Link to="/">
              <i className="fas fa-power-off" />
            </Link>
          </button>
        </div>
        <div className="painelBody">
          <aside className="leftBar bgcolor-secondary">
            <h1>Painel</h1>
            <ul>
              <Link to="/">
                <li>
                  <i className="fas fa-home" />
                  <p>Inicio</p>
                </li>
              </Link>
              <li>
                <button onClick={() => setTrigger1(true)}>
                  <i className="fas fa-user-plus" />
                  <p>Cadastro</p>
                  <PopUpUserCad
                    trigger={btnTrigger1}
                    setTrigger={setTrigger1}
                  />
                </button>
              </li>
              <li className="active">
                <i className="fas fa-users" />
                <p>Usuarios</p>
              </li>
              <li>
                <i className="fas fa-key" />
                <p>Permissões de usuario</p>
              </li>
            </ul>
          </aside>
          <section className="content">
            <div className="usuario">
              <section className="head" style={{ marginBottom: 20 }}>
                <div className="line">
                  <button
                    id="btnAddUser"
                    onClick={() => setTrigger(true)}
                    className="bgcolor-secondary"
                  >
                    Adicionar novo usuario <i className="fas fa-user-plus" />
                  </button>

                  <PopupDemandas trigger={btnTrigger} setTrigger={setTrigger} />

                  <div className="controls">
                    <div className="input">
                      <input type="text" placeholder="Encontrar usuario" />
                      <i className="fas fa-search color-secondary" />
                    </div>
                    <select
                      className="userOrder"
                      style={{
                        padding: "0 15px",
                        border: "1px solid rgba(0, 0, 0, 0.075)",
                      }}
                    >
                      <option>Ordem Crescente</option>
                      <option>Ordem Descrescente</option>
                    </select>
                  </div>
                </div>
                <div className="filter">
                  <div className="block">
                    <p>Tipo de usuario</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Por instituição</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Por município</p>
                    <select>
                      <option />
                    </select>
                  </div>
                  <div className="block">
                    <p>Algum filtro</p>
                    <select>
                      <option />
                    </select>
                  </div>
                </div>
              </section>
              <section className="body">
                <table>
                  <thead
                    className="bgcolor-secondary"
                    style={{ position: "sticky", top: 0 }}
                  >
                    <tr>
                      <th>Ativo</th>
                      <th>Nome</th>
                      <th>Município</th>
                      <th>Usuario</th>
                      <th>Contato</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUsers.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.city}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>
                          <button>
                            <i className="fas fa-pencil" />
                          </button>
                          <button onClick={(e) => handleRemoveUser(user.id)}>
                            <i className="fas fa-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
