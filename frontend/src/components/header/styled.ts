import styled from "styled-components";

// Interface
import { IContainerStyled } from "interfaces/global";

const ContainerHeader = styled.header<IContainerStyled>`
  background-image: url(${(props) => props.background});
  height: 130px;
`;

export default ContainerHeader;
