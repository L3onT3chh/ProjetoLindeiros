/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { NotFound } from "components/Notfound";
import PDefault from "components/Popups";
import UpdateUser from "components/Popups/subContent/updateUser";
import { IStateData } from "interfaces/components.interface";
import { useDispatch, useSelector } from "react-redux";
import { mergeFilters, cleanFilters, filterSearch, filterCity, filterTypeUser } from "app/reducers/user/userSlice";
import { AppDispatch } from "app/store";
import { deleteUserThunk, fetchUsersThunk } from "app/reducers/user/thunk";
import { ContentProfile } from "components/style";

interface IProps {
  fields: string[];
}

export function TableDefaultUser({ fields }: IProps) {
  const { users } = useSelector((state: IStateData) => state);
  const [remove, setRemove] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [userClicked, setUserClicked] = useState("");

  const [editUser, setEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, []);

  const [OpenUserCard, setOpenUserCard] = useState(false);

  const handleRemoveUser = () => {
    if (deleteId !== "") {
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

  useEffect(() => {
    if (deleteUser) {
      setDeleteUser(false);
      handleRemoveUser();
    }
  }, [deleteUser]);
  return users ? (
    <>
      <div className="data-user-poup">
        <PDefault
          height="90%"
          width="517"
          title="Atualização de usuário"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenUserCard}
          trigger={OpenUserCard}
          setPrimaryState={setEditUser}
          primaryValue={editUser}
          primaryBlocked={editUser}
        >
          <UpdateUser primaryValue={editUser} setPrimary={setEditUser} userId={userClicked} trigger={OpenUserCard} setState={setOpenUserCard} />
        </PDefault>
        <PDefault
          height="fit-content"
          width="569"
          title="Excluir usuario"
          subtitle="Deseja realmente excluir esse usuario?"
          setTrigger={setRemove}
          trigger={remove}
          setPrimaryState={setDeleteUser}
          primaryValue={deleteUser}
        >
          <ContentProfile>
            <div className="content-default" style={{ padding: 0, height: "80px" }}>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
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
        <tbody>
          {users && (
            users.users && users.users.map((item: IUser, index: any) => (
              <tr key={index} className="row-content">
                <th style={{ height: "50px" }}>{index + 1}</th>
                <th style={{ height: "50px" }}>{item.name}</th>
                <th style={{ height: "50px" }}>{item.email}</th>
                <th style={{ height: "50px" }}>{`+55 (${item.phone_ddd}) ${item.phone}`}</th>
                <th style={{ height: "50px" }}>{item.userType}</th>
                <th style={{ height: "50px" }}>
                  <span>
                    <BsFillTrashFill
                      color="red"
                      className="btn-click"
                      size={22}
                      onClick={() => item.id && preRemove(item.id)}
                    />
                  </span>{" "}
                  <span className="divisor" />
                  <span>
                    <BsFillPencilFill
                      onClick={() => item.id && handleUpdateUser(item.id)}
                      className="update-icon btn-click"
                      color="#3679bc"
                      size={22}
                    />
                  </span>
                </th>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  ) : (
    <NotFound title="Não há dados cadastrados no momento" />
  );
}
