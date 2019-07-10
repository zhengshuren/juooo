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
    .mine-btn {
    display: block;
    position: absolute;
    right: 0;
    top: 3.8rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
    padding-left: 0.83333rem;
    width: 4.35rem;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.812rem;
    color: #fff;
    background: rgba(86, 57, 0, 0.5);
    z-index: 200;
    }
`;
