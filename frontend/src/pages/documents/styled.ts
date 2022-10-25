import styled from "styled-components";

export const ContainerDocuments = styled.div`
  .container {
    background-color: #fff;
    padding: 20px;

    @media screen and (max-width: 500px) {
      padding: 8px;
    }

    h1{
      span{
        font-size: 30px;

        @media screen and (max-width: 700px) {
          font-size: 20px;
        }

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }

    @media screen and (max-width: 1400px) {
       width: 100%;
       max-width: 100%;
    }
  }

  .content-docs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header-btn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .btn-docs {
      height: 40px;
      margin-top: 40px;
    }
  }

  .right-doc{
    @media screen and (max-width: 500px) {
      .infoIcon{
        display: none;
      }
      .downloadIcon{
        width: 38px;
      }
    }
  }
`;
