import React from "react";

// import { fetchUsersThunk } from "app/features/thunks";
import { IPropsGlobal } from "interfaces/components.interface";
import { SelectMenu } from "../../components/Select";
import { ContainerPainel } from "../styled";
import { recent } from "../../assets/icons";
import { MenuRight } from "../../components/SubMenu/MenuRight";
import ButtonCard from "../../components/Buttons/ButtonCard";
import { InputSearch } from "../../components/Inputs/Search";

export function Listagem({ type, children, setState }: IPropsGlobal) {
  return (
    <ContainerPainel>
      <MenuRight />

      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard value={`Adicionar ${type}`} />
          </div>
          <InputSearch
            text="Pesquisar usuário"
            background="#cecece"
            size="83%"
            borderRadius="40px 0 0 40px"
            setState={setState}
          />
        </div>

        <div className="content-body-painel">
          <div className="content-filter-painel">
            <SelectMenu
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={["Tipo de usuário", "Administrador", "Representantes"]}
              width="200px"
              color="white"
            />
            <SelectMenu
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={["Instituição", "Administrador", "Representantes"]}
              color="white"
              width="200px"
            />
            <SelectMenu
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={["Município", "Administrador", "Representantes"]}
              color="white"
              width="200px"
            />
          </div>

          <div className="content-body-painel-left">
            <SelectMenu
              color="white"
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={["Ordem crescente", "Administrador", "Representantes"]}
              width="200px"
            />
          </div>
        </div>
        {children}
      </div>
    </ContainerPainel>
  );
}
