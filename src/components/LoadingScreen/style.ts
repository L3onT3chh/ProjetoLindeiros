import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;

    .img{
        animation: loading 5s infinite;
        animation-fill-mode: forwards;
        opacity: 0;
        margin-bottom: 15px;
    }

    @keyframes loading{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`