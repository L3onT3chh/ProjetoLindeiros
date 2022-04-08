import styled from "styled-components";
import { IContainerStyled } from "interfaces/global";

export const ContainerNews = styled.div<IContainerStyled>`
  background-image: url(${(props) => props.background});
`;
