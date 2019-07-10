export const GET_CITY_LIST="show/get_city_list";
export const loadListData=(res)=>{
  // console.log(res);
  return {
    type: GET_CITY_LIST,
    res
  }
}
export const loadListDataAsyanc=(dispatch, data)=>{
  return ()=>{
    dispatch(loadListData(data))
  }
}
