import { ContainerNotFound } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";
import React from "react";
import { Link } from "react-router-dom";

export function NotFound({ status, title, subtitle }: IPropsGlobal) {
  return (
    <ContainerNotFound>
      <div className="content">
        <h2>{status}</h2>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link to="/painel" />
      </div>
    </ContainerNotFound>
  );
}
