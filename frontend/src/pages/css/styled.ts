import styled from "styled-components";
import { SContainerProps } from "../../interfaces/global.interface";

export const ContainerPage = styled.div<SContainerProps>`
  width: 100%;
  z-index: 1;
  background-color: white;

  .form-control-demand-forgout {
    margin-top: 20px;
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
    margin: 60px 0;
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
    width: 105%;
    padding: 10px;
  }

  .eixos-programmer,
  .others-news {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .card-eixo-home {
      margin: 20px;
    }
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
      .link-painel {
        color: white;
      }
      margin-top: 118px;
      border-radius: 20px;
      width: 38vw;
      height: 80%;

      span {
        padding: 10px;
      }
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

    .eixos-programmer,
    .others-news {
      justify-content: center;
      align-items: center;
    }

    .others-news > :nth-child(1n + 1) {
      margin: 10px;
    }
  }

  .container-footer {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin: -100px auto;
  }

  .duvida {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
    height: 350px;
    top: 200px;
    left: 9.4vw;
    right: 9.4vw;

    .duvida-msg {
      margin-top: 80px;
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
        }

        .cards-demandas {
          display: flex;
          flex-wrap: wrap;
          margin-top: 40px;

          .box-demanda {
            margin: 12px;
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
    width: 200px;
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
    right: 100px;
  }

  .container {
    z-index: 0;
    height: 100%;
    margin-top: 30px;
    width: 100%;

    .content-header {
      display: flex;
      align-items: center;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 50px auto 10px;

      .btn-header {
        width: 200px;
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
        display: flex;

        flex-direction: row;
        margin: 10px 0px;
        width: 32%;
        display: flex;
        justify-content: space-between;
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
  background-image: url(${(props) => props.background});
`;
