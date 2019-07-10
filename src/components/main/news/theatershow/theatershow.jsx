
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Onetitle } from "./theatershow.js";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import img3 from "../img/3.png";
import img1 from "../img/1.png";

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
                    <div className="top">
                        <div className="head_nav">
                            <h3 className="heads">{this.state.name}</h3>
                        </div> 
                        <div className="title__back" >
                            <img onClick={this.newsClick.bind(this)} src={img3} alt=""/>
                        </div>
                        <div className="title__right">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                    <div className="swiper-container" id="theatershow">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img style={{width:'100%'}} src="http://image.juooo.com/group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="category-container">
                        <div className="category-wrap ">
                            <a className="cate-link" href="javascript:void(0);"  onClick={this.toShowList.bind(this)}>
                                <div className="img-box ">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-show.png" alt=""/>
                                </div>
                                <p className="classify ">演出</p>
                            </a>
                            <a className="cate-link" href="javascript:void(0);">
                                <div className="img-box ">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-calendar.png" alt=""/>
                                </div>
                                <p className="classify ">剧院</p>
                            </a>
                            <a className="cate-link" href="javascript:void(0);">
                                <div className="img-box ">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-theater.png" alt=""/>
                                </div>
                                <p className="classify ">日历</p>
                            </a>
                            <a className="cate-link" href="javascript:void(0);">
                                <div className="img-box ">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-offer.png" alt=""/>
                                </div>
                                <p className="classify ">特惠</p>
                            </a>
                        </div>
                    </div>

                    <div className="hot-wrap">
                        <div className="title">热门演出</div>
                        <div>
                            <div className="list-wrap">
                                <a className="show-item" href="javascript:void(0);">
                                    <div className="show-left">
                                    <img src="http://image.juooo.com/group1/M00/03/72/rAoKNV0bLo6Ac_pfAACCn8N9OJY806.jpg"/>
                                    </div>
                                    <div className="show-right">
                                        <p className="title ">百丽雅三养灵性艺术系列之史桁玮古筝音乐会-深圳站</p>
                                        <p className="show-time ">
                                            <span className="day ">2019.07.05 19:30</span>
                                        </p>
                                        <p className="show-time ">
                                            <span className="vunue ">{this.state.name}</span>
                                        </p>
                                        <p className="ft0 price">
                                            <span className="fs24 mr8">¥</span>
                                            <span className="fs32">88</span>
                                            <span className="fs24">起</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="list-wrap">
                                <a className="show-item" href="javascript:void(0);">
                                    <div className="show-left">
                                    <img alt="" src="http://image.juooo.com/group1/M00/03/08/rAoKNVyq3p2AfkRFAAC11jtzxJY577.jpg"/>
                                    </div>
                                    <div className="show-right">
                                        <p className="title ">【万有音乐系】尺八一声一世 火的意志巡回演奏会--深圳站</p>
                                        <p className="show-time ">
                                            <span className="day ">2019.07.05 20:00</span>
                                        </p>
                                        <p className="show-time ">
                                            <span className="vunue ">{this.state.name}</span>
                                        </p>
                                        <p className="ft0 price">
                                            <span className="fs24 mr8">¥</span>
                                            <span className="fs32">188</span>
                                            <span className="fs24">起</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="list-wrap">
                                <a className="show-item" href="javascript:void(0);">
                                    <div className="show-left">
                                    <img alt="" src="http://image.juooo.com/group1/M00/01/F7/rAoKNVsgy0yAKJecAAEA4AshTXA031.jpg"/>
                                    </div>
                                    <div className="show-right">
                                        <p className="title ">【小橙堡】梦幻互动亲子剧《人鱼公主》---深圳站</p>
                                        <p className="show-time ">
                                            <span className="day ">2019.07.07 - 2019.07.28</span>
                                        </p>
                                        <p className="show-time ">
                                            <span className="vunue ">{this.state.name}</span>
                                        </p>
                                        <p className="ft0 price">
                                            <span className="fs24 mr8">¥</span>
                                            <span className="fs32">80</span>
                                            <span className="fs24">起</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="list-wrap">
                                <a className="show-item" href="javascript:void(0);">
                                    <div className="show-left">
                                    <img alt="" src="http://image.juooo.com/group1/M00/02/61/rAoKmVysWqiAQs3vAACn7HZ4yrI633.jpg"/>
                                    </div>
                                    <div className="show-right">
                                        <p className="title ">《 2019桂冠之声--新生代旅美钢琴家雷博文巡回演奏会》-深圳站</p>
                                        <p className="show-time ">
                                            <span className="day ">2019.07.09 20:00</span>
                                        </p>
                                        <p className="show-time ">
                                            <span className="vunue ">{this.state.name}</span>
                                        </p>
                                        <p className="ft0 price">
                                            <span className="fs24 mr8">¥</span>
                                            <span className="fs32">88</span>
                                            <span className="fs24">起</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="all-show ">
                            <a href="javascript:void(0);">查看全部演出</a>
                            <i className="icon"></i>
                        </div>
                        <div style={{height:"10vh"}}></div>
                    </div>

                </Onetitle>
            </Fragment>
        )
    }
    toShowList () {
        this.props.history.push('/teketShow?' + 2)
        // this.props.history.push({pathname: , state: {jump : true}});
    }
    componentDidMount () {
        // this.state.name=this.props.location.params
        let data=this.props.location.params
        this.setState({
            name:data
        })
        
        new Swiper ('#theatershow', {
        });
    }
    newsClick(){
        this.props.history.push('/theatre')
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象