/* eslint-disable react/button-has-type */
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { IPopup } from "../../interfaces/components.interface";
import { ContainerPopup } from "../style";

export function PMeuPerfil({ trigger, children, setTrigger }: IPopup) {
  return (
    <ContainerPopup width="316" height="419" active={trigger}>
      <div className="container-modal-popup">
        <div className="header-popup">
          <button className="btn-back" onClick={() => setTrigger(false)}>
            <MdArrowBack size={24} />
          </button>
        </div>

        <div className="container-popup">{children}</div>
      </div>
    </ContainerPopup>
  );
}
