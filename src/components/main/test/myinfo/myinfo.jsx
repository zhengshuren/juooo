
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Myinfo } from "./myinfo.js";
import 'swiper/dist/css/swiper.min.css'
import img3 from "../../news/img/3.png";
import img1 from "../../news/img/1.png";
import {connect} from "react-redux"


 class One extends Component{
     
        
    constructor(props){
        super(props);
        this.state={
            name:"",
            imgURL: 'https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png' 
        }
    }
    render(){
        return (
            <Fragment>
                <Myinfo>
                    {/* 头部 */}
                    <div className="top">
                        <div className="head_nav">
                            <h3 className="heads">账户设置</h3>
                        </div> 
                        <div className="title__back" >
                            <img onClick={this.myjuoooClick.bind(this)} src={img3} alt=""/>
                        </div>
                        <div className="title__right">
                            <img src={img1} alt=""/>
                        </div>
                    </div>

                    {/* 主题内容 */}
                    <div className="pages">
                        <div className="panel">
                            <div className="grid">
                                <div className="grid-title-wrap">
                                    <span className="left">头像</span>
                                    <img alt="" className="f-right " src={this.state.imgURL} style={{paddingTop: '4%', height: '60%', borderRadius: '50%'}} onClick={this.hendleUpdate.bind(this)}></img>
                                </div>
                                <div className="grid-title-wrap">
                                    <span className="left">{this.props.logInfo}</span>
                                    <a className="f-right " href="javascript:;">
                                        <span className="icon">罗密欧</span>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="grid-title-wrap" id="js-mobile">
                                    <span className="left">手机号</span>
                                    <a className="f-right" href="javascript:;">
                                        166****0323
                                    </a>
                                </div>
                                <div className="grid-title-wrap">
                                    <span className="left">邮箱</span>
                                    <a className="f-right" href="javascript:;"></a>
                                </div>
                                <div className="grid-title-wrap birth-info-wrap">
                                    <span className="left">生日信息</span>
                                    <span className="left birth-info">（只允许设置一次）</span>
                                    <a className="f-right" href="javascript:;">2019-07-06</a>
                                </div>
                                <div className="grid-title-wrap" id="js-loginPwd">
                                    <span className="left">登录密码</span>
                                    <a className="f-right" href="javascript:;">修改</a>
                                </div>
                                <div className="grid-title-wrap" id="js-loginPwd">
                                    <span className="left">支付密码</span>
                                    <a className="f-right" href="javascript:;">设置</a>
                                </div>
                                <div className="grid-title-wrap" id="js-loginPwd">
                                    <span className="left">实名认证</span>
                                    <a className="f-right" href="javascript:;">未认证</a>
                                </div>
                                <div className="grid-title-wrap" id="js-loginPwd">
                                    <span className="left">学生身份认证</span>
                                    <a className="f-right" href="javascript:;">去验证</a>
                                </div>
                            </div>

                            {/* 退出登录 */}
                            <div className="btn-wrap">
                                <button className="btn btn-return" id="js-logout">退出登录</button>
                            </div>
                        </div>
                    </div>

                    <div style={{height:"8vh",backgroundColor:"#f5f5f5"}}></div>
                </Myinfo>
            </Fragment>
        )
    }
    componentDidMount () {
        // this.state.name=this.props.location.params
        let data=this.props.location.params
        this.setState({
            name:data
        })
        
    }
    myjuoooClick(){
        this.props.history.push('/myjuooo')
    }
    hendleUpdate (e) {
        let node=document.createElement("input");
        node.type="file";
        node.style.display = "none";
        document.body.prepend(node);
        node.click();
        node.onchange= (event) => {
          var file=event.target.files[0];
          //   console.log(window.URL.createObjectURL(file))
          this.setState({imgURL : window.URL.createObjectURL(file)});
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
    
})

export default connect(mapStateToProps,mapDispathToProps)(withRouter(One));

// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象