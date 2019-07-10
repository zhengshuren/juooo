import axios from "axios"
import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Main } from "./newsmain.js";
import img1 from "./img/1.png"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { Toast} from 'antd-mobile';
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        
        return (
            <Fragment>
                <Main>
                    <div className="wrapper">
                        <div className="content">
                            <div className="theater-list">
                                <ul className="theater-ul">
                                    {this.state.list.map((item, index) => (
                                        <li className="theater-li" key={index}>
                                            <div className="theater-info-shows">
                                                <div className="theater-info">
                                                    <a href="javascript:void(0);" className="theater-pic-name-count" onClick={this.theatershowClick.bind(this,item.name)}>
                                                        <div className="theater-pic-wrap">
                                                            <img className="theater-pic" src={item.pic} alt="" />
                                                        </div>
                                                        <div className="theater-name-count-wrap">
                                                            <p className="theater-name">{item.name}</p>
                                                            <p className="theater-count">{item.count}在售出演</p>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="theater-link">
                                                        <img className="theater-more-btn" src={img1} alt="" />
                                                    </a>
                                                </div>

                                                <div className="theater-shows">
                                                    <div className="theater-show-wrap">
                                                        <div className="swiper-container">
                                                            <div className="swiper-wrapper" >
                                                                {item.show_list.map((item1, index) => (
                                                                    <div className="swiper-slide" key={index}>
                                                                        <div className="theater-show-date">
                                                                            <p className="show-date">{item1.show_time}</p>
                                                                            <span className="dot"></span>
                                                                        </div>
                                                                        <a className="theater-show-pic" onClick={this.toShow.bind(this,item1.schedular_url)}>
                                                                            <img alt="" className="show-pic" src={item1.pic} />
                                                                        </a>
                                                                    </div>
                                                                ))}
                                                                <div className="swiper-slide" key={index}>
                                                                    <div className="theater-show-date">
                                                                        <p className="show-date"></p>
                                                                        <span className="dot"></span>
                                                                    </div>
                                                                    <a className="theater-show-pic"  onClick={this.relteketShow.bind(this)}>
                                                                         <p className="theater-check-more">查看更多&gt;</p>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Main>
            </Fragment>
        )
    }
    handleToPath() {
        // this.props.history.push("/info")
    }
    componentDidMount() {
        this.test();
    }

    toShow(item){
        this.props.history.push('/show?' + item.split("ticket/")[1])
   
    }

    test() {
        Toast.loading('Loading...', 30, () => {
         
        });
        axios({
         
            method: 'get',
            url: '/apis/RestTheatre/getTheatreList',
            params: {
                page: '1',
                version: '5.1 .4',
                referer: '2',
                
            }
        }).then((res) => {
            Toast.hide();
            let temp = res.data.data.theatre_list;
            this.setState({
                list: temp
            });
            new Swiper('.swiper-container', {
                slidesPerView: "auto",
                pagination: ".swiper-pagination",
                // preventClicksPropagation: true
            });
            console.log(this.state.list)
        })
    }
    theatershowClick(data){
        this.props.history.push({pathname:'/theatershow',params:data})
    }
    relteketShow(){
        // this.props.history.push({pathname : '/teketShow', state: { index:2 }});
        this.props.history.push('/teketShow?' + 2);
    }
   
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象