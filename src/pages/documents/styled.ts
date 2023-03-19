import styled from "styled-components";

export const ContainerDocuments = styled.div`
  .container{
    margin: auto;
    width: 85%;
    padding-bottom: 25px;
    .header-btn{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      margin-top: 30px;
      h1{
        font-size: 0;
        span{
          font-size: 20px;
          letter-spacing: -1px;
          font-weight: bold;
        }
      }

      .controls{
        display: flex;
        height: 40px;
        input, select{
          padding: 0 10px;
          width: 400px;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin-right: 10px;
        }
        input{
          margin-right: 0;
        }
        button{
          color: #fff;
          margin-left: 10px;
          height: 100%;
          display: flex;
          font-size: 14px;
          font-weight: bold;
          padding-right: 15px;
          align-items: center;
          justify-content: center;
          background: var(--color-background);
        }
      }
    }
    .content-docs{
      grid-template-columns: auto auto auto;
      grid-gap: 20px;
      .notFound{
        border: 1px solid #f3f3f3;
        background: #fbfbfb;
        width: 100%;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          color: #b9b9b9;
        }
      }
    }
  }
  /* @media screen and (max-width: 500px) {
      .infoIcon {
        display: none;
      }
      .downloadIcon {
        width: 38px;
      }
    } */
`;
