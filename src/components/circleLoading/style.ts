import styled from "styled-components";

interface IProps {
    color: string;
}

export const Container = styled.div<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;

    &:after {
        content: " ";
        display: block;
        width: 30px;
        height: 30px;
        margin: 8px;
        border-radius: 50%;
        border: 3px solid ${(props) => props.color};
        border-color: ${(props) => props.color} transparent ${(props) => props.color} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;