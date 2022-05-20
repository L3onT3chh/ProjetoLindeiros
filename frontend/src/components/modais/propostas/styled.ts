import styled from "styled-components";

export const ContainerProposta = styled.div`
  width: 70%;
  height: 676x;
  background: #ffffff;
  box-shadow: -4px 6px 22px -4px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  padding: 30px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 1;
  .btn-close {
    margin-left: 97%;
  }

  .data-header {
    border-bottom: 2px solid #dfdfdf;
    margin-top: -20px;
  }

  .title-data-proposta {
    display: flex;
    margin-top: 44px;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 9px;
    height: 110px;
    padding: 10px;
  }

  select {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #c4c4c4;
    padding: 10px;
    border-radius: 9px;
    margin: 10px 0 10px 0;
    outline: 0;
  }

  .field-budget {
    display: flex;
    justify-content: space-between;

    input {
      width: 48.5%;
    }
  }

  textarea#textarea-description {
    margin-bottom: 30px;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 23px;
    font-weight: 200;
    line-height: 110%;
    margin-right: 12px;
  }

  #h3_team {
    margin-top: 20px;
  }

  input {
    margin: 10px 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border: 0.5px solid #c4c4c4;
    padding: 10px;
    border-radius: 14px;
  }

  .data-content {
    padding-bottom: 20px;
    border-bottom: 1px solid #cfcfcf;
  }

  .field-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-field,
    .right-field {
      width: 48%;
    }

    .right-field {
      margin-top: -35px;
    }
  }

  .field-user-data {
    display: flex;
    justify-content: space-between;

    input[type="number"] {
      width: 70px;
    }

    input[type="phone"],
    input[type="email"] {
      width: 42%;
    }
  }

  a {
    float: right;
    color: black;
  }

  .btn-send-proposta {
    width: 24%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .cad-proposta,
  .exit-proposta {
    padding: 15px;
    border-radius: 19px;
    outline: none;
    color: white;
  }

  .cad-proposta {
    background-color: #1f1368;
  }

  .exit-proposta {
    background-color: #ee0202;
  }
`;
