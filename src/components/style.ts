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
  margin: ${(props) => (props.margin ? "auto" : "none")};
  margin-bottom: 2%;
  ${(props) => props.shadow && "box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);"}
  width: ${(props) => props.width || "338px"};
  border-radius: ${(props) => props.background || "5px"};
  height: ${(props) => props.height || "338px"};
  padding ${(props) => (props.active ? "20px" : "0px")};
  border: ${(props) => props.background || "1px solid rgba(51, 51, 51, 0.2)"}; 
  background: var(--color-font-primary || ${(props) => props.background});
  background-image: url("${(props) => props.background}");
  background-size: cover;
  background-position: center;

  &.accessCard{
    width: 50%;
  }

  &.welcomeLoginCard{
    width: 56%;
  }

  @media screen and (max-width: 1100px) {
    width: 49%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%!important;
  }

  @media screen and (max-width: 1400px) {
    &.cardP{
      height: 115px;
    }
  }

  @media screen and (max-width: 1000px) {
    &.right{
      display: none;
    }
    &.left{
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    &.cardP:nth-child(3n){
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    &.cardP:nth-child(2n){
      display: none;
    }
  }
  

  .btns-card {
    float: right;
    margin-bottom: -100px;
    margin-right: 10px;
    z-index: 7;
  }

  .b-white {
    color: white;
    font-weight: 200;
  }

  .container-card {
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    padding: 10px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;

    .content-left {
      display: flex;

      justify-content: center;
      align-items: center;
      padding: 20px;
      img {
        width: 50px;
      }
    }

    .content-right {
      width: 80%;

      p {
        margin-top: 10px;
        border-top: 0.4px solid #cececed2;
      }

      span {
        font-size: 14px;
        float: right;
        margin-top: 15px;
      }
      margin-left: 10px;
      text-align: justify;
    }
  }

  .container,
  .container-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${(props) => props.background};
    /* margin-left: -10px; */
  }

  .container-header {
    background: var(--color-header);
    padding: 15px;

    h1 {
      font-size: 14px;
      font-weight: 400;
      padding: 0px;
      margin: 0px;
    }
  }

  .left {
    width: 10%;
  }

  .right,
  .left {
    margin-top: 100px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const CardContentBody = styled.div`
  height: 200px;
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    padding: 18px 0;
  }

  .logo-card {
    display: flex;
    height: 125px;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  .description-card {
    width: 80%;
    margin: auto;
  }
`;

export const ContainerButton = styled.button<SContainerProps>`
  margin: ${(props) => props.top || "100px"} auto 0;
  width: ${(props) => props.width || "250px"};
  display: flex;
  z-index: 1;
  box-sizing: border-box;
  height: ${(props) => props.height || "50px"};
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.font || "18px"};
  padding: 10px;
  font-weight: ${(props) => (props.color ? "600" : "normal")};
  border-radius: 15px;
  border: 1px solid var(--color-background);
  background: ${(props) =>
    props.background ? props.background : "rgba(0, 0, 0, 0)"};
  outline: none;
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow}` : "")};

  p {
    color: white;
  }

  @media screen and (max-width: 500px) {
    &.painelButton {
      width: 100%;
      margin-top: 10px;
    }
  }
`;

export const ContainerNews = styled.div`
  background: rgba(0, 0, 0, 0.34);
  height: 100%;
  width: 100%;

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
    width: 90%;
    left: 28px;
    position: relative;
    bottom: -200px;
    color: var(--color-font-primary);

    .title-h3-italic {
      font-size: 28px;
    }
  }
`;

export const ContainerOtherNews = styled.div`
  display: flex;

  img {
    display: block;
    height: 100%;
  }

  .data-content {
    padding: 20px;

    .description-card {
      font-size: 12px;
      line-height: 20px;
    }

    .title-h2 {
      font-size: 21px;
      color: var(--color-background);
    }

    @media screen and (max-width: 1600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1600px) {
    .title-h2 {
      font-size: 16px;
    }
    .data-content {
      .title-h2 {
        font-size: 16px;
      }
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
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    .form-control-demand {
      margin-top: 20px;
    }

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

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const InputStyle = styled.input<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
  padding: 14px;
`;

export const TextareaStyle = styled.textarea<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
  padding: 14px;
`;

export const ContainerFooterPainel = styled.a`
  display: flex;
  position: absolute;
  width: 300px;
  height: 40px;
  background-color: var(--color-background-footer);
  color: white;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 1;
  text-decoration: none;
  transition: ease-in-out 0.4s;

  &:hover {
    color: #cecece;
  }
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
      width: 80%;
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

export const ContainerChipAdd = styled.div`
  .content-chips-add {
    height: 140px;
    margin-top: 15px;
    border-radius: 15px;
    background-color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }

  .card-chip:nth-child(1n) {
    margin-left: 25px;
  }
  .card-chip {
    margin-top: 5px;
    height: 50px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 120px;
  }
`;

export const ButtonSubmitStyle = styled.button<SContainerProps>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerWelcome = styled.div`
  box-shadow: 10px 3px 13px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.44);
  height: calc(100vh - 60px);
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

  &:last-of-type {
    margin-top: 0;
  }

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
      @media screen and (max-width: 1300px) {
        width: 35px;
        height: 35px;
      }
    }
  }

  .description {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .link-a {
      color: white;
    }

    .subtitle-p {
      margin-right: 50px;
      font-weight: 200;
      text-align: justify;
      font-size: 14px;
      line-height: 1;

      @media screen and (max-width: 1300px) {
        font-size: 12px;
      }
    }
  }
