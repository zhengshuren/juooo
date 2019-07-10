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
        position: absolute;
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
`;
