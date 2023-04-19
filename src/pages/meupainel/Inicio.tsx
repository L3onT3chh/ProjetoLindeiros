import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { MenuRight } from "../../components/SubMenu/MenuRight";
import { ContainerPainel } from "../css/styled";
import { history } from "util/_helped";
import { cleanDemand, selectCurrentDemands } from "app/reducers/demand/demandSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { IStateData } from "interfaces/components.interface";
import { BiBell, BiEditAlt, BiNavigation, BiUser, BiUserPlus } from "react-icons/bi";
import img from "../../assets/img/painelimg.svg";
import { HiDocumentAdd, HiDocumentDuplicate } from "react-icons/hi";
import { FaHandshake, FaUsers } from "react-icons/fa";
import { findAllByUsersThunk } from "app/reducers/demand/thunk";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import moment from "moment";
import UpdateUser from "components/Popups/subContent/updateUser";
import { updateUser } from "app/reducers/user/userSlice";
import PDefault from "components/Popups";
import { convertToArray } from "util/handleSelectorObj";
import { Notification } from "components/Popups/subContent/notification";
import { IUser } from "interfaces/data/user.interface";
import { ISystemNotify } from "interfaces/global.interface";
import { cleanUserNotify } from "API/User/crud.user";
import { StatisticGraph } from "components/Card/Statistic";
import { DemandByAxe } from "components/Statistics/DemandByAxe/DemandByAxe";
import { DemandByCity } from "components/Statistics/DemandByCity/DemandByCity";
import { cleanNotification } from "app/reducers/auth/authSlice";

