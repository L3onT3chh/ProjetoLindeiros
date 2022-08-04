/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { fetchUsers } from "app/features/user/thunks";
import { SelectMenu } from "../../components/Select";
import { ContainerPainel } from "../styled";
import { recent } from "../../assets/icons";
import { MenuRight } from "../../components/SubMenu/MenuRight";
import { TableDefault } from "../../components/tables";
import ButtonCard from "../../components/Buttons/ButtonCard";
import { InputSearch } from "../../components/Inputs/Search";

interface IProps {
  field: string[];
  type: string;
  // charge: string;
}

export function Listagem({ type, field }: IProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const dataL = useSelector((state: any) => state.users.users);
  return (
    <ContainerPainel>
      <MenuRight />

      <div className="container">
        <div className="content-header">
          <div className="btn-header">
            <ButtonCard value={`Adicionar ${type}`} />
          </div>
          <InputSearch
            borderColor="--color-select"
            text="Pesquisar usuário"
            background="white"
            size="83%"
            borderRadius="40px 0 0 40px"
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
              width="200px"
            />
          </div>

          <div className="content-body-painel-left">
            <SelectMenu
              iconFinal={recent}
              background="rgba(0, 0, 0, 0.33)"
              options={["Ordem crescente", "Administrador", "Representantes"]}
              width="200px"
            />
          </div>
        </div>
        <TableDefault data={[...dataL]} fields={[...field]} />
      </div>
    </ContainerPainel>
  );
}
