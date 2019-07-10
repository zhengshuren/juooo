import React, { Fragment, Component } from "react";
import "../../../assets/iconfont/iconfont.css"
import {AllHtml, Right, Yuan} from './usercss'
import { withRouter  } from "react-router-dom";
import {connect} from "react-redux"
import { Toast } from 'antd-mobile';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            bool: false,
            imgURL: 'https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png' 
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.logInfo ? 
                    <AllHtml>
                    <div className="upDiv">
                        <ul>
                            <li style={{ width: "50px", height: "50px", backgroundColor: "white", borderRadius: "50%", position: "absolute", left: "20px", top: "27px" }}>
                                <img src={this.state.imgURL} alt="" style={{ width: "100%" , height: '100%', borderRadius: '50%'}} onClick={this.myinfo.bind(this)}/>
                            </li>
                            <li style={{ color: "white", fontSize: "16px", position: "absolute", left: "90px", top: "27px" }}>
                               {this.props.logInfo}
                            </li>
                            <li style={{ color: "white", fontSize: "13px", position: "absolute", left: "90px", top: "57px" }}>
                               ID:{this.props.logInfo}
                            </li>
                            <li style={{ color: "white", fontSize: "13px", position: "absolute", left: "340px", top: "45px" }} onClick={this.myinfo.bind(this)}>
                                >
                            </li>
                            <li className="blackPlus">
                                <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/icon-cardLogo.png" alt="" style={{ width: "136px", height: "31px", position: "absolute", left: "20px", top: "15px" }} />
                                <Right style={{marginLeft:"224px",marginTop:"18px"}}>尊享多项特权</Right>
                                <Yuan>开通橙PLUS卡,限时送100元</Yuan>
                            </li>
                        </ul>
                    </div>
                    <div className="centerDiv">
                        <div>
                            <p style={{ borderRight: "0.5px solid #ccc" }}>
                                <span className="span1">0.00<strong>元</strong></span>
                                <span className="span2">余额</span>
                            </p>
                            <p style={{ borderRight: "0.5px solid #ccc" }}>
                                <span className="span1">2<strong>分</strong></span>
                                <span className="span2">积分</span>
                            </p>
                            <p>
                                <span className="span1">0<strong>张</strong></span>
                                <span className="span2">优惠券</span>
                            </p>
                        </div>
                    </div>
                    <div className="downDiv">
                        <ul>
                            <li><i className="iconfont icon-aiguifanfile2"></i>我的订单</li>
                            <li><i className="iconfont icon-piaojia28"></i>电子票夹<span>></span></li>
                            <li><i className="iconfont icon-wodeqianbao"></i>我的卡包<strong>了解详情</strong><span>></span></li>
                            <li><i className="iconfont icon-wodeguanzhu"></i>我的关注<span>></span></li>
                            <li style={{ margin: "0" }}><i className="iconfont icon-shouhuodizhi"></i>收货地址<span>></span></li>
                            <li><i className="iconfont icon-xiaoxi"></i>我的消息<span>></span></li>
                            <li style={{ margin: "0" }}><i className="iconfont icon-yijianfankui"></i>意见反馈<span>></span></li>
                            <li><i className="iconfont icon-kefu"></i>联系电话<strong>400-185-8666</strong><span>></span></li>
                            <li className="last"><i className="iconfont icon-kefu"></i>在线客服</li>
                            <li></li>
                        </ul>
                    </div>
                </AllHtml> 
                : this.setState({bool : !this.state.bool})
                }
            </Fragment>
        )
    }
    componentDidUpdate () {
        if (!this.props.logInfo) {
            this.hendleFail();
        }
    }
    hendleFail () {
        Toast.info('您还没有登录', 1);
        this.props.history.push('/login');
    }
    myinfo(){
        this.props.history.push('/myinfo');
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

export default connect(mapStateToProps,mapDispathToProps)(withRouter(User));
