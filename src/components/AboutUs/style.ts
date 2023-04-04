import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #061a2a;
    padding: 80px;
    margin-top: 100px;

    .top{
        margin: 20px 0 80px;
        h1{
            font-weight: bold;
            color: #fff;
            margin-bottom: 25px;
        }
        p{
            width: 80%;
            color: #fff;
            opacity: 0.8;
            font-size: 14px;
            line-height: 30px;
        }
    }
    .topics{
        display: flex;
        .left{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 80px;
            .item{
                .icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                    width: 50px;
                    height: 50px;
                    background-color: #2e4659;
                    margin-bottom: 15px;
                }
                h2{
                    font-size: 20px;
                    color: #fff;
                    font-weight: bold;
                }
                p{
                    color: #fff;
                    font-size: 13px;
                    line-height: 28px;
                    opacity: 0.8;
                }
            }
        }
    }
    .btnAxes{
        display: block;
        margin: 70px auto 0;
        padding: 0 15px;
        height: 50px;
        background-color: #2e4659;
        color: #4bd197;
        font-weight: bold;
        font-size: 14px;
    }
`