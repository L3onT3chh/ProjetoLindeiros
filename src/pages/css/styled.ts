import styled from "styled-components";
import { SContainerProps } from "../../interfaces/global.interface";

export const ContainerPage = styled.div<SContainerProps>`
  width: 100%;
  z-index: 1;
  

  .ResponsiveFilter{
    z-index: 9;
    position: fixed;
    border-radius: 50%;
    right: 25px;
    bottom: 100px;
    display: none;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 0;
    background: #fff;
    box-shadow: 0 0 7px 1px var(--color-background-opacity);
    transition: cubic-bezier(1, 0.2, 0.98, 1) 0.2s;

    @media screen and (max-width: 1100px) {
      display: flex;
    }
  }

  .limiter{
    width: 80vw;
    max-width: 1920px;
    margin: auto;
  }

  .double-data{
    display: flex;
    column-gap: 10px;
  }

  &.complete{
    .card{
      max-height: 95%;
      overflow: hidden auto !important;
      h1{
        font-size: 18px!important;
      }
    }
  }

  &.notFound{
    .data-notFound{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title-main{
        margin-top: 25px;
        font-size: 45px!important;
      }
      .title-h2{
        font-size: 18px!important;
        opacity: 0.9;
      }
      .btnInit{
        padding: 0 15px;
        height: 50px;
        margin-top: 35px;
        background: var(--color-background);
        color: #fff;
      }
    }
  }

  &.retrive{ 
    .card{
      background-color: #fff;
      width: 30vw;
      padding: 30px;

      h1{
        font-size: 22px;
        color: var(--color-background);
        margin-bottom: 20px;
      }

      button{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        color: #fff;
        margin: 10px 0;
        background-color: var(--color-background);
      }

      .back{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
      }
    }
  }

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    bottom: 0;
    background-image: linear-gradient(120deg, #4bc0c0 0%, #1b4977 100%);

    .title-main {
      font-weight: 500;
      color: #143555;
      font-size: 65px;
    }

    .title-h2 {
      color: #143555;
      margin-top: -20px;
      font-size: 23px;
    }
  }
  .form-control-demand-forgout {
    margin-top: 10px;

    input{
      margin-bottom: 5px!important;
    }
  }

  .content-demanda {
    width: 60%;
    padding-left: 100px;
    padding-top: 50px;

    .objetivoGeral{
      margin-bottom: 80px;
      h1{
        font-size: 27px;
        color: #1b4977;
        font-weight: bold;
        padding-left: 20px;
        border-left: 3px solid #1b4977;
      }
      .text{
        margin-top: 40px;

        p{
          text-align: justify;
          color: #333;
          font-size: 1.1rem;
          line-height: 40px;
          margin-bottom: 15px;
          line-break: anywhere;
        }
      }
    }

    .objetivoEspecifico{
      margin-bottom: 80px;
      h1{
        font-size: 27px;
        color: #1b4977;
        font-weight: bold;
        padding-left: 20px;
        border-left: 3px solid #1b4977;
      }
      .text{
        margin-top: 40px;

        ul{
          padding: 0;
          li{
            display: -webkit-box;
            align-items: center;
            height: fit-content;
            padding: 0;
            margin-bottom: 35px;

            &::before{
              content: '.';
              display: block;
              margin-right: 20px;
              width: 10px;
              height: 10px;
              color: #1b4977;
              background-color: #1b4977;
              border-radius: 50%;
            }

            p{
              color: #333;
              font-size: 1.1rem;
              line-height: 30px;
            }
          }
        }
      }
    }

    .proposalList{
      padding-bottom:  80px;
      h1{
        font-size: 27px;
        color: #1b4977;
        font-weight: bold;
        padding-left: 20px;
        border-left: 3px solid #1b4977;
      }
      .content{
        position: relative;
        margin-top: 50px;
        padding: 10px 0 10px 25px;
        border-left: 2px solid rgba(0, 0, 0, 0.2);
        .item{
          cursor: pointer;
          border-radius: 5px;
          margin-bottom: 30px;
          .data{
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            p{
              position: relative;
              font-size: 15px;
              &::before{
                content: '.';
                position: absolute;
                left: -30px;
                display: block;
                margin-right: 20px;
                width: 10px;
                height: 10px;
                color: #1b4977;
                background-color: #1b4977;
                border-radius: 50%;
              }
            }
          }
          .detalhe{
            padding: 15px 50px 15px 25px;
            width: fit-content;
            border: 1px solid rgba(0,0,0,0.2);
            border-radius: 5px;
            &:hover{
              border-color: #1f1368;
            }
            h4{
              font-weight: bold;
              font-size: 15px;
              letter-spacing: -0.1px;
              color: #333;
              margin: 0;
            }
            p{
              margin-top: 2.5px;
              color: #333;
              font-size: 0.85rem;
            }
          }
        }
      }
    }


  }

  .create-proposal {
    position: absolute;
    z-index: 3;
    background: #fff;
    right: 0;
    top: 15px;
    width: 300px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
    z-index: 1;

    .orcamento, .data{
      margin-top: 15px;
      padding-left: 25px;

      p{
        font-size: 0.9rem;
        opacity: 0.9;
      }
      h2{
        color: #1f1368;
        font-size: 1.1rem;
        margin: 0;
        font-weight: bold;
      }
    }

    .title{
      color: #1f1368;
      font-size: 1rem;
      font-weight: bold;
      margin: 40px 0 10px 25px;
    }

    .lista{
      padding: 0 0 25px 25px;

      li{
        display: flex;
        align-items: center;
        padding-left: 0;
        height: 40px;
        line-height: 40px;
        color: #1f1368;
        font-size: 0.9rem;

        p{
          margin-left: 10px;
          line-height: 15px;
          line-break: anywhere;
        }
      }
    }

    button{
      background-color: #1f1368;
      cursor: pointer;
      color: #fff;
      width: 100%;
      height: 50px;
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
    width: 44%;
    right: 0;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 35px 60px;

    .message{
      h1{
        font-size: 25px;
        margin-bottom: 10px;
        color: rgb(75, 209, 151);
      }
      p{
        text-align: justify;
        font-size: 14px;
        line-height: 25px;
        opacity: 0.9;
        &:last-of-type{
          margin-top: 15px;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
    .form-login {
      .link-painel {
        color: white;
      }
      border-radius: 20px;
      width: 100%;

      span {
        padding: 10px;
      }

      .forgotText{
        width: 100%;
        text-align: right;
        color: var(--color-background);
        letter-spacing: -0.5px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 15px;
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

    .createAccount{
      font-size: 14px;
      opacity: 0.8;

      b{
        color: var(--color-background);
        cursor: pointer;
      }
    }

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
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    padding: 10px;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    z-index: 0;

    .content-container{
      position: relative;
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .data-banner {
        width: 70%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .demandDescription{
          width: 80%;
          opacity: 0.95;
          line-height: 20px;
          margin: 15px 0 40px;
          color: #fff !important;
          z-index: 1;
          line-break: anywhere;
        }

        .spacing {
          padding: 10px;
        }

        .data-info {
          display: flex;
          column-gap: 15px;
          margin-top: 10px;
          font-size: 18px;
        }
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
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(5px);
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

        .btnAddDemand{
          width: 100%;
          height: 50px;
          background: var(--color-background);
          color: #fff;
          margin-top: 15px;
        }

        @media screen and (max-width: 1500px) {
          left: 200px;
        }

        @media screen and (max-width: 1300px) {
          left: 150px;
        }

        @media screen and (max-width: 1100px) {
          display: none;
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

        @media screen and (min-width: 1100px) {
          display: block!important;
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
          margin-top: 30px;
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
  height: 100vh;
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

  .container.home {
    justify-content: center;
    padding-bottom: 0!important;
  }

  .container {
    z-index: 0;
    height: 100vh;
    width: 100%;
    padding: 30px;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    padding-bottom: 35px;
    overflow-y: auto;

    @media screen and (max-width: 576px) {
      max-width: 100% !important;
    }

    @media screen and (max-width: 900px) {
      margin-left: 0;
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

    .statistic{
      flex-direction: column;
      margin-left: 0;
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
        column-gap: 1%;
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

      .field-button {
        max-width: 150px;
        width: 80%;
        color: #fff;
        padding: 5px 0;
        font-size: 0.9rem;
        display: block;
        margin: auto;
        background-color: var(--color-background);
        cursor: pointer;
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

  .container.nonadmin{
    display: grid;
    height: 100%;
    grid-template-columns: 70% 30%;
    max-width: 100%;
    padding: 0!important;

    @media screen and (max-width: 1100px) {
      grid-template-columns: 100%;
    }

    aside{
        padding: 30px;
        border-left: 1px solid rgba(0,0,0,0.1);

        .profile{
          .controls{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;

            p{
              font-size: 18px;
              font-weight: bold;
            }
            button{
              background: transparent;
            }
          }
          img{
            weight: 150px;
            height: 150px;
            border-radius: 50%;
            display: block;
            margin: 0 auto 25px;
          }
          h2{
            font-size: 20px;
            text-align: center;
            font-weight: bold;
          }
          p{
            font-size: 13px;
            opacity: 0.8;
            text-align: center;
          }
        }
        .proposalRecent{
          width: 100%;
          margin-top: 40px;
          h2{
            font-size: 18px;
            font-weight: bold;
          }
          .notFound{
            width: 100%;
            height: 80px;
            background: #f9f9f9;
            border: 1px solid #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            opacity: 0.7;
          }
          ul{
            margin: 20px 0 0 0;
            padding: 0;
            width: 100%;
            li{
                width: 100%;
                padding: 10px 15px;
                border: 1px solid rgba(0,0,0,0.2);
                border-radius: 5px;
                height: fit-content;
                margin-bottom: 15px;
                h4{
                  font-weight: bold;
                  font-size: 15px;
                  letter-spacing: -0.1px;
                  color: #333;
                  margin: 0 0 5px;
                }
                p{
                  margin-top: 2.5px;
                  color: #333;
                  font-size: 0.7rem;
                  line-height: 18px
                }
              }
            }
        }
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
    }

    main{
      padding: 30px;
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        .left{
          h1{
            font-size: 22px;
            letter-spacing: -0.5px;
            font-weight: bold;
          }

          p{
            font-size: 15px;
            opacity: 0.8;
          }
        }
        .bell{
          position: relative;
          cursor: pointer;
          .notify{
            position: absolute;
            top: -10px;
            right: -10px;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background-color: #e5294e;
            color: #fff;
            font-weight: bold;
            line-height: 22px;
            text-align: center;
            font-size: 12px
          }
        }
      }
      .tutorial{
        width: 100%;
        padding: 30px;
        background-color: aliceblue;
        border-radius: 10px;
        display: flex;
        
        .info{
          h1{
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          p{
            font-size: 18px;
            opacity: 0.8;
          }
          
          .steps{
            margin-top: 35px;
            .item{
              display: grid;
              grid-template-columns: 50px auto;
              grid-gap: 20px;
              margin-bottom: 30px;
              &:last-of-type{
                margin-bottom: 0;
              }
              .icon{
                width: 50px;
                height: 50px;
                border-radius: 8px;
                background: #d3e9ff;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              p{
                font-size: 16px;
                line-height: 20px;
              }
              @media screen and (max-width: 1600px) {
                p{
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
      @media screen and (max-width: 450px) {
        padding: 15px;
        .tutorial{
          padding: 15px;
          .info{
            p{
              font-size: 15px;
            }
            h1{
              font-size: 20px;
            }
          }
        }
      }
      @media screen and (max-width: 250px) {
        padding: 8px;
        .top{
          .bell{
            display: none;
          }
        }
        .left{
          width: 100%;
        }
      }
    }
  }
`;

export const ContainerBackground = styled.div<SContainerProps>`
  position: relative;
  background-image: url(${(props) => props.background});
`;
