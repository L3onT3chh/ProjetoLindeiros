import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { PMeuPerfil } from "components/Popups/Profile";
import { Link } from "react-router-dom";
import { MyProfile } from "components/Popups/subContent/Profile";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import PDefault from "components/Popups";
import { useDispatch } from "react-redux";
import { logout } from "app/reducers/auth/authSlice";
import { AppDispatch } from "app/store";
import { demands, users } from "../../assets/icons";
import { ChipCard } from "../Chips/ChipCard";
import { ContainerMenuRight } from "../style";

export function MenuRight() {
  const dispatch = useDispatch<AppDispatch>();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);

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
        height="889"
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
          <h1 className="title-h1">Painel</h1>
          {/* Adicionar o link do react router */}
          <div className="content-logout">
            <Link
              to="/login"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <FiLogOut size={20} color="white" />
              <span className="title-h2">Logout</span>
            </Link>
          </div>
        </div>

        <div className="content-data">
          <ChipCard
            icon={users}
            optionsMenu={[
              {
                title: "Listagem",
                subitems: [
                  {
                    name: "Usuários",
                    url: "painel/users",
                  },
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
                    url: "painel/demandas",
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
