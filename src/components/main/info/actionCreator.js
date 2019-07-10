
export const GET_INFO_SILD="info/get_list_data";
export const loadListData=(res)=>{
  // console.log(res);
  
    return {
        type:GET_INFO_SILD,
        res
    }
}
export const loadListDataAsyanc=(dispatch, data)=>{
  

  return ()=>{
  //   axios({
  //     method: 'get',
  //     url: '/apis/home/getSildeList',
  //     data: {
  //       abbreviation : '',
  //       limit : '',
  //       version : '5.1.4',
  //       referer : '2'
  //     }
  //   }).then((res)=>{
  //   //  数据就变成了可以触发事件监听类型 
  //   // console.log(res.data.data.silde_list);
  //   dispatch(loadListData(res.data.data.silde_list))
  //   })
  // }
  dispatch(loadListData(data))
}


}
