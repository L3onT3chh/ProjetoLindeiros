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
import { mergeFilters } from "app/reducers/user/userSlice";
import { AppDispatch } from "app/store";
import { deleteUserThunk } from "app/reducers/user/thunk";
import { Navigate } from "react-router";
import { history } from "util/_helped";

interface IProps {
  fields: string[];
}

export function TableDefaultUser({ fields }: IProps) {
  const { users } = useSelector((state: IStateData) => state);
  const [newData, setNewData] = useState<IUser[]>(users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [userClicked, setUserClicked] = useState("");

  useEffect(() => {
    dispatch(mergeFilters());
    setNewData(users.filters.merge);
  }, [users.filters.city, users.filters.search, users.filters.type]);

  useEffect(() => {
    setNewData(users.users);
  }, users.users);

  const [OpenUserCard, setOpenUserCard] = useState(false);

  const handleRemoveUser = (userId: string) => {
    dispatch(deleteUserThunk(userId));
    return <Navigate to="/painel" state={{ from: history.location }} replace />;
  };

  const handleUpdateUser = (userUpdate: string) => {
    if (userUpdate !== undefined) {
      setUserClicked(userUpdate);
    }

    setOpenUserCard(!OpenUserCard);
  };
  return newData ? (
    <>
      <div className="data-user-poup">
        <PDefault
          height="700"
          width="517"
          title="Atualização de usuário"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenUserCard}
          trigger={OpenUserCard}
        >
          <UpdateUser userId={userClicked} />
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
            <tr key={item.id?.toString()} className="row-content">
              <th>{index + 1}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{`+55 (${item.phone_ddd}) ${item.phone}`}</th>
              <th>{item.userType}</th>
              <th>
                <span>
                  <BsFillTrashFill
                    className="btn-click"
                    onClick={() => item.id && handleRemoveUser(item.id)}
                    color="red"
                    size={30}
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
