import styled from "styled-components";
import { SContainerProps } from "../interfaces/global.interface";

export const ContainerNavBar = styled.div`
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 60px;
  background: var(--color-background);

  .content-links {
    padding: 18px 21px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: row;

      .link-btn {
        padding: 5px;
        list-style: none;
        margin-left: 40px;
        text-decoration: none;
        color: var(--color-font-primary);
      }

      .link-btn:active,
      .link-btn:focus {
        border-radius: 5px;
        background: var(--navbar-color-button);
      }
    }
    .img-btn {
      padding-right: 11px;
    }

    .link-login {
      text-decoration: none;
      padding: 0 21px;
      color: var(--color-font-primary);
    }
  }
`;

export const Card = styled.div<SContainerProps>`
  ${(props) => props.shadow && "box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);"}
  width: ${(props) => props.width || "405px"};
  border-radius: ${(props) => props.background || "5px"};
  height: ${(props) => props.height || "338px"};
  border: ${(props) => props.background || "1px solid rgba(51, 51, 51, 0.2)"};
  background: var(--color-font-primary);
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const CardContentBody = styled.div`
  h2 {
    width: 100%;
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    padding: 18px 112px 18px 112px;
  }

  .logo-card {
    height: 175px;
  }

  .description-card {
    width: 80%;
    margin: auto;
  }
`;

export const ContainerButton = styled.button<SContainerProps>`
  margin: ${(props) => props.top || "100px"} auto;
  width: ${(props) => props.width || "250px"};
  display: flex;
  box-sizing: border-box;
  height: ${(props) => props.height || "60px"};
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.font || "18px"};
  padding: 10px;
  font-weight: ${(props) => (props.color ? "600" : "normal")};
  border-radius: 15px;
  border: 1px solid var(--color-background);
  color: ${(props) =>
    props.background ? props.color : "var(--color-background)"};
  background: ${(props) =>
    props.background ? props.background : "rgba(0, 0, 0, 0)"};
  outline: none;
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow}` : "")};
`;

export const ContainerNews = styled.div`
  background: rgba(0, 0, 0, 0.34);
  height: 100%;

  .card-floatting {
    width: 428px;
    background-color: var(--color-background-opacity);
    position: relative;
    left: -60px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
    padding: 11px 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    border-radius: 5px;

    .title-h3-italic {
      font-style: normal;
      font-size: 23px;
      font-weight: bold;
    }
  }

  .content-news {
    width: 787px;
    left: 28px;
    position: relative;
    bottom: -200px;
    color: var(--color-font-primary);
  }
`;

export const ContainerOtherNews = styled.div`
  display: flex;

  img {
    height: 100%;
  }

  .data-content {
    padding: 20px;

    .description-card {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export const ContainerCardDemandas = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .title-h1 {
    color: var(--color-font-primary);
  }
`;

export const ContainerSponsor = styled.div`
  width: 80%;
  margin: 85px auto;
  img {
    margin: 0 48px;
  }
`;

export const ContainerDoubt = styled.div<SContainerProps>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || "var(--color-background)"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;

  .container-left {
    width: 44%;
    margin: 92px;
  }

  .container-center {
    width: 20%;
  }

  .container-right {
    width: 40%;
    text-align: right;
    display: flex;
    flex-direction: column;

    span {
      padding: 10px;
    }

    .icon-send {
      width: 60px;
      height: 60px;
      position: static;
      margin-top: -70px;
      margin-left: 400px;
      background-color: var(--color-background);
      padding: 15px;
      border-radius: 50px;
    }
  }

  .title-h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    color: white;
    align-items: flex-end;
  }
`;

export const InputStyle = styled.input<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
`;

export const TextareaStyle = styled.textarea<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: 447px;
  display: flex;

  .container-left {
    width: 65%;
    margin-right: 100px;

    .container-top,
    .container-bottom {
      display: flex;
      flex-direction: row;

      .subtitle {
        font-size: 25px;
        text-decoration: none;
        padding: 20px;
      }
    }
  }

  .container-right {
    margin-left: 200px;
    width: 30%;

    img {
      margin-bottom: 30px;
    }
  }

  .container-left,
  .container-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerChip = styled.a``;

export const ButtonSubmitStyle = styled.img<SContainerProps>`
  background-image: url(${(props) => props.background});
`;

export const ContainerWelcome = styled.div`
  box-shadow: 10px 3px 13px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.44);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 71px;
`;

export const ContainerAccessLogin = styled.div<SContainerProps>`
  display: flex;
  width: 80%;
  margin: 30px;
  border-radius: 5px;
  flex-direction: row;
  background: rgba(51, 51, 51, 0.5);

  .logo {
    background: rgba(51, 51, 51, 0.6);
    background-image: ${(props) => props.background};
    border-radius: 5px 0px 0px 5px;
    padding: 10px;
    width: 200px;
    height: 100%;

    img {
      width: 50px;
      height: 50px;
      margin: 19px 29px;
    }
  }

  .description {
    padding: 20px 20px 0;
    padding-right: 30px;

    .subtitle-p {
      margin-top: 10px;
      text-align: justify;
      font-size: 14px;
      line-height: 1.2;
    }
  }
`;

export const ContainerSublined = styled.div<SContainerProps>`
  position: absolute;

  h3 {
    font-size: ${(props) => `${props.font}px`};
    padding-bottom: 15px;
    border-bottom: 3px solid var(--color-background);
  }
`;

export const ContainerInput = styled.div`
  h2 {
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: 0;
    background: var(--color-background-primary);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;

  img {
    padding: 10px;
    margin: auto;
    width: 80px;
    height: 80px;
  }

  span {
    width: 100%;
    margin: 15px 0 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
  }
`;

export const ContainerH1 = styled.h1<SContainerProps>`
  display: flex;
  padding-right: 4px;
  color: ${(props) => props.color || "white"};
  font-family: "Inter";
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-size: ${(props) => props.font ?? "35"}px;
`;

export const ContainerProgress = styled.div`
  width: 450px;
  text-align: center;
  padding: 1px;
  margin: 10px 0 10px 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  background-color: var(--color-background);
`;

export const ContainerNavMenu = styled.div`
  display: flex;
  color: black;
  position: absolute;
  top: 400px;
  width: 80vw;
  left: 9.4vw;
  right: 9.4vw;
  padding: 0;
  align-self: center;
  border-bottom: 0.3rem solid var(--color-background);

  p {
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    text-align: center;
    margin: 0;
    margin-bottom: -1px;
    transition: ease-in-out;
    transition-duration: 0.4s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  p:active,
  p:focus,
  p:hover {
    font-size: 17px;
    color: var(--color-font-primary);
    background-color: var(--color-background);
  }
`;
