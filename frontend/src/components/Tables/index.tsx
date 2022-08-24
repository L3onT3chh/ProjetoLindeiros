/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { ISets } from "interfaces/components.interface";

interface IProps {
  type?: string;
  fields: string[];
  data: IUser[];
  text?: string;
  configSets?: ISets;
}

export function TableDefaultUser({
  fields,
  data,
  type,
  text,
  configSets,
}: IProps) {
  const [newData, setNewData] = useState<IUser[]>();

  useEffect(() => {
    if (type === undefined) {
      setNewData(data);
    } else if (type !== "") {
      const auxData = data.filter((item) => item.userType === type);
      setNewData(auxData);
    }
  }, [data, type]);

  useEffect(() => {
    if (text !== undefined && text !== "" && newData) {
      setNewData(
        newData.filter((item: IUser) => item.name.includes(text.trim())),
      );
    } else {
      setNewData(data);
    }
  }, [text]);

  useEffect(() => {
    const aux: any = [];
    if (configSets) {
      if (configSets.s1 !== undefined) {
        console.log(configSets);
        aux.push(
          data?.filter((item: IUser) => item.userType === configSets.s1),
        );
      }
      if (aux.length > 0) {
        console.log(aux);
      }
    }
  }, [configSets]);

  return (
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
                <BsFillTrashFill color="red" size={30} />
              </span>{" "}
              <span className="divisor" />
              <span>
                <MdTipsAndUpdates
                  className="update-icon"
                  color="green"
                  size={32}
                />
              </span>
            </th>
          </tr>
        ))}
    </table>
  );
}
