/* eslint-disable react/require-default-props */
import React from "react";
import { ContainerChecklist, InputCheckList } from "../style";

interface IProps {
  title: string;
  className?: string;
  colorFont?: string;
}

export default function CheckList({ title, className, colorFont }: IProps) {
  function handleTextFormat(text: string) {
    return text.replaceAll("", "-").toLowerCase();
  }

  return (
    <ContainerChecklist className={className} color={colorFont}>
      <InputCheckList className="check" id={handleTextFormat(title)} />
      <label htmlFor={handleTextFormat(title)}>{title}</label>
    </ContainerChecklist>
  );
}
