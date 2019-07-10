
import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
// import { Onetitle } from "./orangecardhead.js";
// import img3 from "../../news/img/3.png";
// import img1 from "../../news/img/1.png";

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ""
        }
    }
    render() {
        return (
            <Fragment>
                <div style={{width:"90%",margin:"5% 5% 15%"}}>
                    <img style={{width:"100%"}} src="http://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" alt="" />
                    <img style={{width:"100%",marginTop:"5%"}} src="http://image.juooo.com/group1/M00/02/BF/rAoKmV0LdwaAV3L3AACPYXRpEmM585.jpg" alt=""/>
                    <img style={{width:"100%",marginTop:"5%"}} src="http://image.juooo.com/group1/M00/02/8C/rAoKNVxIboWAGoGlAACAOIdOQlc190.jpg" alt=""/>
                    <img style={{width:"100%",marginTop:"5%"}} src="http://image.juooo.com/group1/M00/02/57/rAoKmVyd7WWATSq_AAA4Qmv49Mc061.jpg" alt=""/>
                </div>
            </Fragment>
        )
    }
    // componentDidMount() {
    //     this.test();
    // }
    // test() {
    //     axios({
    //         method: 'post',
    //         url: '/apis/Cardproduct/ajaxGetCardGroupList',
    //         data: {
    //             page: '1',
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //         let temp = res.data.data.showData;
    //         this.setState({
    //             list: temp
    //         });
    //         console.log(this.state.list)
    //     })
    // }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象