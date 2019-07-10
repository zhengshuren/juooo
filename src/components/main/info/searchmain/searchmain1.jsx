import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import {Searchmain} from "./searchmain1.js"
import Search2 from "./search2.jsx"
import ShowInfo from './../../other/showInfo'

import img5 from '../../news/img/5.png'
import img6 from '../../news/img/6.png'

 class One extends Component{
    constructor(props){
        super(props);
        this.state={
            flag : false,
            content : '',
            params : {}
        }
    }
    render(){
        return (
            <Fragment>
                <Searchmain>
                    <div className="search"> 
                        <div className="head">
                            <div className="search-ipt">
                                <img className="search-icon" src={img5} alt=""/>
                                <form action="" className="search-from">
                                <input type="search" value={this.state.content} placeholder="搜索热门演出" className="text" id="text" onChange={this.handleChange.bind(this)}/>
                                </form>
                                <img className="cancel-icon"  src={img6} alt="" onClick={this.clearClick.bind(this)} />
                            </div>
                            <span className="cancel" onClick={this.cancelClick.bind(this)}>取消</span>
                        </div>
                        {
                            this.state.flag ? <ShowInfo params={this.state.params}  url={'/apis/Search/getShowList'}/> : <Search2/>
                        }
                    </div>
                </Searchmain>
            </Fragment>
        )
    }
    handleChange (event) {
        // console.log(event.target.value);
        let content = event.target.value;
        
        this.setState({content},()=>{
            if (content !== '') {
                let temp = {
                    keywords: this.state.content,
                    sort_type : 1,
                    version: '5.1.4',
                    referer: 2
                }
                this.setState({params : temp, flag : true});
            }
        })
    }
    
    cancelClick () {
        this.props.history.push('/info')
    }
    clearClick () {
        this.setState({content: ''})
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象