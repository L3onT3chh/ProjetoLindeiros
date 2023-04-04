import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 5%;

    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1.5px solid #f5f5f5;
        h1{
            font-size: 18px;
            font-weight: bold;
            color: var(--color-background);
        }
        button{
            width: 100px;
            height: 40px;
            border-radius: 5px;
            background-color: var(--color-background);
            color: #fff;
        }
    }
    .cardList{
        display: grid;
        grid-template-columns: 32% 32% 32%;
        grid-gap: 2%;
        padding: 0;
        margin-top: 25px;
        li{
            display: flex;
            flex-direction: column;
            padding: 25px 0;
            height: fit-content;
            min-height: 300px;
            border: 1px solid rgba(0,0,0,0.2);
            .header{
                padding: 0 25px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left{
                    p{
                        font-size: 13px;
                        color: #333;
                        opacity: 0.9;
                        line-height: 40px;
                    }
                    .bar{
                        width: 50%;
                        height: 4px;
                        border-radius: 5px;
                        background-color: var(--color-background);
                    }
                }
                button{
                    height: 35px;
                    width: 80px;
                    color: var(--color-background);
                    border: 1px solid var(--color-background);
                    background-color: transparent;
                    font-size: 14px;
                    font-weight: bold;
                    line-height: 35px;
                }
            }
            .photo{
                width: 100%;
                height: 150px;
                margin-top: 25px;
                background-size: cover;
                background-position: center;
            }
            .body{
                padding: 0 25px;
                margin-top: 25px;
                h2{
                    font-weight: bold;
                    font-size: 16px;
                    color: var(--color-background);
                }
                p{
                    color: #333;
                    opacity: 0.8;
                    font-size: 13px;
                    line-height: 20px;
                    text-align: justify;
                }
            }
            .footer{
                padding: 0 25px;
                margin-top: auto;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .proposalQtd{
                    display: flex;
                    align-items: center;
                    color: #1f1368;
                    margin-right: 25px;
                    p{
                        margin-left: 5px;
                    }
                }

                .cityTag{
                    p{
                        padding: 5px 10px;
                        border-radius: 15px;
                        background-color: #8abbf7;
                        font-size: 14px;
                        font-weight: bold;
                        color: #fff;
                        line-height: 30px;
                    }
                }
            }
        }
    }
`;