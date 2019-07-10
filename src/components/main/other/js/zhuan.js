import styled from "styled-components";

export const All = styled.div`
*{
margin:0;
padding:0;
}
.head{
    position:relative;
    .headImg1{
        margin-left:10px;
        margin-top:2px;
    }
    .headSpan{
        position:absolute;
        top:9px;
        font-size:18px;
        margin-left:115px;
    }
    .headImg2{
        position:absolute;
        top:9px;
        right:15px;
        width:22px;
    }
}
.main{
    position: relative;
    width:100%;
    height:625px;
    background-image:url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-bg.png);
    background-size:cover;
    .zhuan1{
        .swiper-wrapper{
            .swiper-slide:not(.swiper-slide-active){
                transform: scale(0.8);
            }
            .li1{
                background-color:white;
                margin-top:110px;
                list-style:none;
                box-shadow: 0px 0px 20px #ccc;
                .lunP{
                    width:173px;
                    height:220px;
                    border-radius:5px;
                    border:0.5px solid #594025;
                    .text1{
                        margin-top:20px;
                        display:block;
                        color:#594025;
                        font-size:24px;
                        text-align:center;
                    }
                    .text2{
                        display:block;
                        width:90%;
                        margin-left:10px;
                        margin-top:25px;
                        color:#594025;
                    }
                }
            }
        }
    }
    .zhuan2{
        .swiper-wrapper{
            .swiper-slide:not(.swiper-slide-active){
                transform: scale(0.8);
            }
            .li2{
                margin-top:25px;
                list-style:none;
                text-align:center;
                img{
                    width:40px;
                    height:35px;
                    margin-bottom:10px;
                }
                .lowText{
                    font-size:14px;
                }
            }
        }
    }
    .down{
        position:absolute;
        width:100%;
        height:55px;
        bottom:0;
        background-color:white;
        .left{
            text-align:center;
            width:60%;
            float: left;
            line-height:55px;
            font-size:12px;
            color:#999;
        }
        .right{
            text-align:center;
            width:40%;
            float: left;
            line-height:55px;
            background: -webkit-linear-gradient(left, #eebd8b, #bb844f);
            font-size:16px;
            font-weight:600;
            color:white;
        }
    }
}
`