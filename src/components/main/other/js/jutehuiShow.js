import styled from "styled-components";

export const All=styled.div`
    /* position: relative; */
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
    }
    .kongbai{
        width:100%;
        height:35px;
        background-color:#f0f0f0;
    }
    .text1{
        width:100%;
        height:545px;
        background-color:white;
    }
    .tabLow{
        position:absolute;
        bottom:0;
        width:100%;
        height:50px;
        border-top:1px solid #ccc;
        box-shadow: darkgrey 0px 0px 40px 0px ;
        background-color:white;
        .lowLi{
            width:50%;
            height:100%;
            float: left;
            list-style:none;
            text-align:center;
            img{
                margin-top:10px;
                width:21px;
                height:21px;
            }
            .text{
                font-size:12px;
                /* color:#666; */
            }
        }
    }
`