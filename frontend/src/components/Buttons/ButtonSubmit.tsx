import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ButtonSubmitStyle } from "../style";

function ButtonSubmit({ icon, className }: IPropsGlobal) {
  return <ButtonSubmitStyle className={className} background={icon} />;
}

export default ButtonSubmit;
