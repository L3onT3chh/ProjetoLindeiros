import styled from "styled-components";
import { SContainerProps } from "../interfaces/global.interface";

export const ContainerPage = styled.div<SContainerProps>`
  width: 100%;

  .content-body {
    width: 80%;
    margin-top: 108px;
    margin-left: auto;
    margin-right: auto;
  }

  .description-about {
    display: flex;
    flex-direction: row;
    margin-top: 61px;

    .logo-about {
      padding: 73px 49px 61.32px 48px;
      border-radius: 5px;
      margin-right: 70px;
    }

    .description {
      text-align: justify;
      margin-top: 50px;
      font-size: 20px;
      text-indent: 50px;
    }
  }

  .shadow-div {
    position: absolute;
    left: 0;
    right: 0;
    height: 250px;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    width: 100%;
  }

  .container-banner {
    position: absolute;
    z-index: 0;
    display: flex;
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: 100%;
    flex-direction: column;
    width: 100%;
    padding: 25px 88px;
    height: 250px;
    justify-content: space-around;

    .data-info {
      display: flex;
      justify-content: space-between;
      width: 280px;
    }
  }

  .eixos-programmer,
  .others-news {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .sponsor-content {
    margin-top: 100px;
    text-align: center;
  }

  .login {
    right: 0;
    height: 90%;
    padding: 45px;

    .form-login {
      margin-top: 118px;
      border-radius: 20px;
      width: 38vw;
      height: 80%;

      span {
        padding: 10px;
      }
    }

    .container-footer {
      width: 80%;
      display: flex;
      justify-content: space-around;
      margin: -100px auto;
    }
  }

  .duvida {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
    height: 350px;
    top: 950px;
    left: 9.4vw;
    right: 9.4vw;

    .duvida-msg {
      margin-top: 80px;
      width: 100%;
    }
  }
`;
