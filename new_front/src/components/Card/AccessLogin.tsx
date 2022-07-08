import React from "react";
import { ContainerAccessLogin } from "../style";

interface IProps {
  title: string;
  url: string;
  icon: string;
  description: string;
}

function AccessLogin({ title, url, icon, description }: IProps) {
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
