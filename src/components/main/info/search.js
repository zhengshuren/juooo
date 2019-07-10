import styled from 'styled-components'


export const Search = styled.div `
  position: fixed;
  left: 0;
  right: 0;
  height: 8%;
  width: 100%;
  padding: 0 0.4rem;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 10;
  display: flex;
  align-items: center;
  .address {
    text-align: center;
    width: 20%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 3rem;
    border: 1px solid hsla(0, 0%, 88%, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
    .address-icon {
      
      display: inline-block;
      width: 0.7rem;
      height: 0.8rem;
      background-image: url('../news/img/2.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    .text-single {
      font-size: 1rem;
      color: #fefefe;
      font-weight: 700;
      width: 0.86667rem;
    }
  }
  .search {
    margin-left: 0.10667rem;
    display: flex;
    align-items: center;
    width: 65%;
    height: 2rem;
    border-radius: 3rem;
    border: 1px solid hsla(0, 0%, 88%, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    img {
      width: 1.53333rem;
      height: 1.53333rem;
      margin-left: 0.29333rem;
      margin-right: 0.13333rem;
    }
    span {
      font-size: 1rem;
      color: #fefefe;
    }
  }
  .icon-wrap {
    width: 1.72rem;
    height: 1.66667rem;
    img {
      border: none;
      border-color: transparent;
      vertical-align: middle;
      width: 100%;
      height: 100%;
    }
  }
`;