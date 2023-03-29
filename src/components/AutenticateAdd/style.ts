import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: aliceblue;
    border-radius: 5px;
    padding: 20px;
    display: grid;
    grid-template-columns: 70% 30%;


    .contentArea{
        h1{
            color: #476a88;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        p{
            line-height: 18px;
            color: #476a88;
            font-size: 13px;
        }
    }

    .buttonArea{
        button{
            display: block;
            margin-left: auto;
            max-width: 250px;
            width: 100%;
            height: 100%;
            background: #476a88;
            color: #fff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;