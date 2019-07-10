
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Title } from "./newshead.js";
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
                <Title>
                    <div className="head_nav">
                        <h3 className="heads">剧院</h3>
                    </div> 
                </Title>
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