import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { PMeuPerfil } from "components/Popups/Profile";
import { Link } from "react-router-dom";
import { MyProfile } from "components/Popups/subContent/Profile";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import PDefault from "components/Popups";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurentUser } from "app/reducers/auth/authSlice";
import { AppDispatch } from "app/store";
import { demands, users } from "../../assets/icons";
import { ChipCard } from "../Chips/ChipCard";
import { ContainerMenuRight } from "../style";
import { convertToArray } from "util/handleSelectorObj";
import { BiNews, BiPaperPlane, BiPaperclip, BiUser, BiUserX } from "react-icons/bi";
import { FaRegHandshake, FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi";
import RegisterNews from "components/Popups/subContent/registerNews";

export function MenuRight() {
  const dispatch = useDispatch<AppDispatch>();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);
  const [user] = useSelector(selectCurentUser);
  const [addDemanded, setAddDemanded] = useState(false);
  const [addNews, setAddNews] = useState(false);
  const [openPopupNews, setOpenPopupNews] = useState(false);
  const [menuAcess, setMenuAcess] = useState<any>({
    title: "Apresentação",
    subitems: [
      {
        name: "Home",
        url: "",
      },
      {
        name: "Eixos",
        url: "eixos/",
      },
      {
        name: "Demandas",
        url: "demandas/",
      },
      {
        name: "Notícias",
        url: "noticias/",
      },
      {
        name: "Documentos",
        url: "documentos/",
      }
    ],
  });

  useEffect(() => {
    console.log(convertToArray(user)[0]);
    if (user && convertToArray(user)[0].userType === "Administrador") {
      setMenuAcess({
        title: "Apresentação",
        subitems: [
          {
            name: "Home",
            url: "",
          },
          {
            name: "Eixos",
            url: "eixos/",
          },
          {
            name: "Demandas",
            url: "demandas/",
          },
          {
            name: "Notícias",
            url: "noticias/",
          },
          {
            name: "Documentos",
            url: "documentos/",
          },
          {
            name: "WebMail",
            url: "https://webmail.lindeiros.org.br/",
            extern: true
          },
        ],
      });
    }
  }, [user])

  return (
    <>
      <PMeuPerfil
        trigger={openPopup}
        width="409"
        height="530px"
        setTrigger={setOpenPopup}
      >
        <MyProfile />
      </PMeuPerfil>
      {convertToArray(user)[0].userType === "Administrador" &&
        <>
          <PDefault
            height="90%"
            width="569"
            title="Cadastro de demandas"
            subtitle="Preencha todos os campos marcados *"
            setTrigger={setOpenPopupDemandas}
            trigger={openPopupDemandas}
            setPrimaryState={setAddDemanded}
            primaryValue={addDemanded}
          >
            <RegisterDemandas primaryValue={addDemanded} setPrimary={setAddDemanded} setState={setOpenPopupDemandas} />
          </PDefault>

          <PDefault
            height="90%"
            width="569"
            title="Cadastro de notícia"
            subtitle="Preencha todos os campos marcados *"
            setTrigger={setOpenPopupNews}
            trigger={openPopupNews}
            setPrimaryState={setAddNews}
            primaryValue={addNews}
            primaryBlocked={addNews}
          >
            <RegisterNews primaryValue={addNews} setPrimary={setAddNews} setState={setOpenPopupNews} />
          </PDefault>
        </>
      }

      <ContainerMenuRight className="scroll">
        <div className="container-header-painel">
          <Link
            to="/meupainel"
            style={{ color: "#fff" }}
          >
            <h1 className="title-h1">Painel</h1>
          </Link>
          {/* Adicionar o link do react router */}
          <div className="content-logout">
            <Link
              to="/login"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <FiLogOut size={22} color="white" />
              <span className="title-h2">Sair</span>
            </Link>
          </div>
        </div>

        <div className="content-data" style={{ padding: "0 50px 0 10px" }}>
          <ChipCard
            Icon={() => <BiPaperPlane size={22} />}
            optionsMenu={[menuAcess]}
            text="Acessos"
          />
          {convertToArray(user)[0].userType === "Administrador" &&
            (
              <ChipCard
                Icon={() => <FaUsers size={22} />}
                optionsMenu={[
                  {
                    title: "Listagem",
                    subitems: [
                      {
                        name: "Listar Usuários",
                        url: "painel/users",
                      },
                      {
                        name: "Pedidos de cadastro",
                        url: "painel/pedidos",
                      }
                    ],
                  },
                  {
                    title: "Meu perfil",
                    activePopUp: true,
                    setTrigger: () => setOpenPopup(!openPopup),
                  },
                ]}
                text="Usuario"
              />
            )
          }
          {convertToArray(user)[0].userType !== "Administrador" &&
            (
              <ChipCard
                Icon={() => <BiUser size={22} />}
                optionsMenu={[
                  {
                    title: "Meu perfil",
                    activePopUp: true,
                    setTrigger: () => setOpenPopup(!openPopup),
                  },
                ]}
                text="Usuario"
              />
            )
          }

          <ChipCard
            Icon={() => <HiDocumentText size={22} color="#fff" />}
            optionsMenu={[
              {
                title: "Inserir demanda",
                activePopUp: true,
                setTrigger: () => setOpenPopupDemandas(!openPopupDemandas),
              },
              {
                title: "Listagem",
                subitems: [
                  {
                    name: "Listar demandas",
                    url: (convertToArray(user)[0].userType === "Administrador") ? "painel/demandas" : "meupainel/demandas",
                  },
                ],
              },
            ]}
            text="Minhas demandas"
          />

          <ChipCard
            Icon={() => <FaRegHandshake size={22} />}
            optionsMenu={[
              {
                title: "Listagem",
                subitems: [
                  {
                    name: "Listar propostas",
                    url: "painel/propostas",
                  },
                ],
              },
            ]}
            text="Minhas propostas"
          />
          {convertToArray(user)[0].userType === "Administrador" &&
            (
              <ChipCard
                Icon={() => <BiNews size={22} />}
                optionsMenu={[
                  {
                    title: "Inserir notícia",
                    activePopUp: true,
                    setTrigger: () => setOpenPopupNews(!openPopupNews),
                  },
                  {
                    title: "Listagem",
                    subitems: [
                      {
                        name: "Listar notícias",
                        url: "painel/news",
                      }
                    ],
                  }
                ]}
                text="Notícias"
              />
            )
          }
        </div>
      </ContainerMenuRight>
    </>
  );
}
