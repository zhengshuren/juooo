import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import Route from "@/router"
import { withRouter  } from "react-router-dom";
import TabBar from "@/components/layout/tabbar/tabbar"
// import Header from "@/components/layout/header/header"

import Juoootitle from "react-document-title"
class App extends React.Component{
  render(){
    return (
    <Juoootitle title="聚橙网-票务网_演唱会门票_演出订票平台_演出咨询_订票热线400-185-8666">
    <div style={{overflow:"auto",background:"#fff"}}>
        {/* <Header/> */}
        <Route/>
        {
          (this.props.location.pathname !== '/login' && this.props.location.pathname !== '/show' && this.props.location.pathname !== '/jutehuiShow' && this.props.location.pathname !== '/wodetehui' && this.props.location.pathname !== '/zhuan')? <TabBar/> : ''
        }
        
    </div>
    </Juoootitle>
    )
  }
  componentDidMount(){
    
  }
}

export default withRouter(App);
