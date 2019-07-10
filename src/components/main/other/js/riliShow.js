import styled from "styled-components";

export const All=styled.div`
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

.calendar_com{
    pointer-events: auto;
    background:#fff;
    .wh_container{
        max-width: 410px;
    margin: auto;
    border-bottom: .3rem solid #ebebee;
    display: block;
    border-top: .3rem solid #ebebee;
         .wh_content_all{
            font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Helvetica Neue,STHeiti,Microsoft Yahei,Tahoma,Simsun,sans-serif;
    background-color: #0fc37c;
    width: 100%;
    overflow: hidden;
    background-color: #fefefe!important;
    padding-bottom: 0!important;
            .wh_top_changge{
                display: flex;
                li{
                    cursor: pointer;
    display: flex;
    color: #fff;
    font-size: 18px;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 47px;
    list-style-type: none;
    .wh_jiantou1{
        border-left: 1px solid #232323!important;
        border-top: 1px solid #232323!important;
    width: .5rem!important;
    height: .5rem!important;
    transform: rotate(-45deg);
    
    }
                }
                .wh_content_li{
                    color: #242424;
    font-size: .9rem;
    cursor: auto;
    flex: 2.5;
    justify-content: center;
    align-items: center;
                }
                li{
                    .wh_jiantou2{
                        border-left: 1px solid #232323!important;
        border-top: 1px solid #232323!important;
    width: .5rem!important;
    height: .5rem!important;
    transform: rotate(135deg);
                    }
                }
            }
            
         }
       
             }  
          .wh_content{
    display: flex;
    flex-wrap: wrap;
    padding: 0 3%;
    width: 94%;
    background-color: #f5f5f5!important;
    justify-content: space-between;
    .wh_content_item{
        height: 40px;
        font-size: 1rem;
    width: 14.2%;
    text-align: center;

    position: relative;
    .wh_top_tag{
        width: 40px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    }
     }
            }
        .wh_content1{
            padding-top: 1rem;
    padding-left: 0.7rem;
    padding-right:.7rem;
            display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fff!important;
    box-sizing:border-box;
   .wh_chose_day{
       
       
     border-radius: 100px;
    }
    .wh_content_item1{
        height: 3.1rem!important;
        font-size: 15px;
    width: 14%;
    text-align: center;
    /* color: #fff; */
    position: relative; 
 
    .wh_other_dayhide{
        width: 1.77333rem!important;
    height: 1.77333rem;
    position: relative;
    line-height: 3.1rem ;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    }
    }
        }
               
            }
           
    }
}
`