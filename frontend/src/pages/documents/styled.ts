import styled from "styled-components";

export const ContainerDocuments = styled.div`
  .container {
    background-color: #fff;
    padding: 20px;
  }

  .itens .card-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.25);
    border-radius: 23px;
    background: #fafafa;
    height: 130px;
    margin: 50px 25px;
  }

  h1 {
    border-left: 5px solid #1f1368;
    margin-top: 50px;
  }

  h1 span {
    margin-left: 20px;
  }

  .info-card {
    display: flex;
    flex-direction: row;
    width: 29%;
    padding: 25px;
    justify-content: space-between;
    h3 {
      font-size: 20px;
    }

    h3,
    #author-doc,
    #date-doc {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
      color: #717171;
    }

    #date-doc,
    #author-doc {
      font-size: 13px;
    }

    span#border-span {
      margin-left: 10px;
      border: 1px solid #dfdfdf;
    }
  }

  .description-card {
    padding-top: 25px;
    width: 60%;
    p {
      text-align: justify;
      text-indent: 50px;
    }

    text-align: right;
  }

  .buttons-card {
    width: 15%;
    padding: 25px;
    button {
      background-color: #03a64a;
      margin-left: 20px;
      border-radius: 50px;
      padding: 10px;
      outline: none;
      transition: 0.2s ease-in-out;
    }

    button:hover {
      background-color: #025940;
    }
  }
`;
