
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import {connect} from "react-redux"
import { Search } from "./search1.js";
import img8 from '../news/img/8.png'
import img9 from '../news/img/9.png'
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
                <Search>
                <div className="address" onClick={this.cityClick.bind(this)}>
                    <strong>
                        <img className="address-icon" src={img8} />
                    </strong>
                    <span className="text-single"> {this.props.city.get("name")?this.props.city.get("name"):`全国`}</span>
                </div>
                <div className="search" onClick={this.searchClick.bind(this)}>
                    <img src={img9}/>
                    <span>搜索热门演出</span>
                </div>
                <span className="icon-wrap">
                    <a href="">
                    <img src="http://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png"/>
                    </a>
                </span>
                </Search>
            </Fragment>
        )
    }
    handleToPath(){
        // console.log("OK");
        // console.log(this.props);
        // this.props.history.push("/info")
    }
    searchClick(){
        this.props.history.push('/search')
    }
    cityClick(){
        this.props.history.push('/city')
    }
}
const mapStateToProps=(store)=>{
    return {
        // listData:store.getIn(["infoReducer","listData"])
        city : store.getIn(['infoReducer','city'])

    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    // handleTest(){
    //     dispatch(loadListDataAsyanc(dispatch))
    // }
})
export default connect(mapStateToProps,mapDispathToProps)(withRouter(One));

// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象