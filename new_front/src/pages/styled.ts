import styled from "styled-components";
import { SContainerProps } from "../interfaces/global.interface";

export const ContainerPage = styled.div<SContainerProps>`
  width: 100%;
  z-index: 1;
  background-color: white;

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
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
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
      margin-top: 118px;
      border-radius: 20px;
      width: 38vw;
      height: 80%;

      span {
        padding: 10px;
      }
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
    top: 950px;
    left: 9.4vw;
    right: 9.4vw;

    .duvida-msg {
      margin-top: 80px;
      width: 100%;
    }
  }

  .header-search {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    margin: 80px auto;
    justify-content: space-around;
  }

  .container-demandas {
    margin: -80px;

    .content-demandas {
      right: 0;
      top: 250px;
      width: 100vw;
      display: flex;
      position: absolute;
      flex-direction: row;
      justify-content: space-between;

      .right {
        .sublined-text-demandas {
          margin: auto 40px 100px;
        }
        position: absolute;
        left: 450px;
        max-width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 75%;
        z-index: -1;

        .right-content {
          margin-top: 100px;
        }
      }

      .left {
        width: 18%;

        .button-filter-responsive {
          visibility: hidden;
          display: flex;
          align-items: center;
          width: 70px;
          justify-content: space-around;
          cursor: pointer;
          text-align: center;
          color: white;
          background-color: var(--color-background);
          color: white;
          z-index: 1;
          position: static;
          padding: 5px;
          border: 0px;
          border-radius: 5px;
          /* border: 0px; */

          .icon-responsive {
            width: 35px;
            height: 35px;
            text-align: center;
            transition: ease-in-out 0.6s;
            margin-left: 20px;
          }
        }

        .button-filter-responsive:hover {
          background-color: var(--navbar-color-button);
        }
      }

      @media (max-width: 1300px) {
        .left .content-filter-div {
          position: static;
          top: 150px;
          visibility: ${(props) => (props.active ? "visible" : "hidden")};
        }

        .left .button-filter-responsive {
          visibility: visible;
        }

        .left {
          width: 5px;
        }

        .right {
          width: 100vw;
          left: 50px;
        }
      }
    }
  }
`;

export const ContainerPainel = styled.div<SContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;

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
        width: 60%;
        display: flex;
        justify-content: space-between;
      }
    }

    table {
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

      .row-content {
        .update-icon {
          cursor: pointer;
        }
        th {
          text-align: center;
          padding: 10px;
          font-weight: 200;
        }
      }
    }
  }
`;

export const ContainerBackground = styled.div<SContainerProps>`
  background-image: url(${(props) => props.background});
`;
