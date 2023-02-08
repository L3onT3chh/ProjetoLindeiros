/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { SContainerProps } from "../../interfaces/global.interface";

export const ContainerPage = styled.div<SContainerProps>`
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.backgroundColor || "white"};

  @media screen and (max-width: 1000px) {
    .welcomeLoginCard {
      display: none;
    }
    .login,
    .login .form-login {
      width: 100% !important;
    }
  }

  .container-page {
    width: 100%;
    height: 35vh;
    bottom: 0;
    background: #1b4977;
    box-shadow: 0px -15px 63px 103px #1b4977;

    .title-main {
      font-weight: 500;
      color: #1b4977;
      font-size: 65px;
    }

    .title-h2 {
      margin-top: -20px;
      font-size: 23px;
    }
  }
  .form-control-demand-forgout {
    margin-top: 20px;
  }

  .content-demanda {
    overflow-x: auto;
  }

  .create-proposal {
    position: absolute;
    border: 1px solid var(--color-background);
    padding: 10px;
    right: 100px;
    top: 150px;
    border-radius: 10px;
    background: white;
    color: var(--color-background);
    transition: ease-in-out 0.7s;
    font-size: 15px;
    font-weight: 500;
    z-index: 5;

    &:hover {
      transform: scale(105%);
    }
  }

  .content-body {
    width: 80%;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1400px) {
      width: 90%;
    }
  }

  .description-about {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
    align-items: center;

    .logo-about {
      border-radius: 5px;
      margin-right: 70px;
    }

    .description {
      text-align: justify;
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

  .news-container .title-h1 {
    margin: 60px 0 40px;
  }

  .filters-demandas-modal {
    width: 100%;
    margin: 0px;

    h1 {
      margin-bottom: 10px;
    }
    .search {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
    }

    input {
      margin-right: 10px;
    }
  }
  .news-content {
    width: 100%;
    padding: 10px;

    .mainNews {
      width: 100% !important;
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
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 35px;

    .form-login {
      .link-painel {
        color: white;
      }
      margin-top: 50px;
      border-radius: 20px;
      width: 38vw;

      span {
        padding: 10px;
      }
    }

    @media screen and (max-width: 500px) {
      padding: 10px;
    }
  }

  @media (max-width: 1222px) {
    .description-about {
      margin-top: 100px;
      flex-direction: column;
      text-align: center;
      transition: ease-in-out 0.2s;

      .logo-about {
        margin: 0;
      }
    }

    .eixos-programmer {
      justify-content: center;
      align-items: center;
    }

    .others-news {
      display: none;
    }

    .others-news > :nth-child(1n + 1) {
      margin: 10px;
    }
  }

  .container-footer {
    width: 80%;
    display: flex;
    justify-content: center;
    column-gap: 5%;
    margin: 30px auto 0;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      width: 100%;
    }
  }

  .duvida {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
    height: 350px;
    margin: 5% auto 5%;

    @media screen and (max-width: 1000px) {
      width: 90%;
    }

    .duvida-msg {
      margin-top: 60px;
      width: 100%;
    }
  }

  .container-banner {
    z-index: 1;
    height: 300px;
    background: url(${(props) => props.background});
    padding: 50px;
    left: 0;
    right: 0;
    z-index: 0;

    .data-banner {
      width: 50%;
      height: 200px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px;

      .spacing {
        padding: 10px;
      }

      .data-info {
        font-size: 18px;
      }
    }

    @media screen and (max-width: 813px) {
      display: flex;
      align-items: center;
      padding: 25px;

      .data-banner {
        height: fit-content;
        flex-direction: column;

        .create-proposal {
          position: initial;
          top: initial;
          right: initial;
          margin-top: 15px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      padding: 10px;
      justify-content: center;
      .data-banner {
        width: 100%;
      }
    }
  }

  .banner-index {
    z-index: 1;
    width: 100%;
    height: 300px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container-banner-demandas {
    .data {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: -150px;

      .right-demandas,
      .left-demandas {
        position: absolute;
        top: 150px;
      }

      .left-demandas {
        left: 250px;

        @media screen and (max-width: 1500px) {
          left: 200px;
        }

        @media screen and (max-width: 1300px) {
          left: 150px;
        }

        @media screen and (max-width: 1100px) {
          z-index: 2;
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;

          .menu-suspenso-demandas {
            justify-content: space-evenly;
            right: 0;
            width: 100%;
            height: 100%;
          }
        }
      }

      .right-demandas {
        right: 200px;
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 500px;

        .search-demandas {
          justify-content: space-between;
          padding-top: -200px;
          height: 55px;
          display: flex;
          width: 100%;

          @media screen and (max-width: 450px) {
            flex-direction: column;
          }

          @media screen and (max-width: 450px) {
            select {
              display: none;
            }
          }
        }

        .filters-demandas {
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: rgba(51, 51, 51, 0.8);
          margin-top: 100px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 50px;
          padding: 15px;

          @media screen and (max-width: 1100px) {
            margin-top: 80px;
          }

          @media screen and (max-width: 450px) {
            display: none;
          }
        }

        .cards-demandas {
          display: flex;
          flex-wrap: wrap;
          margin-top: 40px;
          column-gap: 2%;

          .demandaCardItem {
            width: 23%;
            margin-bottom: 2%;
          }

          @media screen and (max-width: 1100px) {
            margin-top: 20px;
          }

          @media screen and (max-width: 450px) {
            margin-top: 60px;
          }
        }

        @media screen and (max-width: 1700px) {
          width: 55%;
        }

        @media screen and (max-width: 1500px) {
          right: 150px;

          .cards-demandas {
            .demandaCardItem {
              width: 32%;
            }
          }
        }

        @media screen and (max-width: 1300px) {
          width: 65%;
          right: 50px;
        }

        @media screen and (max-width: 1200px) {
          width: 60%;
        }

        @media screen and (max-width: 1100px) {
          width: 80%;
          left: 50%;
          margin-left: -40%;
          top: 100px;
        }

        @media screen and (max-width: 900px) {
          width: 90%;
          margin-left: -45%;
        }
        @media screen and (max-width: 900px) {
          width: 96%;
          margin-left: -48%;
        }
        @media screen and (max-width: 600px) {
          .cards-demandas {
            .demandaCardItem {
              width: 49%;
            }
          }
        }
        @media screen and (max-width: 450px) {
          .cards-demandas {
            .demandaCardItem {
              width: 100%;
            }
          }
        }
      }
      .menu-suspenso-demandas {
        top: 0px;
        position: relative;
      }
    }
    .header {
      background: rgba(27, 73, 119, 0.85);
      height: 200px;

      @media screen and (max-width: 450px) {
        height: 180px;
      }
    }
  }
  .notFound {
    text-align: center;
    margin-top: 100px;
  }
`;

