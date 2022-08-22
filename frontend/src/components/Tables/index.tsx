/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";

interface IProps {
  type?: string;
  fields: string[];
  data: IUser[];
}

export function TableDefaultUser({ fields, data, type }: IProps) {
  const [newData, setNewData] = useState<IUser[]>();
  useEffect(() => {
    if (type === undefined) {
      setNewData(data);
    } else if (type !== "") {
      data = data.filter((item) => item.userType === type);
      setNewData(data);
    }
  }, [data, type]);
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
