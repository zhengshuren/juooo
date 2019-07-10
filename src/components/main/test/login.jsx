import React,{Fragment, Component} from "react";
import { withRouter  } from "react-router-dom";
import axios from 'axios'
import zuojiantou from '@/assets/zuojiantou.png'
import { BigDiv, Nav, Title, LoginButton, Username, Password, Register } from './usercss'
import {loadListDataAsyanc} from './actionCreator'
import {connect} from "react-redux"
import { Toast } from 'antd-mobile';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username : '',
            password : '',
            password1 : '',
            bool: true
        }
    }
    render(){
        return (
            <Fragment>
                <BigDiv>
                    <Nav>
                        <div>
                            <img src={zuojiantou} alt="" onClick={this.handleBack.bind(this)}/>
                        </div>
                    </Nav>
                    <div className="content">
                        <Title>欢迎来到聚橙网</Title>
                        <Username value={this.state.username} onChange={this.handleUsername.bind(this)} placeholder="请输入用户"></Username>
                        <Password type="password" value={this.state.password} onChange={this.handlePassword.bind(this)} placeholder="请输入密码"></Password>
                        {
                          this.state.bool ? '' :  <Password type="password" value={this.state.password2} onChange={this.handlePassword1.bind(this)} placeholder="请输入密码"></Password>
                        }
                        
                        <div style={{paddingTop: '3.22rem'}}>
                            <LoginButton onClick={this.handleLogin.bind(this)}>
                            {this.state.bool ? '登录' : '注册'}
                            </LoginButton>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end',marginTop: '1.25333rem'}}>
                            <Register onClick={this.handleTab.bind(this)}>
                                {this.state.bool ? '用户注册' : '用户登录'}
                            </Register>
                        </div>
                    </div>
                </BigDiv>
            </Fragment>
        )
    }
    handleBack () {
        this.props.history.go(-2)
    }
    handleTab () {
        this.setState({
            bool : !this.state.bool
        })
    }
    handleUsername (e) {
        this.setState({
            username : e.target.value
        })
    }
    handlePassword (e) {
        this.setState({
            password : e.target.value
        })
    }
    handlePassword1 (e) {
        this.setState({
            password1 : e.target.value
        })
    }
    handleLogin () {
        if (this.state.bool) {
            axios({
                method: 'post',
                url: '/login',
                data : {
                    username : this.state.username,
                    password : this.state.password
                }
            }).then((res) => {
                // console.log(res.data.data);
                if (res.data.data) {
                    console.log(res.data.msg);
                    Toast.info(res.data.msg, 1);
                    this.props.handleTest(res.data.data);
                    this.props.history.goBack();
                }
                Toast.info(res.data.msg, 1);
                this.props.handleTest(res.data.data);
            })
        } else if (this.state.password === this.state.password1) {
            axios({
                method: 'post',
                url: '/register',
                data : {
                    username : this.state.username,
                    password : this.state.password
                }
            }).then((res) => {
                if (res.data.data) {
                    console.log(res.data.msg);
                    Toast.info(res.data.msg, 1);
                    this.props.handleTest(res.data.data);
                    this.props.history.goBack();
                }
                Toast.info(res.data.msg, 1);
                this.props.handleTest(res.data.data);
            })
        } else {
            // 密码错误
            Toast.info('密码错误', 1);
        }
        
    }
}
const mapStateToProps=(store)=>{
    return {
        logInfo:store.getIn(["testReducer","logInfo"])
    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleTest(dataInfo){
        dispatch(loadListDataAsyanc(dispatch, dataInfo))
    }
})
export default connect(mapStateToProps,mapDispathToProps)(withRouter(Login));
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象