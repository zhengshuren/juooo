
import React, { Fragment, Component } from 'react';
import axios from "axios"
import { Section, Main, Hot } from "./js/info"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import img1 from '@/assets/jiantou.png';
import img2 from '@/assets/dian.png';
import { withRouter } from "react-router-dom";
import { Toast } from 'antd-mobile';
import { connect } from "react-redux"

class HotList extends Component {
    constructor() {
        super();
        this.state = {
            HotList: [],
            TourList: [],
            swiperList: [],
            classList: [],
            titleList: [],
            infoList: [],
            bool: true,
        }
    }


    render() {
        return (
            <Fragment>
                {this.state.bool ? <div>
                    <Section>
                        {/* 热门演出 */}
                        <section className="hot-wrap">
                            <div className="title-wrap">
                                <h3 className="title">热门演出</h3>
                                <a href="javascript:void(0)">
                                    <img alt="" src={img1} />
                                </a>
                            </div>
                            <div className="hot-list">
                                <div className="swiper-container" id="swiper1">
                                    <div className="swiper-wrapper">
                                        {
                                            this.state.HotList.map((item, index) => (
                                                <div className="swiper-slide" key={index} onClick={this.toShow.bind(this, item.schedular_url)}>
                                                    <a>
                                                        <div className="item">
                                                            <img alt="" src={item.pic} />
                                                        </div>
                                                        <h3 className="title text-single">{item.show_name}</h3>
                                                    </a>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* 巡回演出 */}
                        {
                            this.state.TourList.length > 3 ?
                                <section className="tour-wrap">
                                    <div className="title-wrap">
                                        <h3 className="title">巡回演出</h3>
                                        <a href="javascript:void(0)">
                                            <img alt="" src={img1} onClick={this.toXiangqing.bind(this)} />
                                        </a>
                                    </div>
                                    <div className="hot-list">
                                        <div className="swiper-container" id="swiper">
                                            <div className="swiper-wrapper">
                                                {
                                                    this.state.TourList.map((item, index) => (
                                                        <div className="swiper-slide" key={index}>
                                                            <a href="javascript:void(0)">
                                                                <div className="item">
                                                                    <img alt="" src={item.pic} />
                                                                </div>
                                                                <h3 className="title text-single">{item.show_name}</h3>
                                                                <p className="tour-num">{item.schedular_num}场巡演</p>
                                                            </a>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section> : <div></div>}
                    </Section>
                    <Main>
                        <div className="main">
                            {
                                this.state.classList.map((item, index) => (
                                    this.state.swiperList[index].length > 3 ?
                                        <section className="category" key={index}>
                                            <div className="top-title">
                                                <h3 className="title">{this.state.titleList[index]}</h3>
                                                <a href="javascript:void(0)">
                                                    <img alt="" src={img1} onClick={this.toTab.bind(this, index)} />
                                                </a>
                                            </div>
                                            <div className="poster" onClick={this.toShow.bind(this, item.url)}>
                                                <div className="bg_c">
                                                    <a href="javascript:void(0)">
                                                        <div className="item">
                                                            <img alt="" src={item.pic} />
                                                            <div className="juooo_sponsor">
                                                            </div>
                                                        </div>
                                                        <div className="item-desc">
                                                            <p className="show-date">
                                                                <strong>{item.date}</strong> {item.week}

                                                            </p>
                                                            <h3 className="title text-double">
                                                                {item.schedular_name}
                                                            </h3>
                                                            <p className="venue text-single">{item.venue_name}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hot-list">
                                                <div className="swiper-container swiper3" >
                                                    <div className="swiper-wrapper">
                                                        {
                                                            this.state.swiperList[index].map((item, index) => (
                                                                <div className="swiper-slide" key={index} onClick={this.toShow.bind(this, item.url)}>
                                                                    <a href="javascript:void(0)">
                                                                        <div className="item">
                                                                            <img alt="" src={item.pic} />
                                                                        </div>
                                                                        <h3 className="title text-single">{item.schedular_name}</h3>
                                                                        <p className="price">
                                                                            <strong className="c_ff6">￥{item.low_price}</strong>起
                                                                </p>
                                                                    </a>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        : <div key={index}></div>
                                ))
                            }
                        </div>
                    </Main>
                    {/* 热门场馆 */}
                    <Hot>
                        <section className="hot-venue">
                            <div className="title-wrap">
                                <h3 className="title">热门场馆</h3>
                                <a href="javascript:void(0)" onClick={this.handleJump.bind(this)}>
                                    <img alt="" src={img1} />
                                </a>
                            </div>

                            <div className="venue-list">

                                <div className="swiper-container" id="swiper4">
                                    <div className="swiper-wrapper">
                                        {
                                            this.state.infoList.map((item, index) =>
                                                <div className="swiper-slide" key={index}>
                                                    <div className="venue-info clearfix">
                                                        <div className="venue-icon">
                                                            <a href="javascript:void(0)" className="wz">
                                                                <img alt="" src={item.pic}></img>
                                                            </a>
                                                        </div>
                                                        <div className="venue-name">
                                                            <h3 className="text-single">
                                                                <a href="javascript:void(0)">{item.name}</a>
                                                            </h3>
                                                            <p>{item.count}场在售演出</p>
                                                        </div>
                                                        <a href="javascript:void(0)" className="more">
                                                            <img alt="" src={img2} />
                                                        </a>
                                                    </div>
                                                    <div className="time-shaft">
                                                        <p className="time-shaft-left">
                                                            <span className="date">{item.show_list[0].show_time}</span>
                                                            <span className="circle"></span>
                                                        </p>
                                                        <p className="time-shaft-right">
                                                            <span className="date">{item.show_list[1].show_time}</span>
                                                            <span className="circle"></span>
                                                        </p>

                                                    </div>
                                                    <ul className="show-list">
                                                        <li className="item" onClick={this.toShow.bind(this, item.show_list[0].schedular_url)}>
                                                            <a>
                                                                <img src={item.show_list[0].pic}></img>
                                                            </a>
                                                        </li>
                                                        <li className="item" onClick={this.toShow.bind(this, item.show_list[1].schedular_url)}>
                                                            <a>
                                                                <img src={item.show_list[1].pic}></img>
                                                            </a>
                                                        </li>
                                                    </ul>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Hot>
                </div> : ''}
            </Fragment>
        )
    }
    handleJump() {
        this.props.history.push('/theatre?');
    }
    toTab(index) {
        if (index === 5) {
            index++;
        }
        this.props.history.push('/teketShow?' + index);
    }
    toShow(item) {
        this.props.history.push('/show?' + item.split("ticket/")[1])
    }
    componentDidMount() {
        this.GetHotList();
        this.GetTourRecommendList();
        this.GetFloorShow();
        this.GetHotTheatre();

    }
    // 热门演出
    GetHotList() {
        let city_id = this.GetId();
        axios({
            method: 'get',
            url: '/apis/home/getHotsRecommendList',
            params: {
                city_id: city_id,
                rows: '50',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            let HotList = res.data.data.hots_show_list.slice(0, 10)
            this.setState({ HotList: HotList })
            new Swiper('#swiper1', {
                slidesPerView: "auto",
                pagination: ".swiper-pagination",
                // preventClicksPropagation: true
            });
        });

    }
    GetId() {
        let city_id = 0;
        this.props.city.map((value, key) => {
            if (key === 'id') {
                return city_id = value;
            }
        })
        return city_id;
    }
    GetTourRecommendList() {
        let city_id = this.GetId();
        axios({
            method: 'get',
            url: '/apis/home/getTourRecommendList',
            params: {
                city_id: city_id,
                rows: '6',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            let TourList = res.data.data.tour_show_list
            this.setState({ TourList: TourList }, () => {
                // console.log(this.state.TourList);

            })
            new Swiper('#swiper', {
                slidesPerView: 1.5,
                spaceBetween: 30,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

            });
        });

    }
    // 演唱会-展览休闲
    GetFloorShow() {
        let city_id = this.GetId();
        axios({
            method: 'get',
            url: '/apis/home/getFloorShow',
            params: {
                city_id: city_id,
                city_abb: "",
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            Toast.hide();
            var classList = [];
            var swiperList = [];
            var titleList = [];
            if (res.data.data.length) {
                this.setState({ bool: true })
                res.data.data.map(item => {
                    if (item.list.length !== 0) {
                        classList.push(item.list[0]);
                        swiperList.push(item.list.slice(1, 10));
                        titleList.push(item.title);
                    }
                });
                this.setState({ titleList, classList, swiperList })
                new Swiper('.swiper3', {
                    slidesPerView: "auto",
                    pagination: ".swiper-pagination",
                    // preventClicksPropagation: true
                });
            } else {
                this.setState({ bool: false })
            }
        });
    }
    // 热门场馆
    GetHotTheatre() {
        axios({
            method: 'get',
            url: '/apis/home/getHotTheatre',
            params: {
                limit: '6',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {

            let infoList = res.data.data.theatre_list
            this.setState({ infoList })

            new Swiper('#swiper4', {
                slidesPerView: "auto",
                pagination: ".swiper-pagination",
                // preventClicksPropagation: true
            });
        });
    }
    toXiangqing() {
        this.props.history.push("/moreTourShowList")
    }
}



const mapStateToProps = (store) => {
    return {
        // listData:store.getIn(["infoReducer","listData"])
        city: store.getIn(['infoReducer', 'city'])
    }
}
//里面必需返回一个对象
const mapDispathToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(HotList));
