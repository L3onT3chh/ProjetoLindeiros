import styled from "styled-components";

export const ContainerPermission = styled.div`
  max-width: 450px;
  min-height: 650px;
  background: #ffffff;
  box-shadow: -4px 6px 22px -4px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 0 40px;

  .data-header {
    text-align: center;
    border-bottom: 2px solid #dfdfdf;
  }

  .title-data-permission {
    display: flex;
    margin-top: 50px;

    .user-icon {
      width: 40px;
    }

    h3 {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 23px;
      line-height: 110%;
    }
  }

  .selection_user {
    width: 60%;
    margin: 40px auto;
    .t-user {
      width: 100%;
      margin-left: auto;
    }
  }

  .permission-form {
    input {
      margin: 10px 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      mix-blend-mode: normal;
      border: 1px solid #c4c4c4;
      padding: 10px;
      border-radius: 14px;
    }
  }

  .t-permission {
    width: 100%;
  }

  .type-permission {
    border: 0.5px solid #c4c4c4;
    padding: 10px;
    margin: 10px 0 10px 0;
    border-radius: 14px;
    outline: none;
    background: rgba(0, 0, 0, 0);
  }

  .btn-send-user {
    width: 56%;
    display: flex;
    justify-content: flex-start;
    margin-top: 50px;
  }

  .cad-user,
  .exit-user {
    margin-right: 10px;
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
