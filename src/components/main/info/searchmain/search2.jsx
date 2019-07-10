import axios from "axios"
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import {Searchmain} from "./searchmain1.js"
import ShowInfo from './../../other/showInfo'

import img7 from '../../news/img/7.png'

 class One extends Component{
    constructor(props){
        super(props);
        this.state={
            searchList:[],
            flag : false,
            content : ''
        }
        // this.state.flag ? <ShowInfo params={this.state.params}  url={'/apis/Search/getShowList'}/> : <Search2/>
    }
    render(){
        return (
            <Fragment>
                {!this.state.flag ?
                    <Searchmain>
                        <div className="search_com">
                            <div className="search_com_box">
                                <div className="default-wrap">
                                    <div className="history-search">
                                        <h3 style={{margin:"0",overflow:"hidden"}}>
                                            <span className="left">历史搜索</span>
                                            <img className="icon" src={img7} alt=""/>
                                        </h3>
                                        <ul className="list" style={{padding:'0'}} onClick={this.handleSearch.bind(this, '猫')}>
                                            <li>猫</li>
                                        </ul>
                                    </div>
                                    <div className="history-search">
                                        <h3 style={{margin:"0",overflow:"hidden"}}>
                                            <span className="left">热门搜索</span>
                                        </h3>
                                        <ul className="list" style={{padding:'0'}}>
                                            {this.state.searchList.map((item,index) => (
                                                <li key={index} onClick={this.handleSearch.bind(this, item)}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Searchmain>
                    : <ShowInfo params={{
                        keywords: this.state.content,
                        sort_type : 1,
                        version: '5.1.4',
                        referer: 2
                    }}  url={'/apis/Search/getShowList'}/>
                }
                
            </Fragment>
        )
    }
    handleSearch(val){
        this.setState({content : val, flag : true})
        console.log(val);
        
    }
    componentDidMount() {
        this.test();
    }
    test() {
        axios({
            method: 'get',
            url: '/apis/Search/getHotWord',
            data: {
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            let temp = res.data.data;
            this.setState({
                searchList: temp
            });
            // console.log(this.state.searchList)
        })
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象