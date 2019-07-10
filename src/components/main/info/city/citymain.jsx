import axios from "axios"
import { withRouter } from "react-router-dom";
import {connect} from "react-redux"
import {loadListDataAsyanc} from "../actionCreator"
import React, { Fragment, Component } from "react";
import { Citymain } from "./citymain.js";
import _ from "lodash";
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCity:'',
            citylist: [],
            // cityname: []
        }
    }
    render() {

        if (!_.isEmpty(this.state.citylist)) {
            let obj = this.state.citylist
            let list = []
            for (let i in obj) {
                list.push(obj[i])
            }
            // console.log(list)
            // console.log(this.state.cityname);
            console.log(this.props.city.get("name"))
            // this.props.city.map(item => {
            //     console.log(item);    
            // })
            return (
                <Fragment>
                    <Citymain>
                        <p className="area-title">当前城市</p>
                        <div className="area-wrap">
                            <a href="javascript:void(0);" className="area-items">
                            {this.props.city.get("name")?this.props.city.get("name"):`全国`}
                            </a>
                        </div>
                        <p className="area-title">定位城市</p>
                        <div className="area-wrap">
                            <a href="javascript:void(0);" className="area-items dis">定位中...</a>
                        </div>
                        <p className="area-title">热门城市</p>
                        <div className="area-wrap">
                            <a href="javascript:void(0);" className="area-items">全国</a>
                        </div>
                        <p className="area-title">全部城市</p>
                        {list.map((item, index) => (
                            <div className="area-lists" key={index}>
                                <a href="javascript:void(0);" className="area-Cap" name={item.id}>{item.id}</a>
                                {item.lists.map((el, index) => (
                                    <div  key={index} className="cap-list">
                                        <a onClick={this.citydata.bind(this,{city:el.Abbreviation,id:el.id,name:el.name})} href="javascript:void(0);" className="all-city">{el.name}</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="city-index">
                            <a href="javascript:void(0);"  className="index-items">当前</a>
                            <a href="javascript:void(0);"  className="index-items">定位</a>
                            <a href="javascript:void(0);"  className="index-items">热门</a>
                            {list.map((item, index) => (
                            <a href="javascript:void(0);" name={item.id} key={index}  className="index-items">{item.id}</a>
                            ))}
                        </div>
                    </Citymain>
                </Fragment>
            )
        } else {
            return null
        }

    }
    componentDidMount() {
        this.test();
    }
    test() {
        axios({
            method: 'post',
            url: '/apis/Index/getCityList',
            params: {}
        }).then((res) => {
            let temp = res.data.city_list;
            this.setState({
                citylist: temp
            });
            // console.log(this.state.citylist)
        })
    }
    citydata(dat){
        console.log(dat)
        // this.state.cityname=dat.name
        this.test()
        this.props.history.push('/info')
        this.props.handleTest(dat)
    }
    
}
const mapStateToProps=(store)=>{
//  console.log(store);
 
    return {
        city : store.getIn(['infoReducer','city'])
        //listData:store.getIn(["infoReducer","listData"])
     
    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleTest(dat){
        // console.log('ok');
        
        dispatch(loadListDataAsyanc(dispatch,dat))
    }
})
export default connect(mapStateToProps,mapDispathToProps)(withRouter(One));
//export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象

