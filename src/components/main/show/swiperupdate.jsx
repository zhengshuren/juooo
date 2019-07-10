import React,{PureComponent} from "react";
import ReactDOM from 'react-dom';

import { PullToRefresh } from 'antd-mobile';
import axios from 'axios'
import {ShowList, ListLeft, ListRight} from './js/show'
import qs from 'qs'

let pageIndex = 1;

function genData(pIndex, callBack) {
  // console.log(pIndex);
  let data = {
    page : pIndex
  }
  data = qs.stringify(data);
  axios({
    method: 'POST',
    url: 'https://m.juooo.com/tour/ShowList',
    data
    }).then((res)=>{
    console.log(res.data.data);
      callBack(res.data.data);
    })
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data:[]
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    pageIndex = 1;
    genData(pageIndex,(res)=>{
        this.setState({
          height: hei,
          data:[...res]
        })
    })
  }

  componentWillReceiveProps (nextProps) {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    pageIndex = 1;
    // console.log(nextProps.params);
    genData(pageIndex,(res)=>{
      this.setState({
        height: hei,
        data:[...res]
      })
    })
  }

  render() {
    return (<div>
      <PullToRefresh
        damping={80}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}

        indicator={{ deactivate: '上拉可以刷新' }}
        direction={'up'}

        refreshing={this.state.refreshing}
        onRefresh={() => {
          genData(++pageIndex,(res)=>{ 
            this.setState({
                data : [...this.state.data, ...res]
              })
             })
        }}
      >
      {this.props.children}
      <div style={{
        background:' #fff',
        padding: '0.6666666667rem 0.88rem 0'
        }}>
        {
          this.state.data.map((item,index)=>{
            return (
                <ShowList key={index}>
                    <ListLeft>
                        <img src={item.pic} alt=""/>
                    </ListLeft>
                    <ListRight>
                        <p className="title">{item.show_name}</p>
                        <p className="time">{item.display_show_time}</p>
                        <div className="city">
                        {
                            item.cityItems.map((element, index) => {
                                if (index === 5) {
                                    return <span>加载更多</span>
                                } else if (index < 5) {
                                    return <span>{element.city_name}</span>
                                }
                            })
                        }
                        </div>
                    </ListRight>
                </ShowList>
            )
          })
        }
      </div>
    </PullToRefresh>
  </div>);
  }
}

export default App;