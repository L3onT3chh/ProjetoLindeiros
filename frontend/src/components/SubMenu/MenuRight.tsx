/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { PMeuPerfil } from "components/Popups/Profile";
import { Link } from "react-router-dom";
import { MyProfile } from "components/Popups/subContent/Profile";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import PDefault from "components/Popups";
import {
  demands,
  // docs_icon,
  // eixos_icon,
  // news_icon,
  users,
} from "../../assets/icons";
import { ChipCard } from "../Chips/ChipCard";
import { ContainerMenuRight } from "../style";

export function MenuRight() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupDemandas, setOpenPopupDemandas] = useState(false);
  return (
    <>
      <PMeuPerfil
        trigger={openPopup}
        width="409"
        height="509"
        setTrigger={setOpenPopup}
      >
        <MyProfile />
      </PMeuPerfil>

      <PDefault
        height="849"
        width="569"
        title="Envio de proposta"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenPopupDemandas}
        trigger={openPopupDemandas}
      >
        <RegisterDemandas />
      </PDefault>

      <ContainerMenuRight>
        <div className="container-header-painel">
          <h1 className="title-h1">Painel</h1>
          {/* Adicionar o link do react router */}
          <div className="content-logout">
            <Link to="/login">
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

          {/* <ChipCard
            icon={news_icon}
            optionsMenu={[
              { title: "Inserir", urlMain: "painel/news/add" },
              {
                title: "Listagem",
                urlMain: "painel/news",
              },
            ]}
            text="Noticías"
          /> */}

          {/* <ChipCard
            icon={eixos_icon}
            optionsMenu={[
              // { title: "Inserir", urlMain: "painel/eixos/add" },
              {
                title: "Listagem",
                urlMain: "painel/eixos",
              },
            ]}
            text="Eixos"
          />

          <ChipCard
            icon={docs_icon}
            optionsMenu={[
              { title: "Inserir", urlMain: "painel/docs/add" },
              {
                title: "Listagem",
                urlMain: "painel/eixos",
              },
            ]}
            text="Documentos"
          /> */}
        </div>
      </ContainerMenuRight>

      {/* <FooterLink title="Abrir documentação" link="doc" /> */}
    </>
  );
}
