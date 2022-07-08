import React from "react";
import { ButtonSubmitStyle } from "../style";

interface IProps {
  icon: string;
  className: string;
}

function ButtonSubmit({ icon, className }: IProps) {
  return <ButtonSubmitStyle className={className} src={icon} alt="icon" />;
}

export default ButtonSubmit;
