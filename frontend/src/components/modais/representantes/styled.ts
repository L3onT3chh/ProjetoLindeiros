import { IfaceProps } from "interfaces/IfaceProps";
import styled from "styled-components";

export const PopUp = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  justify-content: center;
  align-items: center;
  left: 0;
  position: fixed;
  z-index: 2;

  .btn-close {
    margin-left: 96%;
    outline: none;
    background: rgb(0, 0, 0, 0);
    padding: 10px;
  }
`;

export const ContentBody = styled.div<IfaceProps>`
  width: ${(props) => props.length || "70%"};
  padding: 8px;
  height: 550px;
  background: #ffffff;
  box-shadow: -4px 6px 22px -4px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  transform: matrix(1, 0, 0, 1, 0, 0);

  .city-applied {
    position: absolute;
    top: -24px;
    left: -24px;
    background-color: #1f1368;
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    color: white;
    width: 157px;
  }

  .data-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .data-info-mean {
      border-left: 1px solid #cecece;
      border-right: 1px solid #cecece;
    }

    .data-info {
      width: 33.3%;
      margin: 30px;

      h5 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 100%;
        color: #717171;
      }

      h6 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 0;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin: 15px 0 20px 0;
        line-height: 140%;
        text-align: justify;
        letter-spacing: -0.01em;
      }

      .data-p {
        margin-left: 15px;
      }
    }

    .not-found-itens {
      width: 100%;
      height: 80%;
      text-align: center;
      display: flex;
      font-size: 38px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ContentListUsers = styled.div`
  width: 30%;

  table {
    position: absolute;
    left: 12%;
    top: 50px;
    td {
      border-bottom: 1px solid black;
      width: 100px;
      padding: 10px;
    }
  }
`;
