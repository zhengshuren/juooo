import styled from 'styled-components'

export const Onetitle = styled.div`

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


.swiper-container{
    margin-top:14%;
    img{
        height:10rem;
    }
}

.category-container {
    background-color:#fff;
    .category-wrap {
        margin: 0.72667rem 4% 0;
        padding: .8rem 0;
        display: flex;
        border-radius: 0.21333rem;
        box-shadow: 0.10667rem 0.10667rem 0.21333rem rgba(178, 178, 178, 0.1);
        .cate-link {
            display: block;
            text-align: center;
            flex: 1;
            box-flex: 1;
            text-decoration: none;
            color: inherit;
            img{
                display:inline-block;
                width:2.8rem;
            }
            p{
                margin:0;
            }
        }
    }
}

.title {
    font-size: 1.2rem;
    color: #333;
    padding: 0.8rem 4% 0.21333rem;
    font-weight: bold;
    background: #fff;
    position: relative;
}
.list-wrap {
    padding: 0 4%;
    background: #fff;
    .show-item {
        display: block;
        height: 8rem;
        padding: 0.32rem 0;
        border-bottom: 1px solid #e6e6e6;
        .show-left {
            width: 32%;
            height: 100%;
            margin-right: 0.6rem;
            position: relative;
            border: 1px solid #f2f2f2;
            float: left;
            img {
                width: 100%;
                height: 100%;
                border: 1px solid #fff;
            }
        }
        .show-right {
            width: 60%;
            float: left;
            p{
                padding: 0;
                margin:0;
            }
            .title {
                margin-top: 0.8rem;
                min-height: 0.85333rem;
                font-size: 0.89733rem;
                margin-bottom: 0.81333rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                font-weight: normal;
            }
            .show-time{
                width: 100%;
                height: 0.74667rem;
                color: #999;
                font-size: 0.46933rem;
                line-height: 0.74667rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                margin-bottom: 5%;
            }
            .price {
                color: #ff7919;
                .mr8,.fs24{
                    margin-right: 0.37067rem;
                    font-size:.8rem;
                }
                .fs32{
                    font-size:1.1rem;
                }
            }
        }
    }
}

.all-show {
    width: 7rem;
    height: 2.28rem;
    text-align: center;
    line-height: 2.28rem;
    font-size: 0.8rem;
    margin: 1.64rem auto 0.64rem;
    background: #FFF;
    border-radius: 0.17067rem;
    border: 1px solid #e6e6e6;
    a{
        text-decoration: none;
        color: #666;
    }
} 
    
`;
