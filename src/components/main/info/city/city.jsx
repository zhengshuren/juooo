
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { City } from "./city.js";
import Citymain from "./citymain.jsx"
import img3 from "../../news/img/3.png";
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
                <City>
                    <div className="head_nav">
                        <h3 className="heads">切换城市</h3>
                    </div> 
                    <div className="title__back">
                        <img alt="" src={img3} onClick={this.relClick.bind(this)}/>
                    </div>
                </City>
                <Citymain/>   
            </Fragment>
        )
    }
    relClick(){
        this.props.history.push('/info')
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象

