import InputStyle from "components/Inputs";
import { ContentProfile } from "components/style";
import React from "react";

function RegisterDemanda() {
  return (
    <ContentProfile>
      <h1 className="title-h3">Dados básicos</h1>
      <div className="content-basic-data">
        <InputStyle placeholder="Nome" type="input" title="" />
      </div>
    </ContentProfile>
  );
}

export default RegisterDemanda;
