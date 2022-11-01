import { IContainerStyled } from "interfaces/global";
import styled from "styled-components";

export const Container = styled.div<IContainerStyled>`
  z-index: -1;
  visibility: ${(props) => {
    return props.visibility;
  }};
`;
