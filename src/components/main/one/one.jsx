import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import {connect} from "react-redux"

import Onehead from "./onehead.jsx";
import Onemain from "./onemain.jsx";
import { Toast } from 'antd-mobile';

 class One extends Component{
    constructor(props){
        super(props);
        this.state={
            bool: false
        }
    }
    render(){
        return (
            <Fragment>
                {
                    this.props.logInfo ?  <div><Onehead /> <Onemain/></div> : this.setState({bool : !this.state.bool})
                }
            </Fragment>
        )
    }
    
    componentDidUpdate () {
        this.hendleFail();
    }
    hendleFail () {
        Toast.info('您还没有登录', 1);
        this.props.history.push('/login');
    }
}
const mapStateToProps=(store)=>{
    return {
        logInfo:store.getIn(["testReducer","logInfo"])
    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    
})
export default connect(mapStateToProps,mapDispathToProps)(withRouter(One));
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象