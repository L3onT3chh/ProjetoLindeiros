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

export function MenuRight() {
  const dispatch = useDispatch<AppDispatch>();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);
  const [user] = useSelector(selectCurentUser);
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
    ],
  });

  useEffect(()=>{
    if(user && convertToArray(user)[0].userType === "Administrador"){
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

      <PDefault
        height="90%"
        width="569"
        title="Cadastro de demandas"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenPopupDemandas}
        trigger={openPopupDemandas}
      >
        <RegisterDemandas setState={setOpenPopupDemandas} />
      </PDefault>

      <ContainerMenuRight>
        <div className="container-header-painel">
          <Link
            to="/painel"
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
              <FiLogOut size={20} color="white" />
              <span className="title-h2">Sair</span>
            </Link>
          </div>
        </div>

        <div className="content-data">
          <ChipCard
            icon={demands}
            optionsMenu={[menuAcess]}
            text="Acessos"
          />
          {convertToArray(user)[0].userType === "Administrador" &&
            (
              <ChipCard
                icon={users}
                optionsMenu={[
                  {
                    title: "Listagem",
                    subitems: [
                      {
                        name: "Lista de Usuários",
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
                icon={users}
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
            icon={demands}
            optionsMenu={[
              {
                title: "Inserir",
                activePopUp: true,
                setTrigger: () => setOpenPopupDemandas(!openPopupDemandas),
              },
              {
                title: "Listagem",
                subitems: [
                  {
                    name: "Demandas",
                    url: (convertToArray(user)[0].userType === "Administrador") ? "painel/demandas" : "meupainel/demandas",
                  },
                ],
              },
            ]}
            text="Demandas"
          />
        </div>
      </ContainerMenuRight>
    </>
  );
}
