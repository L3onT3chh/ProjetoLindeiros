/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { NotFound } from "components/Notfound";
import PDefault from "components/Popups";
import UpdateUser from "components/Popups/subContent/updateUser";
import { IStateData } from "interfaces/components.interface";
import { useDispatch, useSelector } from "react-redux";
import { mergeFilters, cleanFilters, filterSearch, filterCity, filterTypeUser } from "app/reducers/user/userSlice";
import { AppDispatch } from "app/store";
import { deleteUserThunk } from "app/reducers/user/thunk";
import { ContentProfile } from "components/style";

interface IProps {
  fields: string[];
}

export function TableDefaultUser({ fields }: IProps) {
  const { users } = useSelector((state: IStateData) => state);
  const [newData, setNewData] = useState<IUser[]>(users.users);
  const [remove, setRemove] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [userClicked, setUserClicked] = useState("");

  useEffect(() => {
    if (users.filters.merge.length > 0) {
      dispatch(filterSearch);
      setNewData(users.filters.merge);
    }
  }, [users.filters.search, users.filters.merge]);

  useEffect(() => {
    if (users.filters.merge.length > 0) {
      dispatch(filterCity);
      setNewData(users.filters.merge);
    }
  }, [users.filters.city, users.filters.merge]);

  useEffect(() => {
    if (users.filters.merge.length > 0) {
      dispatch(filterTypeUser);
      setNewData(users.filters.merge);
    }
  }, [users.filters.type, users.filters.merge]);

  useEffect(() => {
    dispatch(cleanFilters());
    setNewData(users.users);
  }, []);

  const [OpenUserCard, setOpenUserCard] = useState(false);

  const handleRemoveUser = () => {
    if (deleteId !== "") {
      alert(deleteId);
      dispatch(deleteUserThunk(deleteId));
      setRemove(false);
    }
  };

  const handleUpdateUser = (userUpdate: string) => {
    if (userUpdate !== undefined) {
      setUserClicked(userUpdate);
    }

    setOpenUserCard(!OpenUserCard);
  };

  const preRemove = (id: string) => {
    setRemove(true);
    setDeleteId(id);
  }
  return newData ? (
    <>
      <div className="data-user-poup">
        <PDefault
          height="90%"
          width="517"
          title="Atualização de usuário"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenUserCard}
          trigger={OpenUserCard}
        >
          <UpdateUser userId={userClicked} trigger={OpenUserCard} />
        </PDefault>
        <PDefault
          height="fit-content"
          width="569"
          title="Excluir demanda"
          subtitle="Deseja realmente excluir esse usuario?"
          setTrigger={setRemove}
          trigger={remove}
        >
          <ContentProfile>
            <div className="content-default" style={{ padding: 0 }}>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="content-basic-data">
                  <div className="btns-popup">
                    <button className="btn-close-two">Fechar</button>
                    <button className="btn-send" onClick={() => handleRemoveUser()}>Confirmar</button>
                  </div>
                </div>
              </form>
            </div>
          </ContentProfile>
        </PDefault>
      </div>
      <table>
        <tr className="one-row-title">
          {fields.map((field) => (
            <th key={field}>{field}</th>
          ))}
          <th>Ações</th>
        </tr>
        {newData &&
          newData.map((item: IUser, index: any) => (
            <tr key={index} className="row-content">
              <th>{index + 1}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{`+55 (${item.phone_ddd}) ${item.phone}`}</th>
              <th>{item.userType}</th>
              <th>
                <span>
                  <BsFillTrashFill
                    color="red"
                    className="btn-click"
                    size={30}
                    onClick={() => item.id && preRemove(item.id)}
                  />
                </span>{" "}
                <span className="divisor" />
                <span>
                  <MdTipsAndUpdates
                    onClick={() => item.id && handleUpdateUser(item.id)}
                    className="update-icon btn-click"
                    color="green"
                    size={32}
                  />
                </span>
              </th>
            </tr>
          ))}
      </table>
    </>
  ) : (
    <NotFound title="Não há dados cadastrados no momento" />
  );
}
