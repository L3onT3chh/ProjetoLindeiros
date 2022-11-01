/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
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
        <div className="container-popup">{children}</div>
      </div>
    </ContainerPopup>
  );
}

export default PDefault;
