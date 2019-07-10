import React,{PureComponent} from "react";
import ReactDOM from 'react-dom';

import { PullToRefresh } from 'antd-mobile';
import axios from 'axios'
import {ContentBox, ContentLeft, Title, ContentRight} from '../info/js/reflash'

let pageIndex = 1;

function genData(pIndex, params, url, callBack) {
  // console.log(pIndex);
  params.page = pIndex;
  axios({
    method: 'get',
    url,
    params,
    }).then((res)=>{
      console.log(res);
      
      callBack(res.data.data.list);
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
        marginTop: '2.4rem',
        padding: '0 .9rem',
        }}>
        {this.props.show ? <Title>为你推荐</Title> : ''}
        {
          this.state.data.map((item,index)=>{
            return (
              <ContentBox key={index}>
                <ContentLeft>
                  <img src={item.pic} alt=""/>
                </ContentLeft>
                <ContentRight>
                  <p className="data">
                    <strong style={{
                      fontSize: '1.2rem'
                      }}>{item.show_time_top}</strong>
                      {item.show_time_bottom? <span style={{paddingLeft: '.4rem', color: '#999'}}>{item.show_time_bottom}</span> : ''}
                    <span className='title' dangerouslySetInnerHTML={{ __html: item.name}}></span>
                  </p>
                  <p className="location">{item.city_name} | {item.venue_name}</p>
                  <span style={{
                    fontSize: '1.122rem',
                    marginRight: '.2766rem',
                    fontWeight: 400,
                    color: '#ff6743'
                  }}>￥{item.min_price}</span>
                  <span style={{
                    fontSize: '.666rem',
                    color: '#999'
                  }}>起</span>
                </ContentRight>
              </ContentBox>
            )
          })
        }
      </div>
    </PullToRefresh>
  </div>);
  }
}

export default App;