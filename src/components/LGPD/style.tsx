import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .card{
        animation: fadeIn 0.8s;
        max-width: 500px;
        height: 90%;
        max-height: 800px;
        width: 100%;
        background-color: #fff;
    }

    .content{
        height: calc(100% - 80px);
        overflow-y: auto;
        overflow-x: hidden;
        padding: 50px 20px;

        .top{
            margin-bottom: 30px;
            h2{
                font-size: 25px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            p{
                font-size: 12px;
                opacity: 0.7;
            }
        }
        .body{
            .block{
                border-top: 1.5px solid rgba(0,0,0,0.1);
                margin-bottom: 20px;
                legend{
                    width: fit-content!important;
                    float: none;
                    padding-right: 10px;
                }
                legend{
                    font-size: 15px;
                    font-weight: bold;
                    width: 100%;
                }
                p{
                    font-size: 14px;
                    opacity: 0.85;
                    line-height: 25px;
                    margin-bottom: 8px;
                    text-align: justify;
                }
            }
        }
    }

    .footer{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid rgba(0,0,0,0.1);
        width: 100%;
        height: 80px;
        padding: 0 15px;

        button{
            cursor: pointer;
            width: 125px;
            height: 50px;
            padding: 0 10px;
            margin-left: 10px;
            font-size: 14px;

            &.accept{
                font-weight: bold;
                color: #fff;
                background-color: #89cd7a;
            }

            &.close{
                background: transparent;
                border: 1px solid rgba(0,0,0,0.1);
            }
        }
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: translateY(50%);
        }
        100%{
            transform: translateY(0%);
            opacity: 1;
        }
    }
`;