import styled from 'styled-components'

export const Citymain = styled.div`
    p{
        margin:0;
    }
    width: 90%;
    min-height: 100%;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #fff;
    padding-top: 3.2rem;
    .area-title{
        font-size: 0.512rem;
        color: #999999;
        line-height: 1rem;
        padding-top: 1.2rem;
        padding-bottom:1rem;
    }
    .area-wrap{
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.32rem;
        margin-right: -0.32rem;
        .area-items{
            width: 6.48rem;
            height: 2rem;
            line-height: 2rem;
            background-color: #f5f5f5;
            font-size: .8rem;
            color: #212121;
            text-align: center;
            border-radius: 0.10667rem;
            margin: 1rem 0.256rem 0;
            padding-left: 0.10667rem;
            padding-right: 0.10667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .dis {
            width: 9.61333rem;
            color: #ff7919;
        }
    }
    .area-lists{
        margin-left: -0.32rem;
        margin-right: -0.32rem;
        .area-Cap {
            display: block;
            height: 1.06667rem;
            line-height: 1.06667rem;
            font-size: 0.512rem;
            color: #666;
            background-color: #f6f6f6;
            margin-left: -0.83333rem;
            margin-right: -0.83333rem;
            padding-left: 1rem;
            text-decoration:none;
        }
        .all-city {
                display: block;
                height: 2.5rem;
                line-height: 2.5rem;
                border-top: 1px solid #e6e6e6;
                font-size: 1rem;
                color: #333333;
                padding-left: 0.10667rem;
        }
    }

    .city-index {
        position: fixed;
        top: 18%;
        right: .5rem;
        width: 1.56667rem;
        overflow-x: hidden;
        
        .index-items {
            display: block;
            font-size: 0.46933rem;
            color: black;
            height: 1.1rem;
            line-height: 1.1rem;
            text-align: right;
            text-decoration: none;
        }
    }
`;
