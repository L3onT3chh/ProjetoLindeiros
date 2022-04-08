import styled from "styled-components";
import { IfaceProps } from "interfaces/IfaceProps";

export const Container = styled.div<IfaceProps>`
  background-image: url(${(props) => props.link});
  
`;

