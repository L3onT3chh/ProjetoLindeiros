import styled from "styled-components";

export const Banner = styled.div`
    .img{
        background-position: left;
        width: 100%;
        background-size: cover; 
        background-repeat: no-repeat; 
        background-position: center;
        background-attachment: fixed;
        height: 100%;
    }
    .content{
        position: relative;
        z-index: 5;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            width: 50%;
            font-size: 33px;
            color: #fff;
            text-align: center;
            font-weight: bold;
        }

        p{
            text-align: center;
            width: 30%;
            font-size: 15px;
            color: #fff;
            opacity: 0.8;
            margin: 20px 0;
        }

        .btn{
            width: 200px;
            height: 40px;
            background-color: #fff;
            color: #1B4977;
            font-weight: bold;
            font-size: 14px;
        }
    }
`;