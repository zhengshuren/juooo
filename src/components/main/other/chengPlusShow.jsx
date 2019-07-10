import React, { Fragment, Component } from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";
import leftjiantou from "@/assets/leftjiantou.png"
import dian from "@/assets/dian.png"
import { AllHtml } from "./js/chengPlusShow"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class ChengPlusShow extends Component {
    constructor() {
        super();
        this.state = {
            cardInfoByAjaxList: [],
            plusData: [
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeC.png",
                    text: "充值返回",
                    smallText: "重置立返100元"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeG.png",
                    text: "优先购票",
                    smallText: "提前购,抢先看"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeGP.png",
                    text: "专属票价",
                    smallText: "专属票,会员独享"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeZK.png",
                    text: "专享折扣",
                    smallText: "会员价,放肆看"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeZX.png",
                    text: "专享券",
                    smallText: "会员类抵用券"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeMY.png",
                    text: "全场包邮",
                    smallText: "国内免邮票"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeZ.png",
                    text: "双倍积分",
                    smallText: "积分可抵扣"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeZG.png",
                    text: "赠观演券",
                    smallText: "用户绑卡送"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeMX.png",
                    text: "明星活动",
                    smallText: "优先参加活动"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeMF.png",
                    text: "免费期刊",
                    smallText: "两季精美期刊"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeB.png",
                    text: "生日专享",
                    smallText: "专项票价优惠"
                },
                {
                    img: "https://m.juooo.com/public/basic//Home/app/app-juooo4/images/card/pic_privilegeM.png",
                    text: "更多特权",
                    smallText: "敬请期待"
                },
            ],
            getPlusCouponList: [],
            getScheExclusiveList: [],
            preBuyTicketAjaxList: [],
            getWatchPerScheduleList: [],
            getDiscountScheduleList: []
        }
    }
    render() {
        return (
            <Fragment>
                <AllHtml>
                    <div className="blackCard">
                        <img className="img1" src={leftjiantou} alt="" onClick={this.back.bind(this)} />
                        <span>橙PLUS卡</span>
                        <img className="img2" src={dian} alt="" />
                    </div>

                    <div className="tu12">
                        <img className="img1" src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/icon-cardLogo.png?v=201904181013" alt="" />
                        <span className="span1">储值卡</span>
                        <span className="span2">立即绑卡</span>
                        {
                            this.state.cardInfoByAjaxList.map((item, index) => {
                                return <li className="lis" key={index}>￥{item.cardBalance}<span>开通立返{item.money}元</span></li>
                            })
                        }
                        <div className="zun">-尊享权益-<a href="#">使用规则</a></div>
                        <div className="div12">
                            {
                                this.state.plusData.map((item, index) => {
                                    return <li key={index} onClick={this.zhuan.bind(this)}>
                                        <img src={item.img} alt="" />
                                        <p className="p1">{item.text}</p>
                                        <p className="p2">{item.smallText}</p>
                                    </li>
                                })
                            }
                        </div>
                        <div className="divOneImg">
                            <p className="p1">立即开通</p>
                            <p className="p2">开通橙PLUS会员卡，限时送 ￥ 100</p>
                        </div>
                    </div>

                    {/* 专享券 */}
                    <div className="zhuanxiang">
                        <p>
                            <span className="h2">专享券</span>
                            <span className="you">&gt;</span>
                        </p>
                        <div className="zhuanxiangquan">
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/vip_icon.png?v=201904181013" alt="" />
                            <p className="p1" style={{ color: "#d4a36f" }}>
                                <span style={{ fontSize: "12px" }}>￥</span>
                                <span style={{ fontSize: "25px" }}>50</span>
                                <span style={{ fontSize: "12px" }}>满999元可用</span>
                            </p>
                            <p className="p1" style={{ color: "#594025", fontSize: "16px", fontWeight: "700" }}>{this.state.getPlusCouponList.coupon_name}</p>
                            <p className="p1" style={{ fontSize: "12px", color: "#999" }}>
                                <span>有限期:</span>
                                <span>{this.state.getPlusCouponList.begin_valid_time}</span>
                                <span>-</span>
                                <span>{this.state.getPlusCouponList.end_valid_time}</span>
                            </p>
                            <div className="lingqu">领取</div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "15px", backgroundColor: "#f5f5f5" }}></div>

                    {/* 专属票 */}
                    <div className="zhuanshupiao">
                        <p className="p3">
                            <span className="h2">专属票</span>
                            <span className="you">&gt;</span>
                        </p>
                        <img src={this.state.getScheExclusiveList.spu_img} alt="" />
                        <p className="shengluehao">{this.state.getScheExclusiveList.schedular_name}</p>
                    </div>
                    <div style={{ width: "100%", height: "15px", backgroundColor: "#f5f5f5" }}></div>

                    {/* 优先购票 */}
                    <div className="youxiangoupiao" style={{position:"relative"}}>
                        <p className="p3">
                            <span className="h2">优先购票</span>
                            <span className="you">&gt;</span>
                        </p>
                        <div className="youxiangoupiaoimg">
                            <ul className="swiper-wrapper">
                                {
                                    this.state.preBuyTicketAjaxList.map((item, index) => {
                                        return (
                                            <li style={{ listStyle: "none" }} className="swiper-slide" key={index}>
                                                <div className="swipers">
                                                    <img src={item.pic} alt="" />
                                                    <div className="right">
                                                        <p><span className="date">{item.show_time_short}</span><span className="week">{item.weekStr}</span></p>
                                                        <p><span className="longText">{item.schedular_name}</span></p>
                                                        <p><span className="short">{item.cityVenueStr}</span></p>
                                                        <p className="shoupiao"><span className="price">￥{item.low_price}</span><span className="qi">起</span><span className="goupiao">购票进行中</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="swiper-pagination" style={{position:"absolute",bottom:"23px"}}></div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "15px", backgroundColor: "#f5f5f5" }}></div>

                    {/* 免费观演 */}
                    <div className="mianfeiguanyan">
                        <p className="mianfeiP">
                            <span className="h2">免费观演</span>
                            <span className="you">可用<span className="ling">0</span>张 &gt;</span>
                        </p>
                        <div className="mianfeiguankanimg">
                            <ul className="swiper-wrapper">
                                {
                                    this.state.getWatchPerScheduleList.map((item, index) => {
                                        return (
                                            <li style={{ listStyle: "none" }} className="swiper-slide" key={index}>
                                                <div className="swipers">
                                                    <img src={item.pic} alt="" />
                                                    <p className="mianfei">{item.schedular_name}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "15px", backgroundColor: "#f5f5f5" }}></div>

                    {/* 专享折扣 */}
                    <div className="zhuanxiangzhekou">
                        <p className="p3">
                            <span className="h2">专享折扣</span>
                            <span className="you">&gt;</span>
                        </p>
                        <ul className="zhekouUl">
                            {
                                this.state.getDiscountScheduleList.map((item, index) => {
                                    return (
                                        <li className="zhekouLi" key={index} style={{ position: "relative" }}>
                                            <img src={item.pic} alt=""></img>
                                            <span className="xiaozhe">{item.discount}折</span>
                                            <p className="text">{item.schedular_name}</p>
                                            <p><span className="jia">￥{item.price}</span><span className="qi2">起</span></p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="low">查看更多演出 ></div>
                    </div>
                    <div style={{ width: "100%", height: "70px", backgroundColor: "#f5f5f5" }}></div>
                </AllHtml>
            </Fragment>
        )
    }

    componentDidMount() {
        this.cardInfoByAjax();
        this.getPlusCouponList();
        this.getScheExclusiveList();
        this.preBuyTicketAjax();
        this.getWatchPerScheduleList();
        this.getDiscountScheduleList();
    }

    // PLUS
    cardInfoByAjax() {
        axios({
            method: 'post',
            url: '/apis/Cardproduct/cardInfoByAjax',
            params: {
                user_id: '6741685'
            }
        }).then((res) => {
            // console.log(res.data.data.purchase);
            this.setState({
                cardInfoByAjaxList: res.data.data.purchase
            });

        })
    }

    // 专享券
    getPlusCouponList() {
        axios({
            method: 'get',
            url: '/apis/Cardproduct/getPlusCouponList',
            params: {
                limitNum: '6'
            }
        }).then((res) => {
            // console.log(res.data.exclusiveCoupon[0]);
            this.setState({
                getPlusCouponList: res.data.exclusiveCoupon[0]
            });

        })
    }

    // 专属票
    getScheExclusiveList() {
        axios({
            method: 'get',
            url: '/apis/welfare/getScheExclusiveList',
            params: {

            }
        }).then((res) => {
            // console.log(res.data.data.list[0]);
            let temp = res.data.data.list[0];
            temp.spu_img = `http://image.juooo.com${res.data.data.list[0].spu_img}`;
            this.setState({
                getScheExclusiveList: temp
            });
        })
    }

    // 优先购票
    preBuyTicketAjax() {
        axios({
            method: 'get',
            url: '/apis/Cardproduct/preBuyTicketAjax',
            params: {
                page: '1',
                page_limit: '10'
            }
        }).then((res) => {
            // console.log(res.data.data.list);
            let temp = res.data.data.list;
            temp.map((item) => {
                // console.log(item)
                item.pic = `http://image.juooo.com${item.pic}`;
            })
            this.setState({
                preBuyTicketAjaxList: temp
            });

            // swiper
            new Swiper('.youxiangoupiaoimg', {
                // 显示两行
                slidesPerColumn: 2,
                // 小圆点
               pagination: '.swiper-pagination',
            })
        })
    }

    // 免费观演
    getWatchPerScheduleList() {
        axios({
            method: 'get',
            url: '/apis/WatchPerform/getWatchPerScheduleList',
            params: {
                user_id: '6741685'
            }
        }).then((res) => {
            // console.log(res.data.data.list);
            let temp = res.data.data.list;
            temp.map((item) => {
                // console.log(item)
                item.pic = `http://image.juooo.com${item.pic}`;
            })
            this.setState({
                getWatchPerScheduleList: temp
            });

            // swiper
            new Swiper('.mianfeiguankanimg', {
                slidesPerView: 3
            })
        })
    }

    // 专享折扣
    getDiscountScheduleList() {
        axios({
            method: 'get',
            url: '/apis/WatchPerform/getDiscountScheduleList',
            params: {

            }
        }).then((res) => {
            // console.log(res.data.data.list);
            let temp = res.data.data.list;
            temp.map((item) => {
                // console.log(item)
                item.pic = `http://image.juooo.com${item.pic}`;
            })
            this.setState({
                getDiscountScheduleList: temp
            });
        })
    }

    back(){
        this.props.history.goBack();
    }

    zhuan(){
        this.props.history.push("/zhuan")
    }
}

export default withRouter(ChengPlusShow);
