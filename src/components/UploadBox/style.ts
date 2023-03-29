import styled from "styled-components";

export const FileContainer = styled.div`
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 2px dashed rgba(0,0,0,0.1);
    border-radius: 2.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;

    p{
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -1px;
    }

    span{
        font-size: 12px;
        opacity: 0.8;
    }
`;