export function MeuPainel() {
  const dispatch = useDispatch<AppDispatch>();
  const demands = useSelector(selectCurrentDemands);
  const nav = useNavigate();
  const { auth } = useSelector((state: IStateData) => state);

  const [sendUser, setSendUser] = useState(false);
  const [proposal, setProposal] = useState<any[]>([]);
  const [userUpdate, setUserUpdate] = useState(false);
  const [userNotification, setUserNotification] = useState(false);
  const [notificationObj, setNotificationObj] = useState<ISystemNotify[] | []>([]);

  useEffect(() => {
    console.log(notificationObj.length);
    dispatch(cleanDemand());
    dispatch(findAllByUsersThunk(auth.auth.user[0].id));

    if (typeof auth.auth.user[0].Notify === "object") {
      setNotificationObj(convertToArray(auth.auth.user[0].Notify.Notify));
    }
    // nav("/meupainel/demandas");
  }, []);

  useEffect(() => {
    if (demands.demand.length !== 0) {
      let temp: any[] = [];
      console.log(demands.demand);
      demands.demand.forEach((item: IDemand) => {
        if (item.Proposal) {
          convertToArray(item.Proposal).forEach((prop) => {
            temp.push(prop);
          })
        }
      })

      temp.sort(function (a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      setProposal(temp);
    }
  }, [demands.demand])

  const handleDateAgo = (status: string) => {
    moment.locale('pt-br');
    const date = moment(status);
    return date.fromNow() + " atrás";
  }

  const cleanNotifications = async () => {
    if (notificationObj.length > 0) {
      let ids: string[] = notificationObj.map(notification => notification.id);
      let resp = await cleanUserNotify(ids);

      setNotificationObj([]);
      dispatch(cleanNotification());
    }
  }

  return (
    <ContainerPainel>
      <MenuRight />
      <div className="container home nonadmin">
        {auth.auth.user[0].id &&
          (
            <PDefault
              height="90%"
              width="569"
              title="Editar dados do usuario"
              subtitle="Altere os dados desejados"
              setTrigger={setUserUpdate}
              trigger={userUpdate}
              setPrimaryState={setSendUser}
              primaryValue={sendUser}
              primaryBlocked={sendUser}
            >
              <UpdateUser setPrimary={setSendUser} primaryValue={sendUser} setState={setUserUpdate} trigger={userUpdate} userId={auth.auth.user[0].id} removeSelects={true} />
            </PDefault>
          )
        }
        {notificationObj &&
          (
            <PDefault
              height="90%"
              width="569"
              title="Notificações"
              setTrigger={setUserNotification}
              trigger={userNotification}
              setPrimaryState={cleanNotifications}
              primaryText="Limpar"
              primaryBlocked={(auth.auth.user[0].Notify && notificationObj.length > 0 && notificationObj[0] !== undefined) ? false : true}
            >
              <Notification data={notificationObj} />
            </PDefault>
          )
        }
        <main>
          <div className="top">
            <div className="left">
              <h1>{convertToArray(auth.auth.user)[0].name}&nbsp;<BiUser size={25} color="#777" /></h1>
              <p>Seja muito bem vindo</p>
            </div>
            <div className="bell" onClick={() => setUserNotification(true)}>
              {notificationObj.length > 0 && notificationObj[0] !== undefined &&
                (
                  <div className="notify">{(notificationObj.length > 9) ? "+9" : notificationObj.length}</div>
                )
              }
              <BiBell size={25} color="#b1b1b1" />
            </div>
          </div>
          <div className="tutorial">
            <div className="info">
              <h1>Comece por aqui</h1>
              <p>Sigas as instruções abaixo para utilizar o sistema.</p>
              <div className="steps">
                <div className="item">
                  <div className="icon">
                    <BiNavigation color="#63b6ff" size={30} />
                  </div>
                  <p>Utilize o menu lateral para navegar entre as paginas do site na aba acesso, e controle suas demandas na aba demandas e consulte seus dados na aba usuario.</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <HiDocumentAdd color="#63b6ff" size={30} />
                  </div>
                  <p><b>Inserir demanda</b> é um atalho ao formulario de cadastro de demandas, clique nele, preencha os dados para inserir sua nova demanda.</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <HiDocumentDuplicate color="#63b6ff" size={30} />
                  </div>
                  <p><b>Listar demandas</b> é a pagina onde contem todas as demandas cadastradas por você, lá é possivel deletar, editar-las assim como consultar as propostas da sua demanda.</p>
                </div>
                <div className="item">
                  <div className="icon">
                    <FaHandshake color="#63b6ff" size={30} />
                  </div>
                  <p>Para consultar as propostas de cada demanda clique no botão <b>Ver mais</b> na tela de <b>Listar demandas</b>, la é possivel consultar os dados, aprovar ou deixar pendente uma proposta.</p>
                </div>
                {auth.auth.user[0].userType === "Administrador" &&
                  (
                    <>
                      <div className="item">
                        <div className="icon">
                          <FaUsers color="#63b6ff" size={30} />
                        </div>
                        <p>Clique em <b>Listar Usuarios</b> para consultar a conta de todos usuarios cadastrados no sistema, assim como adicionar, editar e deletar os mesmos.</p>
                      </div>
                      <div className="item">
                        <div className="icon">
                          <BiUserPlus color="#63b6ff" size={30} />
                        </div>
                        <p>Acesse o menu de <b>Pedidos de cadastro</b> para consultar quem solicitou cadastro no sistema, onde é possivel analisar a proposta e aceitar ou negar a conta.</p>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
          {auth.auth.user[0].userType === "Administrador" &&
            (
              <div className="statistic">
                <StatisticGraph
                  className="content-box left"
                  title="Nº de demandas por eixos"
                  width="100%"
                  height="fit-content"
                >
                  <DemandByAxe />
                </StatisticGraph>
                <StatisticGraph
                  className="content-box right"
                  title="Nº de demandas por cidade"
                  width="100%"
                  height="fit-content"
                >
                  <DemandByCity />
                </StatisticGraph>
              </div>
            )
          }
        </main>
        <aside>
          <div className="profile">
            <div className="controls">
              <p>Meu perfil</p>
              <button onClick={() => setUserUpdate(true)}><BiEditAlt size={25} color="#b1b1b1" /></button>
            </div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <h2>{convertToArray(auth.auth.user)[0].name}</h2>
            <p>{auth.auth.user[0].userType}</p>
          </div>

          <div className="proposalRecent">
            <h2>Propostas recentes</h2>

            {proposal && proposal.length > 0 ?
              (
                <ul>
                  {proposal && proposal.slice(0, 5).map((item: IProposal, index) => (
                    <li className="item">
                      <h4>{item.description.substring(0, 20) + "..."}</h4>
                      <p><b>Feito por: </b>{item.User.name} {handleDateAgo(item.createdAt)}</p>
                    </li>
                  ))
                  }
                </ul>
              ) :
              (
                <div className="notFound">Nenhuma proposta encontrada</div>
              )
            }
          </div>
        </aside>
      </div>
    </ContainerPainel>
  );
}
