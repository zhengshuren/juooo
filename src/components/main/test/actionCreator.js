export const GET_LOGIN_INFO="login/in";
export const loadListData=(res)=>{
    return {
        type:GET_LOGIN_INFO,
        res
    }
}
export const loadListDataAsyanc=(dispatch,data)=>{
  return ()=>{
    dispatch(loadListData(data))
  }
}
