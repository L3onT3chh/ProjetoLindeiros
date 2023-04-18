import styled from "styled-components";

export const PaginateContainer = styled.div`
    margin-top: 20px;
    ul{
        display: flex;
        margin: 0;
        padding: 0;

        li{
            margin: 0;
            padding: 0;
            font-size: 14px;
            width: 40px;
            height: 40px;
            border-radius: 5px;
            line-height: 40px;
            text-align: center;
            color: #333;

            &.disabled{
                cursor: initial;
                svg{
                    opacity: 0.6;
                }
                a{
                    cursor: initial;
                }
            }

            &.active{
                background-color: var(--color-background);
                a{
                    color: #fff;
                    &:hover{
                        color: #fff!important;
                    }
                }
            }

            a{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
`;