import styled from "styled-components";

export const ContainerDemandas = styled.div`
  width: 70%;
  height: 676x;
  background: #ffffff;
  box-shadow: -4px 6px 22px -4px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  padding: 30px;
  transform: matrix(1, 0, 0, 1, 0, 0);

  .data-header {
    margin-top: -20px;
    border-bottom: 1px solid #dfdfdf;
  }

  .title-data-demanda {
    display: flex;
    margin-top: 44px;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 23px;
    font-weight: 200;
    line-height: 110%;
    margin-right: 12px;
  }

  input {
    margin: 10px 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    mix-blend-mode: normal;
    border: 0.5px solid #c4c4c4;
    padding: 10px;
    border-radius: 14px;
  }

  .field-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-field,
    .right-field {
      width: 48%;
    }
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

  a {
    color: black;
    right: 0;
    float: right;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 9px;
    height: 110px;
    padding: 10px;
  }

  textarea#textarea-description {
    margin-bottom: 30px;
  }

  .data-content {
    border-bottom: 1px solid #dfdfdf;
  }
  .btn-send-demanda {
    width: 26%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .cad-demanda,
  .exit-demanda {
    padding: 15px 25px;
    border-radius: 19px;
    color: white;
    outline: none;
  }

  .cad-demanda {
    background-color: #1f1368;
  }

  .exit-demanda {
    background-color: #ee0202;
  }
`;
