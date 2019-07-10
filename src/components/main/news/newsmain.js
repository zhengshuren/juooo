import styled from 'styled-components'

export const Main = styled.div `
        height: 100%;
        background-color: #fdfdfd;
        padding-top: 3.2rem;
        padding-bottom: 4rem;
        .wrapper{
            height: 100%;
            .theater-list{
                width: 90%;
                margin: 0 auto;
                .theater-ul{
                    list-style: none;
                    padding:0;
                    .theater-li{
                        list-style: none;
                        .theater-info-shows{
                            background-color: #fefefe;
                            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                            border-radius: .10667rem;
                            border: 1px solid #ebebeb;
                            margin-bottom: 1rem;
                            padding: 1.15rem 1rem 1.15rem;
                            .theater-info{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .theater-pic-name-count{
                                    display: flex;
                                    .theater-pic-wrap{
                                        width: 3rem;
                                        height: 3rem;
                                        margin-right: 1rem;
                                        overflow: hidden;
                                        .theater-pic{
                                            width: 3rem;
                                            height:3rem;
                                            vertical-align: middle;
                                            border-radius: .30667rem;
                                        }
                                    }
                                    .theater-name-count-wrap{
                                        max-width: 8rem;
                                        .theater-name{
                                            width: 100%;
                                            overflow: hidden;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            padding: .1rem 0 .6rem;
                                            font-size: 1.1rem;
                                            color: #232323;
                                            font-weight: 700;
                                            margin:0;
                                        }
                                        .theater-count{
                                            color: #666;
                                            font-size: .52rem;
                                            margin:0;
                                        }
                                    }
                                }
                                .theater-link{
                                    display: block;
                                    padding: .26667rem 0 .26667rem .26667rem;
                                    .theater-more-btn{
                                        width: .87333rem;
                                        height: .87333rem;
                                    }
                                }
                            }

                            .theater-shows{
                                margin-top: .94667rem;
                                .theater-show-wrap{
                                    .swiper-container {
                                        margin-left: auto;
                                        margin-right: auto;
                                        position: relative;
                                        overflow: hidden;
                                        z-index: 1;
                                        .swiper-wrapper {
                                            position: relative;
                                            width: 100%;
                                            height: 100%;
                                            z-index: 1;
                                            display: flex;
                                            transition-property: transform;
                                            box-sizing: content-box;
                                        .swiper-slide{
                                                width: 7rem !important;
                                                flex-shrink: 0;
                                                height: 100%;
                                                position: relative;
                                                margin:0 !important;  
                                                .theater-show-date{
                                                    position: relative;
                                                    width: 7.25rem;
                                                    border-bottom: .05333rem solid #ccc;
                                                    border-radius: .02667rem;
                                                    padding-bottom: .38667rem;
                                                    margin-bottom: .46667rem;
                                                    .show-date{
                                                        color: #b3b3b3;
                                                        font-size: .85333rem;
                                                        padding-right: .18667rem;
                                                        text-align: center;
                                                        height: .33333rem;
                                                    }
                                                    .dot{
                                                        position: absolute;
                                                        left: 48%;
                                                        bottom: -.32rem;
                                                        display: inline-block;
                                                        width: .5rem;
                                                        height: .5rem;
                                                        margin-left: -.18667rem;
                                                        border-radius: 50%;
                                                        background-color: #ccc;
                                                    }
                                                }
                                                .theater-show-pic{
                                                    margin-top:1rem;
                                                    display: block;
                                                    width: 9rem;
                                                    height: 8rem;
                                                    line-height: 3.89333rem;
                                                    overflow: hidden;
                                                    .show-pic{
                                                        width: 6.6rem;
                                                    }
                                                    .theater-check-more {
                                                        margin:0;
                                                        line-height:7rem;
                                                        width: 6.6rem;
                                                        height: 100%;
                                                        text-align: center;
                                                        background-color: #f5f5f5;
                                                        color: #666;
                                                        font-size: .4rem;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
`;