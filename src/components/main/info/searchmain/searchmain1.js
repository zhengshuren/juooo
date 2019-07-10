import styled from 'styled-components'


export const Searchmain = styled.div `
        width: 100%;
        height: 100vh;
        .search {
        width: 100%;
                .head {
                height: 3.57333rem;
                width: 100%;
                padding: 0 1.2rem;
                flex-direction: center;
                justify-content: space-between;
                position: fixed;
                left: 0;
                top: 0;
                z-index: 10;
                background-color: #fefefe;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                        .search-ipt{
                        width: 88%;
                        height: 2rem;
                        background-color: #f5f5f5;
                        border-radius: 2rem;
                        padding: 0 1rem 0 1rem;
                        border: 1px solid #ebebeb;
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                                .search-icon{
                                width: 1.53333rem;
                                height: 1.53333rem;
                                display: block;
                                }
                                .search-from{
                                width:90%;
                                        .text {
                                        height: 100%;
                                        line-height: 1.85rem;
                                        width:100%;
                                        font-size: 1rem;
                                        letter-spacing: 0;
                                        color: #232323;
                                        border:none;
                                        background-color: #f5f5f5;
                                        }
                                }
                                .cancel-icon{
                                width: 1.53333rem;
                                height: 1.53333rem;
                                display: block;
                                }
                        }
                        .cancel{
                        font-size: 1rem;
                        color: #666;
                        }
                }

                .search_com{
                background-color:#fff;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                top: 0;
                        .search_com_box{
                        padding-top:16%;
                                .default-wrap{
                                padding: .69333rem 1.4rem 0; 
                                        .history-search{
                                        margin-bottom:6%;
                                        overflow:hidden;
                                                .left {
                                                font-size: 1rem;
                                                font-weight: 400;
                                                color: #666;
                                                float: left;
                                                display: block;
                                                height: 1rem;
                                                line-height: 1rem;
                                                }
                                                .icon{
                                                float: right;
                                                width: 1.53333rem;
                                                height: 1.53333rem;
                                                display: block;
                                                }
                                        }
                                        .list {
                                        display: flex;
                                        flex-direction: row;
                                        flex-wrap: wrap;
                                        margin-top: 1.53333rem;
                                        list-style: none;
                                                li {
                                                padding: 0 1.8rem;
                                                height: 2.5rem;
                                                line-height: 2.5rem;
                                                font-size: 1rem;
                                                color: #232323;
                                                background-color: #f5f5f5;
                                                border-radius: .4rem;
                                                margin-right: 1.34667rem;
                                                margin-bottom: .8rem;
                                                }
                                        }
                                }
                        }
                }
        }
`;