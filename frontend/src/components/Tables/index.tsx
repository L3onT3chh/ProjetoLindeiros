/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
// import { ISets } from "interfaces/components.interface";
import { deleteUserThunk } from "app/reducers/user/thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { NotFound } from "components/Notfound";
import PDefault from "components/Popups";
import UpdateUser from "components/Popups/subContent/updateUser";
import { ISets, IStateData } from "interfaces/components.interface";

interface IProps {
  fields: string[];
  text?: string;
  configSets?: ISets;
}

export function TableDefaultUser({ fields, text, configSets }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: IStateData) => state);
  const [newData, setNewData] = useState<IUser[]>(users.users);
  const [OpenUserCard, setOpenUserCard] = useState(false);
  const [userClicked, setUserClicked] = useState("");

  useEffect(() => {
    const aux: any = { s1: [], s2: [], s3: [], s4: [] };

    if (configSets && configSets?.s1 !== "Todos os usuários" && text !== "") {
      if (configSets.s4) {
        aux.s4.push([...users.users]);
        configSets.setFour(false);
      } else {
        if (configSets.s1 !== undefined) {
          users.users?.filter((item: IUser) =>
            item.userType === configSets.s1 ? aux.s1.push(item) : undefined,
          );
        }
        if (configSets.s2 !== undefined) {
          users.users?.filter((item: IUser) =>
            item.userType === configSets.s2?.toString().trim()
              ? aux.s2.push(item)
              : undefined,
          );
        }
        if (configSets.s3 !== undefined) {
          users.users?.filter((item: IUser) =>
            item.city === configSets.s3?.toString().trim()
              ? aux.s3.push(item)
              : undefined,
          );
        }
      }
      const aux1 = [...aux.s1, ...aux.s2, ...aux.s3, ...aux.s4];

      setNewData(aux1);
    } else {
      const datat: any = [];
      if (text !== undefined && text !== "") {
        datat.push(users.users.map((item) => item.name.includes(text.trim())));
      } else {
        datat.push([...users.users]);
      }
      setNewData(datat);
    }
  }, [configSets]);
  const handleRemoveUser = (userId: string) => {
    dispatch(deleteUserThunk(userId));
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
          newData.map((item: IUser, index) => (
            <tr key={item.id} className="row-content">
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
