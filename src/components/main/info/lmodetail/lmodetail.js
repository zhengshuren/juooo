import styled from 'styled-components'

export const Lmodetail = styled.div`
   .head_nav{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 100;
        .heads{
            font-size: 1.3rem;
            font-weight: 400;
            color: #fff;
            margin: 0 auto;
            width: 50%;
        }
    }
    .title__back{
        position: fixed;
        top:.6rem;
        left:0.9rem;
        width: 1.5rem;
        height: 1.5rem;
        z-index:110;
        img{
            width:50%;
            height:85%;
            color:#fff;
        }
    }
    .title__right{
        position: fixed;
        top:.5rem;
        right:1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        z-index:110;
        img{
            width:80%;
            height:80%;
        }
    }

    .pages {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        .poster {
            position: relative;
            height: 15.5rem;
            flex-direction: column;
            display: flex;
            justify-content: flex-end;
            overflow: hidden;
            .poster-bg-shadow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 15.5rem;
                overflow: hidden;
                z-index: 4;
                background: #000;
                opacity: 0.4;
            }
            .poster-bg-wrapper {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 98%;
                overflow: hidden;
                z-index: 3;
                .poster-bg {
                    filter: blur(0.53333rem);
                    max-height: 750px;
                    width: 100%;
                    z-index: 3;
                    border: none;
                    max-width: 100%;
                    outline: none;
                }
            }
            .poster-fg {
                overflow: hidden;
                position: absolute;
                bottom: -0.42667rem;
                left: -25%;
                z-index: 5;
                border-top: 1px solid #ccc;
                border-radius: 50%;
                width: 150%;
                height: 2.56rem;
                background: #fff;
            }
            .poster-img {
                margin-bottom:.5rem;
                z-index: 5;
                position: relative;
                display: flex;
                justify-content: center;
                .img-bg {
                    position: relative;
                    padding: 2px;
                    width: 8.1rem;
                    height: 11rem;
                    background: #e9e9e9;
                    .img-fg {
                        width: 100%;
                        height: 100%;
                        border: none;
                        max-width: 100%;
                        outline: none;
                    }
                }
                .round-num {
                    position: absolute;
                    right: 0.42667rem;
                    bottom: 2.048rem;
                    border: 1px solid #dadada;
                    border-radius: 0.17067rem;
                    padding: 0.21333rem;
                    color: #dadada;
                    text-decoration:none;
                }
            }
        }

        .text-desc {
            padding: 0 0.42667rem 0.21333rem 0.64rem;
            background: #fff;
            .title {
                overflow: hidden;
                margin-bottom: 0.53333rem;
                font-weight: normal;
                word-break: break-word;
                color: #212121;
            }
            .row {
                font-size: 0.89733rem;
                color: #666;
                padding-bottom: 0.21333rem;
            }
        }

        .round-list {
            overflow: hidden;
            position: relative;
            margin-top: 0.66933rem;
            padding-top: 0.62667rem;
            background: #fff;
            width: 100%;
            height: 100%;
            .v-line {
                display: block;
                position: absolute;
                top: 2.38667rem;
                left: 5.89867rem;
                width: 2px;
                height: 100%;
                background: #e6e6e6;
                z-index: 0;
            }
            ul {
                z-index: 5;
                padding:0;
                .item {
                    position: relative;
                    padding-top: 0.74667rem;
                    width: 100%;
                    height: 3.52rem;
                    display: flex;
                    list-style:none;
                    .item-left {
                        padding-top: 0.10667rem;
                        text-align: center;
                        flex-direction: column;
                        width: 5.2rem;
                        display: flex;
                        flex: 0 0 5.2rem;
                        .day{
                            color: #666;
                            display: block;
                            font-size: 0.94rem;
                            color: #212121;
                        }
                        .time {
                            display: block;
                            font-size: 0.512rem;
                            color: #666;
                        }
                    }
                    .item-center {
                        position: relative;
                        padding-top: 0.21333rem;
                        width: 2.5rem;
                        flex: 0 0 2.5rem;
                        .dot {
                            display: block;
                            position: absolute;
                            right: 0;
                            left: -17px;
                            z-index: 5;
                            margin: 0 auto;
                            border: 0.064rem solid #fff;
                            border-radius: 50%;
                            width: 0.584rem;
                            height: 0.584rem;
                            background: #e6e6e6;
                        }
                    }

                    .item-right {
                        margin-right: 0.42667rem;
                        border-bottom: 1px solid #e6e6e6;
                        padding-left: 0.42667rem;
                        font-size: 1rem;
                        color: #212121;
                        flex-direction: column;
                        flex: 12;
                        box-flex: 12;
                        display: flex;
                        color:#999;
                        .locate {
                            display: block;
                            overflow: hidden;
                            padding-top: 0.49867rem;
                            font-size: 0.65467rem;
                            width: 8.53333rem;
                            height: 1.74933rem;
                            text-overflow: ellipsis;
                            color: #999;
                        }
                    }
                    .buy-btn {
                        position: absolute;
                        padding:.1rem .5rem;
                        right: 0.64rem;
                        bottom: 1.64rem;
                        border-radius: 0.128rem;
                        line-height: 1.5rem;
                        background-color: #ff7919 !important;
                        display: inline-block;
                        vertical-align: middle;
                        overflow: hidden;
                        border: 1px solid #b2b2b2;
                        margin: 0;
                        text-decoration: none;
                        text-align: center;
                        appearance: none;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 0.812rem;
                        color: #fff;
                        background: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }


`;
