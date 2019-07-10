import styled from 'styled-components'

export const Myinfo = styled.div`
    /* 头部 */
    .head_nav{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 3.17333rem;
        line-height: 3.17333rem;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #ebebeb;
        background-color: #fefefe;
        z-index: 100;
        .heads{
            font-size: 1.3rem;
            font-weight: 400;
            color: #232323;
            margin: 0 auto;
            width: 50%;
        }
    }
    .title__back{
        position: fixed;
        top:1rem;
        left:0.9rem;
        width: 1.5rem;
        height: 1.5rem;
        z-index:110;
        img{
            width:100%;
            height:100%;
        }
    }
    .title__right{
        position: fixed;
        top:1rem;
        right:1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        z-index:110;
        img{
            width:100%;
            height:100%;
        }
    }

/* 主题内容 */
.pages {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    .panel {
            position: relative;
            padding-top: 3rem;
            background-color:#f5f5f5;
            .grid {
                margin-top: 1.5rem;
                width: 100%;
                background-color: #fff;
                .grid-title-wrap {
                    display: flex;
                    margin: 0 2.2rem 0 1.8rem;
                    height: 3.2rem;
                    line-height: 3.2rem;
                    font-size: 1.2rem;
                    color: #212121;
                    background-color: #fff;
                    justify-content: space-between;
                    align-items: center;
                    display: inherit;
                    border-top: 1px solid #ebebeb;

                    .left {
                        font-size: 1.1rem;
                    }
                    .birth-info {
                        color: #CCCCCC;
                        font-size: 0.6rem;
                    }
                    .grid-title-wrap:first-child.f-right {
                        margin-top: 0.82667rem;
                        border-radius: 100%;
                        width: 3rem;
                        height: 3rem;
                        background: #f5f5f5;
                        background-size: 1.23733rem;
                        float: right;
                        color: #999;
                    }
                    .f-right {
                        font-size: 1rem;
                        float: right;
                        color: #999;
                        .icon {
                            font-family: "iconfont" !important;
                            font-style: normal;
                            font-weight: normal;
                            font-variant: normal;
                            text-transform: none;
                            line-height: 1;
                            color: #d8d8d8;
                            cursor: pointer;
                        }
                    }
                    
                }
                .grid-title-wrap:first-child {
                    height: 4rem;
                    line-height: 4rem;
                    border: none;
                }
            }
        }
    }

    /* 退出登录 */

.btn-wrap {
    margin: 1.19467rem 1rem 0 0.68267rem;
    .btn-return {
        display: block;
        border: none;
        border-radius: 0.128rem;
        width: 100%;
        height: 3rem;
        font-size: 1.3rem;
        line-height: 3rem;
        text-align: center;
        color: #212121;
        background-color: #fff;
    }
}

`;
