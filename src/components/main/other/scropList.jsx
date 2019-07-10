import React,{PureComponent} from "react";
import ReactDOM from 'react-dom';

import { PullToRefresh } from 'antd-mobile';
import axios from 'axios'
import {ContentBox, ContentLeft, Title, ContentRight} from '../info/js/reflash'
import qs from 'qs'

let pageIndex = 1;

function genData(pIndex, data, callBack) {
  // console.log(pIndex);
    data.page = pIndex;
    data = qs.stringify(data)
    axios({
        method: 'post',
        url: '/apis/Scores/getAllScoresList',
        data,
    }).then((res)=>{
        console.log(res);
        
        // callBack(res.data.data.list);
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
    genData(pageIndex, this.props.params, this.props.url,(res)=>{
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
    genData(pageIndex, nextProps.params, this.props.url,(res)=>{
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
          genData(++pageIndex, this.props.params, this.props.url,(res)=>{ 
            this.setState({
                data : [...this.state.data, ...res]
              })
             })
        }}
      >
      {this.props.children}
      <div style={{
        marginTop: '6.4rem',
        padding: '0 .9rem',
        }}>
        {this.props.show ? <Title>为你推荐</Title> : ''}
        {
          console.log(this.state.data)
        }
      </div>
    </PullToRefresh>
  </div>);
  }
}

export default App;