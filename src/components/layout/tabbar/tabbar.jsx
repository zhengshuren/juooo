/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter  } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const Footer  = styled.div`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height:46px;
  background: #fff;
  z-index:9;
 `
const Itemfooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
`
const Name = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 2px 0;
  margin: 0;
`

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList : [],
      pathList : [
        {url : '/info'},
        {url : '/theatre'},
        {url : '/eticket'},
        {url : '/myjuooo'}
      ]
    }
  }
  
  componentDidMount () {
    axios({
      method: 'get',
      url: '/apis/home/getClassifyItem',
      data: {
        city_id : 0,
        operation_limit : 5,
        version : '5.1.4',
        referer : '2'
      }
    }).then((res)=>{
    //  数据就变成了可以触发事件监听类型 
      let temp =  res.data.data.bottom_slide_list;
      this.setState({
        dataList : temp
      })
    })
  }

  render() {
    let dataList = this.state.dataList
    return (
      <Footer>
        {
          dataList.map((item, index) => (
            <Itemfooter key={index}  onClick={this.handleClick.bind(this, index)}>
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${item.pic}) no-repeat` ,
                backgroundSize: '100% 200%',
                backgroundPosition : 'top center'
              }} className='bg'>
              </div>
              <Name>{item.name}</Name>
            </Itemfooter>
          ))
        }
      </Footer>
    );
  }
  handleClick (index, e) {
    for (let i = 0; i < document.getElementsByClassName('bg').length; i++) {
      document.getElementsByClassName('bg')[i].style.backgroundPosition = 'top center';
    }
    document.getElementsByClassName('bg')[index].style.backgroundPosition = 'bottom center';
    this.props.history.push(this.state.pathList[index].url);
  }
  
}

export default withRouter(TabBarExample);
// badge={0}  显示数量  加在 TabBar.Item
// badge={'新消息'}  显示消息  不显示  空字符串
//   dot  小红点