`;

export const ContainerSublined = styled.div<SContainerProps>`
  h3 {
    font-size: ${(props) => `${props.font}px`};
    padding-bottom: 15px;
    border-bottom: 3px solid var(--color-background);
  }
`;

export const ContainerInputAdd = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  input {
    border-radius: 10px;
    padding: 10px;
    width: 80%;
  }

  .button-btn-add {
    background-color: var(--color-background);
    padding: 10px;
    border-radius: 0 10px 10px 0;
    height: 100%;
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

export const ContainerTextarea = styled.div<SContainerProps>`
  h2 {
    font-size: 18px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    outline: 0;
    height: ${(props) => props.height || "25vh"};
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
    width: 65px;
    height: 65px;
  }

  span {
    width: 100%;
    margin: 10px 0 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }

  a {
    color: var(--color-background-alternative);
    text-decoration: none;
    text-align: center;
    padding-top: 5px;
    font-size: 15px;
  }
`;

export const ContainerH1 = styled.h1<SContainerProps>`
  display: flex;
  padding-right: 4px;
  span,
  & {
    z-index: 1;
  }
  color: ${(props) => props.color || "white"};
  font-family: "Inter";
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-size: ${(props) => props.font ?? "35"}px;

  @media screen and (max-width: 813px) {
    &.mainTitle {
      font-size: 20px;
    }
  }
`;

export const ContainerProgress = styled.div<SContainerProps>`
  z-index: 3;
  width: 450px;
  text-align: center;
  padding: 1px;
  margin: 10px 0 10px 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  background-color: var(
    ${(props) => (props.active ? "--color-background" : "--color-font-primary")}
  );

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerNavMenu = styled.div`
  display: flex;
  color: black;
  z-index: 1;
  width: 80%;
  margin: 5% auto 25px;
  padding: 0;
  align-self: center;
  border-bottom: 0.3rem solid var(--color-background);

  nav {
    display: flex;
    padding: 0;
    margin: -1px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    li {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      color: #1b4977;
      list-style-type: none;
    }

    li:active,
    li:focus,
    li:hover {
      color: white;
      cursor: pointer;
      background-color: var(--color-background);
      transition: ease-in-out;
      transition-duration: 0.6s;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto 25px;
  }
  @media screen and (max-width: 813px) {
    width: 813px;
  }
`;

export const ContainerSubMenu = styled.div`
  position: relative;
  text-align: justify;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  display: flex;
  column-gap: 2%;
  letter-spacing: 0.5px;
  opacity: 0.95;
  color: #333;
  font-size: 1.1em;
  line-height: 1.8em;
  /* flex-direction: column; */

  li {
    padding: 10px;
    /* border: 1px solid #cecece; */
    height: min-content;
    width: 99%;
    height: min-content;
    margin: 5px;
    display: block;
    transition: ease-in-out 0.6s;

    &:hover {
      border-left: 0.1px solid #cecece;
      transform: scale(101%);
    }
  }

  @media screen and (max-width: 813px) {
    width: 90%;
  }
`;

export const ContainerMenuSuspenso = styled.div`
  padding: 20px;
  position: absolute;
  right: 100px;
  top: 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  background-color: white;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  width: 300px;
  z-index: 1;
`;

export const ContainerCardProposta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 23%;
  padding: 40px;
  margin-bottom: 2%;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .body {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: -80px;
  }

  @media screen and (max-width: 1500px) {
    padding: 20px;
  }

  @media screen and (max-width: 1300px) {
    width: 32%;
    padding: 40px;
  }

  @media screen and (max-width: 1100px) {
    padding: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 49%;
    padding: 40px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 300px) {
    padding: 20px;
  }
