/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { PMeuPerfil } from "components/popups/profile";
import { MyProfile } from "components/Profile";
import { Link } from "react-router-dom";
import {
  demands,
  docs_icon,
  eixos_icon,
  news_icon,
  users,
} from "../../assets/icons";
import { ChipCard } from "../Chips/ChipCard";
import { ContainerMenuRight } from "../style";

export function MenuRight() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <PMeuPerfil trigger={openPopup} setTrigger={setOpenPopup}>
        <MyProfile />
      </PMeuPerfil>
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
              { title: "Adicionar", urlMain: "painel/users/add" },
              {
                title: "Alterar permissão",
                urlMain: "painel/popup/permissions",
              },
              {
                title: "Listagem",
                subitems: [
                  {
                    name: "Administradores",
                    url: "painel/users/administrators",
                  },
                  { name: "Representantes", url: "painel/users/representers" },
                ],
              },
              {
                title: "Meu perfil",
                urlMain: "painel/profile",
                activePopUp: true,
                setTrigger: () => setOpenPopup(!openPopup),
              },
            ]}
            text="Usuario"
          />

          <ChipCard
            icon={demands}
            optionsMenu={[
              { title: "Inserir", urlMain: "painel/demandas/add" },
              {
                title: "Modificar status",
                urlMain: "painel/popup/demandas/status",
              },
              {
                title: "Listagem",
                urlMain: "painel/popup/demandas",
              },
            ]}
            text="Demandas"
          />

          <ChipCard
            icon={news_icon}
            optionsMenu={[
              { title: "Inserir", urlMain: "painel/news/add" },
              {
                title: "Listagem",
                urlMain: "painel/news",
              },
            ]}
            text="Noticías"
          />

          <ChipCard
            icon={eixos_icon}
            optionsMenu={[
              { title: "Inserir", urlMain: "painel/eixos/add" },
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
          />
        </div>
      </ContainerMenuRight>

      {/* <FooterLink title="Abrir documentação" link="doc" /> */}
    </>
  );
}
