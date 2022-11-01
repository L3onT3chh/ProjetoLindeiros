import { IfaceProps } from "interfaces/IfaceProps";
import styled from "styled-components";

const Container = styled.div<IfaceProps>`
  display: flex;
  flex-direction: column;

  .buttons {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50px;
  }

  .button-click:hover {
    transform: scale(0.9);
    transition: ease-in-out;
    transition-duration: 0.2s;
  }

  .info-button {
    font-size: 14px;
    margin: 20px 10px;
  }

  .buttons-entities {
    display: flex;
    margin: 10px auto;
  }
`;

export { Container };
