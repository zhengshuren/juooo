
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Ticketempty } from "./onemain.js";
import img4 from "../news/img/4.png";

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
                <Ticketempty>
                    <img className="ticket-emptyimg" src={img4} alt=""/>
                    <div className="ticket-emptytips">暂无电子票</div>
                </Ticketempty>
            </Fragment>
        )
    }
    handleToPath(){
        // console.log("OK");
        // console.log(this.props);
        // this.props.history.push("/info")
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象