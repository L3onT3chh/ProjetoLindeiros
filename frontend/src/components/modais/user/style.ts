import styled from "styled-components";

export const ContainerUser = styled.form`
  width: 31%;
  height: 850px;
  background: #ffffff;
  box-shadow: -4px 6px 22px -4px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 0 40px;

  .btn-close {
    margin-left: 95%;
  }
  .data-header {
    text-align: center;
    border-bottom: 2px solid #dfdfdf;
  }
  .user-data-form {
    width: 100%;
  }

  .title-data-user {
    display: flex;
    margin-top: 50px;

    h3 {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 23px;
      line-height: 110%;
    }
  }

  input {
    margin: 10px 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    mix-blend-mode: normal;
    border: 1px solid #c4c4c4;
    padding: 10px;
    border-radius: 14px;
  }

  .text-field {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    font-size: 19px;
    line-height: 0%;
  }

  .user-personal {
    display: flex;
    justify-content: space-between;

    input {
      width: 48%;
    }
  }

  .user-city {
    display: flex;
    justify-content: space-between;

    #field-municipio {
      width: 77%;
    }

    #field-uf {
      width: 20%;
    }
  }

  .type-user {
    width: 100%;
    border: 0.5px solid #c4c4c4;
    padding: 10px;
    margin: 10px 0 10px 0;
    border-radius: 14px;
    outline: none;
    background: rgba(0, 0, 0, 0);
  }

  .user-contact {
    display: flex;
    justify-content: space-between;

    input[type="number"] {
      width: 18%;
    }

    input[type="phone"] {
      width: 38%;
    }

    input[type="email"] {
      width: 38%;
    }
  }

  .user-valid-password {
    display: flex;
    justify-content: space-between;
    input[type="password"] {
      width: 48.5%;
    }
  }

  .btn-send-user {
    width: 56%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .cad-user,
  .exit-user {
    padding: 15px;
    border-radius: 19px;
    outline: none;
    color: white;
  }

  .cad-user {
    background-color: #1f1368;
  }

  .exit-user {
    background-color: #ee0202;
  }
`;
