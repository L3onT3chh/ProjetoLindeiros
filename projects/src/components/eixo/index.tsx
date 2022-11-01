import React from "react";
import { IfaceProps } from "interfaces/IfaceProps";
import { Container } from "pages/demands/style";

export const Eixo = (props: IfaceProps) => {
  return (
    <Container
      className="content"
      background={props.link}
    >
      <p>{props.text}</p>
    </Container>
  );
};
