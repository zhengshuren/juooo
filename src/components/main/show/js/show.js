import styled from 'styled-components'
import img3 from '@/assets/touming.png';

export const Title = styled.h3`
.head{
    position:relative;
    border-bottom:1px solid #ccc;
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
/* width: 100%;
text-align: center;
font-size: 1.1253333333rem;
font-weight: 400;
margin: .8rem 0;
display: flex;
justify-content: space-between; */
`

export const ShowList = styled.div`
display:flex;
padding: 0.6666666667rem 0 0.84rem;
border-bottom: 1px solid #e6e6e6;
`

export const ListLeft = styled.div`

img {
    width: 6.24rem;
    height: 8.22rem;
    border: 1px solid #fff;
    margin-right: 0.6333333333rem;
}
`

export const ListRight = styled.div`
.title {
    min-height: 0.8533333333rem;
    font-size: 0.8573333333rem;
    padding-top: 0.1066666667rem;
    margin: 0.4133333333rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: normal;
    color: #666;
}
.time {
    font-size: 0.6693333333rem;
    color: #999;
    margin:0;
    margin-bottom: 0.4133333333rem;
}
.city {
    display: flex;
    flex-wrap:wrap;
    span {
    width: 3.8586666667rem;
    height: 1.3093333333rem;
    text-align: center;
    font-size: 0.4693333333rem;
    margin: 0 0.6266666667rem 0.4133333333rem 0;
    border: 1px solid #e6e6e6;
    border-radius: 0.1466666667rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: Center;
    color: #666;
    }
}

`

