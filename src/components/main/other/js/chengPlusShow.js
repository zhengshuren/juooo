import styled from "styled-components";

export const AllHtml = styled.div`
    *{
        margin:0;
        padding:0;
    }
    .blackCard{
        height:40px;
        line-height:40px;
        .img1{
            display:inline-block;
            width:30px;
            height:33px;
            margin-left: 15px;
            margin-top: 5px;
        }
        span{
            font-size: 16px;
            margin-left: 115px;
        }
        .img2{
            display: inline-block;
            margin-left:100px;
            width: 20px;
        }
    }
    .tu12{
        width: 375px;
        height: 486px;
        background-image:url("https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity_bg.png?v=201904181013");
        background-size: cover;
        .img1{
            width:136px;
            height: 31px;
            margin-left: 35px;
            margin-top: 20px;
        }
        .span1{
            background-color: black;
            color: #bfb28a;
            font-size: 12px;
        }
        .span2{
            display: inline-block;
            color: #d8c9a3;
            background-color: #656563;
            width:68px;
            height: 26px;
            text-align: center;
            line-height: 26px;
            font-size: 12px;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            margin-left: 74px;
        }
        .lis{
            color: #f7e9be;
            list-style:none;
            font-size:18px;
            margin-left: 50px;
            margin-top: 20px;
            span{
                font-size: 12px;
                margin-left: 150px;
            }
        }
        .zun{
            color: #d5a370;
            margin-left: 150px;
            margin-top: 30px;
            a{
                color:#999;
                margin-left: 50px;
            }
        }
        .div12{
            width:92%;
            margin: 0 4%;
            height: 263.5px;
            li{
                list-style: none;
                float: left;
                width: 25%;
                height: 33.33%;
                text-align: center; 
                img{
                    width: 29px;
                    height: 23px;
                    margin-top: 10px;
                }
                .p1{
                    font-size: 14px;
                    margin-top:10px;
                }
                .p2{
                    font-size:10px;
                    color: #999;
                    margin-top: 5px;
                }
            }
        }
        .divOneImg{
            width: 90%;
            height:56px;
            margin-left: 5%;
            background-image: url('https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/icon_cardBtn3.png?v=201904181013');
            background-size: cover;
            .p1{
                color: #85470e;
                font-weight: 700;
                text-align: center;
                padding-top: 10px;
            }
            .p2{
                font-size: 12px;
                color: white;
                text-align:center;
            }
        }
    }
    .zhuanxiang{
        width:375px;
        height: 190px;
        padding-top: 20px;
        p{
            .h2{
                font-weight:700;
                font-size:20px;
                display: inline-block;
                margin-left: 20px;
            }
            .you{
                font-weight:700;
                margin-left: 260px;
            }
        }
        .zhuanxiangquan{
            width:90%;
            height:111px;
            margin-left:5%;
            margin-top:20px;
            position: relative;
            background-image:url("https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/coupon.png?v=201904181013");
            background-size:cover;
            img{
                width:11.5px;
                height:10.5px;
                margin-left:5px;
                margin-top:5px;
            }
            .p1{
                width:69%;
                text-align:center;
                margin-top:3px;
            }
            .lingqu{
                position:absolute;
                width:70px;
                height:20px;
                right:5%;
                top:42%;
                text-align:center;
                color:#d4a36f;
                border:1px solid #d4a36f;
                border-radius:45%;
            }
        }
    }
    .zhuanshupiao{
        width:100%;
        height:180px;
        .p3{
            margin-top:20px;
            .h2{
                font-weight:700;
                font-size:20px;
                display: inline-block;
                margin-left: 20px;
            }
            .you{
                font-weight:700;
                margin-left: 260px;
            }
        }
        img{
            width:168px;
            height:100px;
            margin-left:20px;
            margin-top:10px;
            border-radius:5px;
        }
        .shengluehao{
            font-size:16px;
            width:150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left:20px;
        }
    }
    .youxiangoupiao{
        height:450px;
        .p3{
            margin-top:20px;
            .h2{
                font-weight:700;
                font-size:20px;
                display: inline-block;
                margin-left: 20px;
            }
            .you{
                font-weight:700;
                margin-left: 240px;
            }
        }
        .youxiangoupiaoimg{
            height:372px;
            .swiper-slide{
                height:166px;
                position: relative;
                .swipers{
                    position:absolute;
                    left:0;
                    top:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    margin-top:20px;
                    width:345px;
                    height:166px;
                    background-color:#f5f5f5;
                    img{
                        float: left;
                        width:100px;
                        height:137px;
                        margin-left:14px;
                        margin-top:14px;
                    }
                    .right{
                        margin-left:20px;
                        float: left;
                        width:200px;
                        span{
                            display:inline-block;
                        }
                        .date{
                            font-weight:700;
                            margin-top:20px;
                        }
                        .week{
                            font-size:10px;
                            margin-left:10px;
                        }
                        .longText{
                            font-size:14px;
                            height:33px;
                            width:200px;
                            font-weight:600;
                            margin-top:10px;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;/*显示几行*/
                        }
                        .short{
                            font-size:12px;
                            color:#666;
                            margin-bottom:10px;
                        }
                        .shoupiao{
                            .price{
                                font-size:17px;
                                font-weight:600;
                                color:#ff6743;
                            }
                            .qi{
                                font-size:11px;
                            }
                            .goupiao{
                                font-size:11px;
                                margin-left:60px;
                            }
                        }
                    }
                }
            }
            .swiper-pagination{
                .swiper-pagination-bullet-active{
                    background-color:#ff6743;
                }
            }
        }
    }
    .mianfeiguanyan{
        height:260px;
        padding-top:20px;
        .mianfeiP{
            margin-bottom:20px;
            .h2{
                font-weight:700;
                font-size:20px;
                display: inline-block;
                margin-left: 20px;
            }
            .you{
                font-weight:700;
                margin-left: 190px;
                .ling{
                    color:#cf8846;
                }
            }
        }
        .swiper-wrapper{
            margin-left:10px;
            .swiper-slide{
                position: relative;
                height:250px;
                height:180px;
                .swipers{
                    position:absolute;
                    left:0;
                    top:0;
                    right:0;
                    bottom:0;
                    margin:auto;
                    img{
                        width:107px;
                        height:146px;
                        margin-bottom:10px;
                    }
                    .mianfei{
                        width:100px;
                        margin-left:10px;
                        font-size:18px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
    .zhuanxiangzhekou{
        height:755px;
        .p3{
            margin-top:20px;
            .h2{
                font-weight:700;
                font-size:20px;
                display: inline-block;
                margin-left: 20px;
            }
            .you{
                font-weight:700;
                margin-left: 240px;
            }
        }
        .zhekouUl{
            height:631px;
            .zhekouLi{
                list-style:none;
                text-align:center;
                width:33.33%;
                float:left;
                img{
                    width:107px;
                    margin-top:20px;
                    margin-bottom:10px;
                }
                .xiaozhe{
                    position: absolute;
                    left:14px;
                    top: 25px;
                    color:#ff6743;
                    width:30px;
                    height:13px;
                    background-color:white;
                    font-size:10px;
                    border-radius:3px;
                    display:inline-block;
                }
                .text{
                    width:100px;
                    font-size:16px;
                    font-weight:700;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .jia{
                    font-size:16px;
                    font-weight:600;
                    color:#ff6743;
                }
                .qi2{
                    font-size:10px;
                    color:#666;
                }
            }
       }
       .low{
           color:#cf8846;
           width:159.5px;
           height:39.5px;
           text-align:center;
           line-height:39.5px;
           border:1px solid #cf8846;
           border-radius:5px;
           margin-top:30px;
           margin-left:110px;
       }
    }
`