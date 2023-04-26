import styled from "styled-components";

interface Props {
    state: boolean;
}

export const Container = styled.div<Props>`
    display: ${(props) => (props.state) ? "flex" : "none"};
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 50;

    .body{
        animation: fadeIn 0.5s ease-out forwards;
        transform: translateY(150px);
        width: 70%;
        height: 100%;
        background: #fff;
        box-shadow: 1px 1px 30px 1px rgba(0, 0, 0, 0.15);

        .title{
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            padding: 0 30px;

            .info{
                h1{
                    color: var(--color-background);
                    font-size: 1.3rem;
                }
                h3{
                    font-size: 0.95rem;
                    opacity: 0.8;
                    font-weight: normal;
                    margin-bottom: 0;
                }
            }
        }

        .content{
            overflow-y: auto;
            max-height: calc(100% - 80px);
            padding: 30px;

            .subTitle{
                font-size: 0.95rem;
                font-weight: bold;

                span{
                    color: #ed5371;
                }
            }

            .search{
                input{
                    width: 100%;
                    height: 50px;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    padding: 0 15px;
                    margin: 5px 0 25px;
                }
            }

            .table{
                overflow-y: auto;
                max-height: 60%;
                table{
                    margin-top: 5px;
                    border: 0;
                    box-shadow: unset!important;
                    
                    thead{
                        background-color: #f5f5f5;
                        height: 60px;

                        th{
                            padding-left: 30px;
                            font-size: 0.8rem;
                            color: #959191;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                        }
                    }
                    tbody{
                        td{
                            height: 50px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                            padding-left: 30px;

                            &:nth-of-type(3){
                                opacity: 0.75;
                            }
                            
                            &.aproved{
                                font-size: 0.9rem;
                                color: #3bd68b;
                            }

                            &.await{
                                font-size: 0.9rem;
                                color: #1d5e83;
                            }

                            &.cancelled{
                                font-size: 0.9rem;
                                color: #ed5371;
                            }
                        }
                    }
                }
            }

            .details{
                .backButton{
                    margin-bottom: 30px;
                    background: transparent;
                    color: var(--color-background);
                }
                .participants{
                    padding: 15px 0 30px;
                    span{
                        padding: 8px 12px;
                        border: 1px solid rgba(0, 0, 0, 0.15);
                        margin-right: 10px;
                    }
                }
                .text{
                    font-size: 1.1rem;
                    text-align: justify;
                    line-height: 30px;
                }
            }
        }

        @keyframes fadeIn{
            0%{
                opacity: 0;
                transform: translateY(150px);
            }
            100%{
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
`;