export const Main=styled.div`
.bottom-bar{
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #ebebeb;
    height: 3.09rem;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fefefe;
    position: fixed;
    bottom: -.1rem;
    z-index:999;
    left:0;
    .bottom-bar__client-service{
        width: 3.2rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    img{
        width: 1.25rem;
    height: 1.25rem;
    }
    .bottom-bar__client-service__text{
        font-size: .26667rem;
    color: #666;
    height: 1rem;
    line-height: 1rem;
    }
    }
    .bottom-bar__btn{
        width: 100%;
    height: 3.1rem;
    background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
    background-blend-mode: normal,normal;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-size: 1.15rem;
    font-weight: 700;
    color: #fefefe;
    text-align: center;
    line-height: 3.1rem;
    }
}
.intro{
    background-color: #fefefe;
    padding: 0 .94rem;
    overflow: hidden;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height:auto;
    border-bottom: .75rem solid #f5f5f5;
    .intro__title{
        font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2rem;
    color: #232323;
    margin-top: 1.55rem;
    }
    .intro__content{
        margin-top: 1.25rem;
    padding-bottom: 1.6rem;
    p{
        font-size: .9rem;
    line-height: 1.8rem;
    color: #232323;
    margin: 0;
    img{
        border: none;
    border-color: transparent;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    }
    }
}
.intro__mask{
    position: absolute;
    color: #ff6743;
    font-size: 1rem;
    line-height: 1.1rem;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    right: 0;
    height: 3.4rem;
    bottom: 0rem;
    background-color: #fff;
    padding-top: .29333rem;
}
.intro__more{
    width: 100%;
    height: 2.68rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 3rem;
    font-weight: 700;
    padding-top: 1.64rem;
    background-image: url(${img3});
    background-repeat: no-repeat;
    position: absolute;

}
    }
}
.detail__recommend{
    padding: 1.6rem .94rem 0;
    height: 50.22rem;
    background: #fefefe;
    border-top: .75rem solid #f5f5f5;
    .recommend__title{
        font-size: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: #232323;
}
.recommend__list{
    margin-top: .15rem;
    .item{
        display: flex;
        height: 11.45rem;
        .cover{
            width: 6.93333rem;
    height: 9.4rem;
    margin-top: 1.05rem;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 0.10667rem;
    img{
        width: 100%;
    height: 100%;
    border-radius: .3rem;
    }
        }
        .item__info{
            margin-left: .9rem;
            .item__info__date-week{
        margin-top: 1.53rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #232323;
    .item__info__date-week__date{
        display: inline-block;
    font-weight: 700;
    height: 1rem;
    line-height: 1rem;
    font-size: 1rem;
    }
    .item__info__date-week__week{
        display: inline-block;
    font-size: .32rem;
    height: 0.75rem;
    line-height: 0.75rem;
    margin-left: .3rem;
    vertical-align: bottom;
    }
            }
            .item__info__name{
                display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 4.8rem;
          .item__info__name__content {
            font-size: 1.04rem;
    font-weight: 700;
    color: #232323;
    line-height: 1.4rem;
    height: 2.9rem;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;    
}
          }
          .item__info__place{
            font-size: .75rem;
    color: #666;
    height: .75rem;
    line-height: .75rem;
          }    
          .item__info__price{
            margin-top: 1.24rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .item__info__price__num{
        display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    color: #ff6743;
    height: 1rem;
    line-height: 1rem;
    }
    .item__info__price__text{
        display: inline-block;
    font-size: .65rem;
    height: .65rem;
    line-height: .65rem;
    color: #999;
    margin-left: .3rem;

}
    }
          }  
            }
        }
        .recommend__more{
            width: 9.82rem;
    height: 2.1236rem;
    border-radius: .3rem;
    border: 1px solid #ff6743;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    color: #ff6743;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
        }
    }
}
    }
}



    .detail__tips{  
    height: 3.65rem;
    padding: 1.57rem .94rem 0;
    background: #fefefe;
        margin-bottom:.4rem;
    .tips__title{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-weight: 700;
    color: #232323;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .tips__title__text{
        -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    }
    .pic{
        width: 1.4rem;
    height: 1.3rem;
    img{
        width:100%;
        height:100%;
    }
    }
    }
    .tips__list{
        margin-top: 1.25rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .tips__list__item{
        display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .tips__list__item__dot{
        display: inline-block;
    width: .3rem;
    height: .3rem;
    background-color: #999;
    border-radius: 50%;
    }
    .tips__list__item__text{
        color: #999;
    font-size: .34667rem;
    margin-left: .18667rem;
    height: .34667rem;
    line-height: .34667rem;
    }
    }
}
    }
    }
 .detail__tour-cities{
    border-top: .75rem solid #f5f5f5;
    border-bottom: .75rem solid #f5f5f5;
    height: 8.7rem;
    background: #fefefe;
    overflow: hidden;
    .tour-cities__desc{
        height: 3.7rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: .285rem;
    margin-left: 0.94rem;
    margin-right: .94rem;   
    .tour-cities__desc__title{
        font-size: 1.28rem;
    font-weight: 700;
    color: #232323;
}
.tour-cities__desc__count{
    display: flex;
    font-size: .29333rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .tour-cities__desc__count__num{
        color: #ff6743;
    }
    img{
        width: 1.4rem;
    height: 1.3rem;
}
    }
}
.tour-cities__list{
    overflow-x: scroll;
    .tour-cities__list__content{
        display: flex;
    white-space: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 4.4rem;

    .tour-cities__list__content__item{
        width: 5.5rem;
    height: 3.7rem;
    margin-left: .32rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    /* color: #ebebeb; */
    border: .065rem solid #ebebeb;
    border-radius: .32rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .tour-cities__list__content__item__city{
        margin-top: .15rem;
    color: #232323;
    font-weight: 700;
    font-size: 1rem;
    height: 1.07rem;
    line-height: 1.07rem;
}
/* .tour-cities__list__content__item__city--actived{
    color: #000;
} */
    }
    .tour-cities__list__content__item--actived{
        border: .065rem solid #e5e5e5;
    }  
    .tour-cities__list__content__item--actived:nth-of-type(1) {
        border: .065rem solid #ff6743;
         color: #ff6743;
    }
    .tour-cities__list__content__item__date{
        color: #666;
        font-size: .9rem;
        height: .9rem;
        line-height: .9rem;
        margin-top: .4rem;
    }
    }
    }
}
    }
    }
 


.schedule-discount{
    border-top: .75rem solid #f5f5f5;
    .schedule-discount-item{
        display: flex;
    padding: .94rem;
        .schedule-discount-item__name{
            font-size: .9rem;
    color: #999;
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
        }
        .schedule-discount-item__content{
            .enter{
                font-size: .8rem;
    color: #232323;
    line-height: 1.5rem;
    padding-top: .02667rem;
    margin-left: .94rem;
    margin-bottom: -.313rem;
}
            }
        }
        .divider{
            margin: 0 .94rem;
    border-bottom: 1px solid #ebebeb;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
        }
    

 .schedule-discount-item{
    display: flex;
    padding: .94rem;
    .schedule-discount-item__name{
            font-size: .9rem;
    color: #999;
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
        } 
    .schedule-discount-item__content{
        -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
        .support__list{
            display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .32rem;
    color: #999;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 1.5rem;
    line-height: 1.5rem;
    .support__list__item{
        display: flex;
    justify-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    .support__list__item__text{
        display: inline-block;
        height: .75rem;
    line-height: .75rem;
    padding: 0 .94rem;
}
.support__list__item__divider{
    display: inline-block;
    width: .07rem;
    height: .75rem;
    background-color: #999;
}
    }
    }

        }
    }  
 }

    }
}


`
export const Head=styled.div`
    background-color: #fefefe;
.brief__primary{
    position: relative;
    height: 14.34rem;
    overflow: hidden;
    .brief__primary__bg{
        position: absolute;
    left: 0;
    right: 0;
    height: auto;
    background-color: #b8abab;
    -webkit-filter: blur(1.53333rem);
    filter: blur(1.53333rem);
    border: none;
    border-color: transparent;
    vertical-align: middle;
    width: 100%;
    height: 31.14rem;
    }
    .brief__primary__mask{
        position: absolute;
    left: 0;
    right: 0;
    height: 14.34rem;
    background-color: rgba(0,0,0,.1);
    }
    .brief__primary__fg{
        position: relative;
        height: 14.34rem;
        .brief__primary__fg__title{
            position: relative;
            height: 2.8rem;
            .brief__primary__fg__title__text{
                text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fefefe;
    height: 2.8rem;
    line-height:2.8rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
            }
            .brief__primary__fg__title__back{
    display: block;
    width: 0.6rem;
    height: 1.3rem;
    display: block;
    position: absolute;
    left: .75rem;
    top: .75rem;
    img{
        width:100%;
        height:100%;
    }
            }
            .brief__primary__fg__title__like{
    width: 1.3rem;
    height: 1.3rem;
    display: block;
    position: absolute;
    top: .75rem;
    right: 3.13333rem;
    img{
        width:100%;
        height:100%;
    }
            }
            .brief__primary__fg__title__home{
                width: 1.3rem;
    height: 1.3rem;
    display: block;
    position: absolute;
    top: .75rem;
    right: 1.13333rem;
    img{
        width:100%;
        height:100%;
    }
            }
        }
        .brief__primary__fg__content{
            display: flex;
    padding: 0 .94rem;
    position: relative;
    .brief__primary__fg__content__cover{
        width: 6.82rem;
    height: 9.4rem;
    margin-top: .94rem;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: .10667rem;
    background-color: #aaa;
    img{
        width: 100%;
    height: 100%;
    border-radius: .10667rem;
    border: none;
    border-color: transparent;
    vertical-align: middle;
    }
    }
    .brief__primary__fg__content__info{
        margin-top: 1.3rem;
    margin-left: .91rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    .brief__primary__fg__content__info__name{
        font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: 700;
    color: #fefefe;
    }
    .brief__primary__fg__content__info__price{
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    padding-bottom: .5rem;
    .brief__primary__fg__content__info__price__range{
        font-size: 1rem;
    font-weight: 700;
    height: 1rem;
    line-height: 1rem;
    color: #fefefe;
    display: inline-block;
    white-space: nowrap;
    }
    .brief__primary__fg__content__info__price__type{
        display: flex;
        .brief__primary__fg__content__info__price__type__plus{
            width: 1.5rem;
    height: 1.07rem;
    line-height: .90667rem;
    display: inline-block;
    margin-left: .32rem;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    }
    }
        }
    }
}
.brief__secondary{

    padding: 0 .94rem 1.3125rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .brief__secondary__info{
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    .brief__secondary__info__date-time{
        margin-top: 1.84345rem;
    font-size: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #232323;
    .brief__secondary__info__date-time__date{
        isplay: inline-block;
    font-weight: 700;
    height: 1.1225rem;
    line-height: 1.1225rem;   
    }
    .brief__secondary__info__date-time__time{
        display: inline-block;
    font-size: .32rem;
    height: .6rem;
    margin-left: .28rem;
    }
    }
    .brief__secondary__info__place{
        font-size: 1rem;
    font-weight: 700;
    color: #232323;
    margin-top: 1rem;
    margin-right: 3.565rem;
    line-height: 1.15rem;
    }
    }
    .brief__secondary__pointer{
        -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-top: 2.07rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #ededed;
    outline: none;
    border-radius: 50%;
    position:relative;
    img{
        position:absolute;
     height: 1.4rem;
    left: 30%;
    top: 25%;
    }
    }
}

.detail__card-tips{
    padding-bottom: 1.25rem;
    .base-tips{
        position: relative;
    overflow: hidden;
    height: 2.94rem;
    background-color: #fefefe;
    .base-tips__info{
        width: 21.55rem;
    height: 2.83rem;
    margin: .125rem auto 0;
    background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#ff6743,#ff6743);
    background-blend-mode: normal,normal;
    border-radius: .4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .base-tips__info__name{
    font-size: 1.09rem;
    color: #fff;
    margin-left: .94rem;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  
    }
    .base-tips__info__arrow{
        width: 2.4rem;
    height: 1.5rem;
    display: inline-block;
    margin: 0 .4rem 0 .26667rem;
    img{
        width:100%;
        height:100%;
    }
        }
    }
    }
}
`