export const ContainerPainel = styled.div<SContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;

  .btn-click-clear {
    padding: 10px;
    align-items: center;
    display: flex;
    background: rgba(0, 0, 0, 0);
    transition: ease-in-out 0.2s;
  }

  .btn-click:hover {
    font-weight: 500;
    transform: scale(110%);
  }

  .clear {
    position: absolute;
    right: 0px;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .container {
    z-index: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 576px) {
      max-width: 100% !important;
    }

    .container-header-main {
      margin-bottom: 2%;
    }

    .content-header {
      display: flex;
      align-items: center;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 50px auto 10px;

      @media screen and (max-width: 500px) {
        flex-direction: column-reverse;
      }

      .btn-header {
        width: 200px;

        @media screen and (max-width: 500px) {
          button {
            width: 100% !important;
            margin-top: 15px !important;
          }
        }
      }
    }
    .container-header-main,
    .statistic,
    .chips-footer {
      margin-left: 15px;
    }

    .statistic,
    .chips-footer {
      margin-top: 20px;
      display: flex;

      .content-box {
        margin: 0 20px 0 0;
      }
    }

    .card-header {
      background: rgba(0, 0, 0, 0);
      border: 0;
      display: flex;
      flex-direction: row;

      .cardP {
        margin: 0 20px 0 0;
      }
    }

    .content-body-painel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0;
      margin: 0%;

      .content-filter-painel {
        position: relative;
        display: flex;

        flex-direction: row;
        margin: 50px 0px 0;
        width: 100%;
        display: flex;

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }

    table {
      .menu-popup {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
      }
      margin-top: 20px;
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background: white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

      .one-row-title {
        background-color: var(--color-background);
        padding: 10px;

        th {
          padding: 15px;
          color: white;
          width: 200px;
          text-align: center;
        }

        #title-name,
        #title-user {
          width: 350px;
        }
      }

      .divisor {
        height: 100px;
        border: 1px solid #cecece;
        margin: 10px;
        margin-left: 5px;
      }

      .field-name {
        width: 300px;
      }
      .field-styled {
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        border-right: 1px solid #cecece;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 50px;
      }

      .row-content:hover {
        background-color: white;
        box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.25);
        transform: scale(101%);
      }

      .row-content {
        outline: none;
      }

      .row-content {
        transition: ease-in-out 0.4s;

        .update-icon {
          cursor: pointer;
        }

        th {
          padding: 5px;
          text-align: center;
          font-weight: 200;
        }
      }
    }
  }
`;

export const ContainerBackground = styled.div<SContainerProps>`
  position: relative;
  background-image: url(${(props) => props.background});
`;
