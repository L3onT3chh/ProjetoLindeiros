import { IUser } from "interfaces/IfaceProps";
import React, { ReactChild, ReactChildren } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContentBody, PopUp, ContentListUsers } from "./styled";

type TPopUpRepresentantes = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
  // name: string;
  representates: IUser[];
};

export const PopupGetterRepresent = (props: TPopUpRepresentantes) => {
  return props.trigger ? (
    <PopUp>
      <ContentBody length="410px">
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose
            size={"24px"}
            style={{ position: "absolute", right: "10px" }}
          />
        </button>
        <ContentListUsers>
          <div className="data-content">
            <table>
              <thead className="bgcolor-secondary">
                <tr>
                  <th style={{ color: "white" }}>Nome</th>
                  <th style={{ color: "white" }}>Tipo</th>
                  <th style={{ color: "white" }}>Cidade</th>
                </tr>
              </thead>
              {props.representates.map((representante) => (
                <tr key={representante.name}>
                  <td>{representante.name}</td>
                  <td>{"Administrador"}</td>
                  <td>{representante.city}</td>
                </tr>
              ))}
            </table>
          </div>
        </ContentListUsers>
      </ContentBody>
    </PopUp>
  ) : (
    <div></div>
  );
};
