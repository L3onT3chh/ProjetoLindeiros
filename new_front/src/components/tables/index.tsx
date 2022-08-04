/* eslint-disable react/prop-types */
import React from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";

interface IProps {
  fields: string[];
  data: IUser[];
}

export function TableDefault({ fields, data }: IProps) {
  return (
    <table>
      <tr className="one-row-title">
        {fields.map((field) => (
          <th key={field}>{field}</th>
        ))}
        <th>Ações</th>
      </tr>
      {data.map((item: IUser, index) => (
        <tr className="row-content">
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
