import { IfaceProps } from "interfaces/IfaceProps";
import styled from "styled-components";

export const ButtonContainer = styled.div<IfaceProps>`
  background-color: ${(props) => props.color || "#1f1368"};
  height: 35px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  width: 190px;
  text-align: center;
  border-radius: 5px;
  color: white;
  margin: 10px;
  -webkit-box-shadow: -9px 7px 5px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 1px 1px 5px rgba(50, 50, 50, 0.77);
  box-shadow: -5px 5px 5px rgba(50, 50, 50, 0.77);
  transition: 0.2s;

  .text-button {
    margin-top: 10px;
    color: white;
    text-align: center;
    width: 100%;
  }
`;
