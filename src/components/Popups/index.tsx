/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from "react";
import { ContainerPopup } from "components/style";
import { IPopup } from "interfaces/components.interface";
// import { AiOutlineClose } from "react-icons/ai";

function PDefault({
  trigger,
  children,
  setTrigger,
  width,
  height,
  className,
  title,
  alternativeText,
  subtitle,
  primaryText,
  setPrimaryState,
  primaryValue,
  primaryBlocked
}: IPopup) {

  return (
    <ContainerPopup
      className={className}
      width={width}
      height={height}
      active={trigger}
    >
      <div className="container-modal-popup">
        <div className="header-two-popup">
          <div className="data-header">
            <h1 className="title-h3">{title || alternativeText}</h1>
            <span className="subtitle-p">{subtitle}</span>
          </div>
          <p className="btn-close" onClick={() => setTrigger(!trigger)} />
        </div>
        <div className="container-popup" style={{height: (setPrimaryState) ? `calc(100% - ${(subtitle) ? "160" : "130"}px)` : "100%"}}>{children}</div>
        {setPrimaryState &&
          (
            <div className="container-footer">
              <button className="btn-close-two" onClick={() => setTrigger(!trigger)}>Fechar</button>
              <button className="btn-send" onClick={() => { (!primaryBlocked) ? setPrimaryState(!primaryValue) : console.log("") }} disabled={primaryBlocked} style={{opacity: (primaryBlocked) ? "0.5" : "1"}}>{(primaryText) ?? "Enviar"}</button>
            </div>
          )
        }
      </div>
    </ContainerPopup>
  );
}

export default PDefault;
