import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerAccessLogin } from "../style";

function AccessLogin({ title, url, icon, description }: IPropsGlobal) {
  return (
    <ContainerAccessLogin>
      <div className="logo">
        <img src={icon} alt="logo-icon" />
      </div>

      <div className="description">
        <a className="link-a" href={url}>
          {title}
        </a>
        <p className="subtitle-p">{description}</p>
      </div>
    </ContainerAccessLogin>
  );
}

export default AccessLogin;
