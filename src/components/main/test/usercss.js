import styled from "styled-components";
import bgimg from '@/assets/login_bg.png'

export const BigDiv = styled.div`
    background: url(${bgimg}) no-repeat;
    background-size: 100%;
    background-position: center center;
    overflow:hidden;
    width:100%;
    box-sizing: border-box;
    .content {
        padding:4.2rem 2.8rem 0;
        height: 43.2rem;
    }
`
export const Nav = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 1.3rem 0 1.35rem;
    background: #e5e5e5;
    opacity: .9;
    height: 2rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    img {
        padding: 20% 0;
        height: 60%;
    }
    input {
        text-align: center;
    }
`
export const Title = styled.h3`
    height: 2.224rem;
    font-size: 1.76667rem;
    font-weight: 600;
    font-stretch: normal;
    line-height: 2.224rem;
    color: #232323;
    padding-bottom: .8rem;
`

export const LoginButton = styled.button`
    width: 100%;
    height: 2.83333rem;
    line-height: 2.83333rem;
    font-size: 1.468rem;
    color: #fefefe;
    border-radius: 2.28rem;
    background-color: #ebebeb;
    border: none;
    :hover {
        background-color: orangered;
    }
`
export const Username = styled.input`
    width: 90%; 
    border:none;
    border-bottom:1px solid #999;
    padding:.8rem;
    font-size: 1.2rem;
    margin-bottom: 0.62667rem;
    /* margin: 2rem 0; */
`
export const Password = styled.input`
    width: 90%; 
    border:none;
    border-bottom:1px solid #999;
    padding:.8rem;
    font-size: 1.2rem;
    margin-bottom: 0.62667rem;
`

export const Register = styled.span`
    font-size: 1.04rem;
    color: #232323;
`


export const Yuan = styled.p`
color: #d8c9a3;
font-size: 12px;
text-align: center;
position: absolute;
left: 20px; 
bottom: 15px;
`

export const AllHtml = styled.div`
background-color:#f6f6f6;
*{
    margin:0;
    padding:0;
}
.upDiv{
    li{
        list-style:none;
    }
    width:100%;
    height:190px;
    background-image:url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/integral.jpg);
    background-size:cover;
    position: relative;
    .blackPlus{
        background-image:url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/pic_plusCard.png);
        background-size:cover;
        width:90%;
        height:80px;
        position:absolute;
        bottom:0;
        left:20px;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
}
.centerDiv{
    width:100%;
    height:77px;
    background-color:white;
    div{
        width:100%;
        height:47px;
        padding-top:16px;
        p{
        width:33.33%;
        height:100%;
        box-sizing:border-box;
        float:left;
        span{
            display:block;
            text-align:center;
        }
        .span1{
            color:#ff7919;
            font-size:20px;
            font-weight:600;
            strong{
                font-weight:normal;
                font-size:12px;
            }
        }
        .span2{
            margin-top:5px;
            font-size:12px;
        }
    }
    }
}
.downDiv{
    ul{
        li{
            height:45px;
            background-color:white;
            margin-top:10px;
            position: relative;
            i{
                display:inline-block;
                width:30px;
                hieght:30px;
                margin-left:10px;
                margin-top:12px;
            }
            span{
                display:inline-block;
                color:#999;
                position:absolute;
                right:20px;
                top:13px;
            }
            strong{
                font-weight:normal;
                font-size:12px;
                position:absolute;
                right:40px;
                top:15px;
                color:#999;
            }
        }
        .last{
            margin-left:12.5%;
            list-style:none;
            width:75%;
            text-align:center;
            line-height:45px;
            font-weight:700;
            color:#ff7919;
            border-radius:7px;
            i{
                margin:0;
                padding:0;
            }
        }
    }
}
`
export const Right = styled.p`
    color: #d8c9a3;
    font-size: 12px;
    width: 98px;
    height: 18px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    line-height: 18px;
    border-radius: 9px;
    position: "absolute";
    right: "15px";
    top: "15px";
`