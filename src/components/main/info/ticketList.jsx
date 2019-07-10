import React,{Component} from "react";
import ReactDOM from 'react-dom';

import { PullToRefresh } from 'antd-mobile';
import axios from 'axios'
import {ContentBox, ContentLeft, Title, ContentRight} from './js/reflash'
import { withRouter  } from "react-router-dom";
import Observer from "@/Observer"

let pageIndex = 1;

function genData(pIndex, params, url, callBack) {
  // console.log(pIndex);
  params.page = pIndex;
  axios({
    method: 'get',
    url,
    params,
    }).then((res)=>{
      callBack(res.data.data.recommend_show_list);
    })
}

class App extends Component {
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
    genData(1, this.props.params, this.props.url,(res)=>{
      this.setState({
        height: hei,
        data:res
      })
    })
  }
  handleOnScroll(){
    console.log();
    if( ReactDOM.findDOMNode(this.ptr).scrollTop>50){
    Observer.$emit("setHeaderBar",true)
    }else{
      Observer.$emit("setHeaderBar",false)
    }
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
        onScrollCapture={this.handleOnScroll.bind(this)}
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
      {this.props.show ? <Title>为你推荐</Title> : ''}
      <div style={{
        marginTop: '1.25rem',
        padding: '0 .9rem',
        }}>
        {
          this.state.data.map((item, index)=>{
            return (
              <ContentBox key={index}  onClick={this.toShow.bind(this,item.url)}>
                <ContentLeft>
                  <img src={item.schePic} alt=""/>
                </ContentLeft>
                <ContentRight>
                  <p className="data">
                    <strong style={{
                      fontSize: '1.2rem'
                      }}>{item.show_time}</strong>
                      {item.week? <span style={{paddingLeft: '.4rem', color: '#999'}}>{item.week}</span> : ''}
                    <span className='title' dangerouslySetInnerHTML={{ __html: item.show_name}}></span>
                  </p>
                  <p className="location">{item.c_name} | {item.v_name}</p>
                  <span style={{
                    fontSize: '1.122rem',
                    marginRight: '.2766rem',
                    fontWeight: 400,
                    color: '#ff6743'
                  }}>￥{item.low_price}</span>
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
  toShow(item){
    this.props.history.push('/show?' + item.split("ticket/")[1])
    // console.log(this.props.history)
    
  }
}

export default withRouter(App)