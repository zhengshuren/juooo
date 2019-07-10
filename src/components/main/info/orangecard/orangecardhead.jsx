
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Onetitle } from "./orangecardhead.js";
import img3 from "../../news/img/3.png";
import img1 from "../../news/img/1.png";

 class One extends Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    render(){
        return (
            <Fragment>
                <Onetitle>
                    <div className="head_nav">
                        <h3 className="heads">欢聚橙卡</h3>
                    </div> 
                    <div className="title__back">
                        <img onClick={this.cancelClick.bind(this)} src={img3} alt=""/>
                    </div>
                    <div className="title__right">
                        <img src={img1} alt=""/>
                    </div>
                    <div style={{marginTop:"12%"}}>
                        <img src="http://image.juooo.com/group1/M00/02/CA/rAoKNVx00zOACrrkAAE3RpfMkyw934.jpg" style={{width:"100%",height:"100%"}} alt=""/>
                        <a href="" className="mine-btn">我的卡包&gt;</a>
                    </div>
                </Onetitle>
            </Fragment>
        )
    }
    handleToPath(){
        // console.log("OK");
        // console.log(this.props);
        // this.props.history.push("/info")
    }
    cancelClick(){
        this.props.history.push('/info')
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象