`;

export const ContainerSearch = styled.div<SContainerProps>`
  border-radius: ${(props) => props.borderRadius || "30px"};
  padding: 0px 10px;
  border: ${(props) => props.border};
  display: flex;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || "70%"};
  height: ${(props) => props.height || "46px"};

  input {
    color: ${(props) => props.color};
    border: 0px;
    background: ${(props) => props.background};
    width: 96%;
    height: 40px;
    border-radius: ${(props) => props.borderRadius || "30px"};
    outline: 0;
    height: 100%;

    @media screen and (max-width: 450px) {
      height: 40px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const ContainerSelect = styled.select<SContainerProps>`
  background-color: "rgba(0, 0, 0, 0)";
  border: 1px solid ${(props) => props.background};
  border-radius: 10px;
  padding: 10px;
  width: ${(props) => props.width};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background: url(${(props) => props.icon}); */
  /* background-repeat: no-repeat; */
  /* background-position: right; */
  padding-right: 30px;
  outline: none;
  color: var(${(props) => props.color || "--color-select"});
  @media screen and (max-width: 1100px) {
    &.filterSelect {
      width: 100%;
    }
  }
`;

export const ContainerMenuRight = styled.div<SContainerProps>`
  position: relative;
  width: 300px;
  height: 100vh;
  color: white;
  background-color: var(--navbar-color-button);
  z-index: 0;

  .container-header-painel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .title-h1 {
      margin-bottom: 0 !important;
    }
    .content-logout {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        color: white;
        font-weight: 200;
      }
    }
  }

  .closeButton {
    display: none;
  }

  .content-data {
    margin-top: 40px;
  }

  @media screen and (max-width: 900px) {
    display: none;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .closeButton {
      display: block;
      width: 100%;
      height: 40px;
      background-color: #13304c;
      color: #fff;
      position: absolute;
      bottom: 0;
    }
  }
`;

export const ContainerSelectAlternative = styled.select<SContainerProps>`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 10px;
  color: black;
  padding: 10px;
`;

export const ContainerChipCard = styled.div`
  width: 100%;

  .content-body-painel {
    display: flex;
    width: 90%;
    margin: auto 15px;
    align-items: center;

    border-bottom: 1px solid rgba(234, 234, 234, 0.3);
    h2 {
      color: white;
      margin: 10px;
      font-size: 20px;
      padding: 0 10px;
      font-weight: 350;
    }
  }

  .content-options-painel {
    padding: 5px 55px;

    h5 {
      font-weight: 200;
    }

    .subitens-h5 {
      text-decoration: none;
      font-weight: 200;
      margin-left: 20px;
      padding: 2px;
    }

    .btn-popUp:hover,
    .subtitle-p:hover,
    .subitens-h5:hover {
      font-weight: 200;
      font-size: 21px;
      color: white;
      content: "*";
    }
  }

  .btn-popUp {
    font-weight: 200;
    font-size: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const CopyRight = styled.div`
  width: 360px;
  left: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 940px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  border-top: 0.2px solid var(--color-border);
  font-size: 17px;
  font-weight: 200;
`;

export const ButtonMenu = styled.button<SContainerProps>`
  outline: 0;
  position: absolute;
  z-index: 1;
  left: ${(props) => (props.active ? "380px" : "0px")};
  width: 72px;
  height: 45px;
  top: 20px;
  border: 0;
  background-color: var(--navbar-color-button);
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
`;

export const ContainerChipLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 32%;
  height: 82px;
  padding: 0 15px 0 0;
  align-items: center;
  background-color: white;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  .span-icon {
    height: 50px;
    padding: 10px;
    width: 60px;
    background-color: var(--color-background);
    border-radius: 5px;
  }

  .span-text {
    text-align: center;

    .subtitle {
      color: #000;
      font-size: 12px;
      font-weight: 200;
    }
  }

  @media screen and (max-height: 700px) {
    display: none;
  }
`;

export const ContainerPopup = styled.div<SContainerProps>`
  background: #ffffff;
  position: fixed;
  width: 100%;
  height: 100%;
  transition: ease-in-out;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;

  .container-loading {
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 13;
    position: absolute;
    top: 50%;
    left: 46%;
    right: 46%;
  }

  .container-modal-popup {
    position: relative;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    z-index: 1;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height};
    margin: 50px auto;
    background: white;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: initial;
    }

    .header-two-popup {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: space-between;
      padding: 25px;

      h1 {
        color: var(--color-background);
        font-size: 21px;
      }

      .subtitle-p {
        font-size: 17px;
        color: black;

        @media screen and (max-width: 500px) {
          display: none;
        }
      }

      .btn-close {
        cursor: pointer;
      }
    }

    .header-popup {
      width: 100%;
      height: 10%;
      padding: 20px;

      .btn-back {
        background: 0px;
        border: 0;
      }
    }

    .container-popup {
      width: 100%;
      height: 78%;
      padding-bottom: 60px;
      overflow-y: auto;
    }
  }

  .cards {
    position: static;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 690px;
    top: 100px;
  }

  .not-found-itens {
    display: flex;
  }

  .cards .card-proposta:nth-last-child(1n) {
    margin-bottom: 70px;
  }
  .title-h2 {
    text-align: center;
    width: 120px;
    margin-left: auto;
    margin-right: auto;
    transition: ease-in-out 0.2s;
  }
  .title-h2:hover {
    font-size: 17px;
    cursor: pointer;
  }
`;

export const ContentProfile = styled.div`
  .content-default {
    padding: 30px;

    .content-basic-data {
      #file_id {
        width: 100%;
        padding: 10px;
      }

      div.data-overflow-data {
        height: 100%;
      }
      .double-data {
        display: flex;
        justify-content: space-between;

        .text-double {
          width: 49%;
        }
      }

      /* .text-areax {
        height: auto;
      } */

      .form-control-demand {
        margin-top: 15px;
      }

      .select-demand-popup {
        background-color: rgba(0, 0, 0, 0);
      }
    }
    .content-data-time {
      margin-top: 25px;
    }
    .title-h3 {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 18px;
    }
    .btns-popup {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      height: 80px;
      background: #fff;

      .btn-send,
      .btn-close-two {
        padding: 10px;
        border-radius: 15px;
        width: 48%;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
      }

      .btn-send {
        background-color: var(--color-background);
        color: white;
      }
      .btn-close-two {
        background-color: white;
        border: 1px solid var(--color-background);
      }
    }
  }

  .header-profile {
    height: 120px;
    width: 120px;
    margin: auto;

    img {
      width: 100%;
      border: 3px solid var(--color-background);
      border-radius: 100px;
      padding: 5px;
    }
  }

  .content-profile {
    padding: 20px;
    margin: 10px auto;
    border-top: 0.2px solid #cecece;
    width: 80%;
    text-align: center;

    .name-box h1 {
      line-height: 0.9;
      font-weight: 500;
    }

    .city-box,
    .charge-box {
      margin-top: 10px;
      font-weight: 100;
    }

    .job-box {
      margin-top: 40px;
      font-weight: 200;
    }

    .contact-box {
      font-weight: 500;
      margin-top: 0px;
    }

    .city-box {
      flex-direction: row;
      display: flex;
      margin: 80px auto;
      width: 160px;

      justify-content: center;
      align-items: center;

      span {
        margin-left: 10px;
        margin-top: 10px;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (max-width: 1400px) {
    .content-default .content-basic-data {
      div.data-overflow-data {
        overflow-y: scroll;
        height: 530px;

        &::-webkit-scrollbar {
          margin: 10px;
          width: 5px;
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
          background: #999;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #777;
        }
      }
    }
  }
`;

export const ContainerEixos = styled.div<SContainerProps>`
  background-image: url(${(props) => props.background});
`;

export const ContainerChipFilter = styled.div`
  .log-color {
    padding: 5px 12px;
    margin: 10px;
    background-color: ${(props) => props.color};
    border-radius: 5px;
  }
`;

export const ContainerCardChipDemandas = styled.div`
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  display: flex;

  .left-demanda {
    width: 5px;
    border-radius: 5px;
    height: 110px;
    background-color: ${(props) => props.color};
  }

  .right-demanda {
    margin-left: 10px;
    padding: 5px;
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .content-card-demanda .title-h2 {
      font-size: 16px;
      color: black;
    }

    .content-card-demanda .title-h1-card {
      color: var(--color-background-alternative);
    }

    .footer-card {
      width: 100%;

      p.date-footer {
        border-radius: 15px;
        width: 120px;
        text-align: center;
        padding: 5px 10px;
        font-weight: 500;
        font-size: 15px;
        color: #9f9999;
        background-color: var(--color-border);
      }
    }
  }
`;

export const ContainerNotFound = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtonForm = styled.button<SContainerProps>`
  width: ${(props) => props.width};
  background: var(--color-background);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  transition: ease-in-out 0.4s;
  padding: 15px;

  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    transform: scale(101%);
  }
`;

export const ContainerProposal = styled.div`
  .buttons-action {
    width: 200px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
  }

  .bnt {
    width: 47%;
    padding: 10px;
    height: 60px;
    color: white;
  }

  .reject-proposal {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: #dd3a3a;
  }

  .accept-proposal {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: #1c9420;
  }

  .info-proposal {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 500px) {
      flex-wrap: wrap;
    }
  }

  .info-descripton {
    margin-top: 30px;
    padding: 30px;
    display: block;
    justify-content: space-between;

    .info-sublined {
      margin-top: 30px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 30px;
      /* or 233% */

      text-align: justify;
      letter-spacing: 0.05em;

      color: #333333;
    }
  }
`;

export const ContainerCardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 90px;
  padding: 20px;
  background: #ffffff;
  font-size: 12px;
  text-align: justify;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .icon {
    margin-right: 15px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }

  .data-cardInfo {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentNav = styled.div`
  .menu-nav-hamburguer {
    height: 0;
  }
  /* hamburguer styled */
  .menu-hamburguer {
    z-index: 9;
    position: fixed;
    border-radius: 50%;
    right: 25px;
    bottom: 25px;
    width: 60px;
    height: 60px;
    border: 0;
    background: var(--color-background-opacity);
    box-shadow: 0 0 7px 1px var(--color-background-opacity);
    transition: cubic-bezier(1, 0.2, 0.98, 1) 0.2s;
  }

  .hamburguer-line {
    border-radius: 50%;
    display: flex;
    position: relative;
    top: 29px;
    left: 14px;
    width: 30px;
    height: 2px;
    background: white;
    transition: cubic-bezier(0, 0.5, 0.58, 1.3) 0.2s;
  }

  .hamburguer-line:before,
  .hamburguer-line:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: white;
    position: absolute;
  }

  .hamburguer-line:before {
    top: -10px;
  }

  .hamburguer-line:after {
    bottom: -10px;
  }

  .menu-hamburguer:hover {
    transform: scale(110%);
  }

  input {
    display: none;
  }

  input:checked ~ label .menu-hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer-line:before {
    transform: rotate(90deg);
    top: 0px;
  }

  input:checked ~ label .hamburguer-line:after {
    bottom: 0;
  }

  input:checked ~ label .menu-hamburguer {
    z-index: 7;
    box-shadow: 0 0 0 1000vw var(--color-background);
  }

  input:checked aside {
    visibility: visible;
  }

  aside {
    visibility: hidden;
  }

  @media only screen and (min-width: 1100px) {
    .menu-hamburguer,
    .ul-mobile {
      display: none;
    }
  }

  @media only screen and (max-width: 1100px) {
    .nav-menu-main {
      display: none;
    }

    .ul-mobile {
      display: block;
    }
  }
`;

export const ContentMobileMenu = styled.div<SContainerProps>`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  position: fixed;
  transition: cubic-bezier(0, 0.5, 0.58, 0) 0.1s;
  z-index: 9;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 39%;
  right: 39%;

  .link-btn-mobile {
    padding: 20px;
    display: flex;
    flex-direction: row;

    p {
      font-size: 24px;
      color: white;
      transition: ease-in-out 0.2s;
    }

    p:hover {
      transform: scale(110%);
    }
  }
`;

export const CardDocsStyled = styled.div<SContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left-doc,
  .right-doc {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .right-doc {
    width: 30%;
    justify-content: space-evenly;
  }

  .left-doc {
    width: 70%;

    .color-doc {
      background-color: ${(props) => props.color};
      margin: 20px;
      height: 70%;
      padding: 2px;
      border-radius: 50px;
    }

    .data-docs {
      display: flex;
      flex-direction: column;

      .data-docs-especify {
        display: flex;
        flex-direction: row;

        @media screen and (max-width: 500px) {
          &:last-of-type {
            display: none;
          }
        }

        p {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const ContainerInputFile = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px 3px #184c78;
  border-radius: 5px;
  background-color: #184c78;
  color: white;
  margin: 30px 0 30px;
  transition: ease-in-out 0.2s;

  input {
    display: none;
  }

  &,
  label {
    transition: ease-in-out 0.2s;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.01);
  }

  label:hover {
    font-weight: 700;
  }
`;

export const ComponenteDropdown = styled.div`
  margin: -10px;

  .text-item {
    margin: 0px;
    padding: 0;
    color: black;
  }

  .dropdown {
    border: 0px;
  }

  .dropdown-nav:active,
  .dropdown-nav:focus {
    background: var(--color-background);
  }
`;
