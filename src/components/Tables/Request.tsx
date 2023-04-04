/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IRequest, IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { NotFound } from "components/Notfound";
import PDefault from "components/Popups";
import UpdateUser from "components/Popups/subContent/updateUser";
import { IStateData } from "interfaces/components.interface";
import { useDispatch, useSelector } from "react-redux";
import { mergeFilters, cleanFilters, filterSearch, filterCity, filterTypeUser } from "app/reducers/user/userSlice";
import { AppDispatch } from "app/store";
import { deleteUserThunk, fetchRequestUsersThunk } from "app/reducers/user/thunk";
import { ContentProfile } from "components/style";
import { convertToArray } from "util/handleSelectorObj";
import { dataFormat } from "util/dateFormater";
import { RequestList } from "components/RequestList";

interface IProps {
  fields: string[];
}

export function TableDefaultResquest({ fields }: IProps) {
  const { users } = useSelector((state: IStateData) => state);
  const [remove, setRemove] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [userClicked, setUserClicked] = useState("");
  const [userInfo, setUserInfo] = useState<IRequest>();
  const [info, setInfo] = useState(false);

  useEffect(() => {
    dispatch(cleanFilters());
    dispatch(fetchRequestUsersThunk());
  }, []);

  const [OpenUserCard, setOpenUserCard] = useState(false);

  const handleInfo = (item: IRequest) => {
    setInfo(true); 
    setUserInfo(item);
  };

  return users ? (
    <>
      <div className="data-user-poup">
        {userInfo &&
          (
            <RequestList setState={setInfo} state={info} data={userInfo} />
          )
        }
      </div>
      <table>
        <tr className="one-row-title">
          {fields.map((field) => (
            <th key={field}>{field}</th>
          ))}
        </tr>
        <tbody>
          {users && (
            users.requestUsers && convertToArray(users.requestUsers).map((item: IRequest, index: any) => (
              <tr key={index} className="row-content">
                <th style={{ height: "50px", fontWeight: "bold", fontSize: "13px" }}>{(item.status == "1") ? "pendente" : "Aguardando resposta"}</th>
                <th style={{ height: "50px" }}>{item.email}</th>
                <th style={{ height: "50px" }}>{dataFormat(item.createdAt)}</th>
                <th>
                  <p className="field-button" onClick={() => { handleInfo(item) }}>Ver mais</p>
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
