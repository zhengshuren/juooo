import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import zuojiantou from "@/assets/leftjiantou.png"
import { All } from "./js/zhuan"
import dian from "@/assets/dian.png"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Zhuan extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    headText: "充值返现",
                    mainText: "购卡或充值999元，可额外赠送余额100元（节日平台活动额外叠加赠送）。购卡或充值不赠送积分，目前一个聚橙网账号仅支持一张橙PLUS卡绑定。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-moneyS.png",
                    lowText: "充值返现"
                },
                {
                    headText: "优先购票",
                    mainText: "部分演出提供橙PLUS卡会员优先购票权益，即在演出对外公售前，可优先使用橙PLUS卡支付。提前购，抢先看！",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-gpS.png",
                    lowText: "优先购票"
                },
                {
                    headText: "专属票价",
                    mainText: "部分演出仅供橙PLUS卡会员独享，非会员不能购买，仅支持橙PLUS卡支付。专属票，会员独享！",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-zsS.png",
                    lowText: "专属票价"
                },
                {
                    headText: "专享折扣",
                    mainText: "部分演出提供橙PLUS卡会员专享折扣，非会员不享受，仅支持橙PLUS卡支付。会员价，放肆看！",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-zkS.png",
                    lowText: "专享折扣"
                },
                {
                    headText: "专享券",
                    mainText: "部分演出提供橙PLUS卡专享票价，仅限橙PLUS卡进行支付，价格也是橙PLUS卡专属优惠，专属演出放肆看。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-zxS.png",
                    lowText: "专享券"
                },
                {
                    headText: "全场包邮",
                    mainText: "订单使用橙PLUS卡支付，可享受国内无门槛免邮福利（海外、港澳台订单除外）。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-byS.png",
                    lowText: "全场包邮"
                },
                {
                    headText: "双倍积分",
                    mainText: "订单使用橙PLUS卡支付，可获得双倍积分，即以在聚橙网购票获得的积分为基准，发放双倍积分，积分可在积分商城进行兑换。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-jfS.png",
                    lowText: "双倍积分"
                },
                {
                    headText: "赠观演券",
                    mainText: "新卡绑定时，赠送1张观演券，在使用期限内兑换专享演出。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-yqS.png",
                    lowText: "赠观演券"
                },
                {
                    headText: "明星活动",
                    mainText: "优先参与线下明星活动、艺术沙龙。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-mxS.png",
                    lowText: "明星活动"
                },
                {
                    headText: "免费期刊",
                    mainText: "线上线下精美演出资讯及期刊，不定期领取。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-qkS.png",
                    lowText: "免费期刊"
                },
                {
                    headText: "生日专享",
                    mainText: "生日当月（需提前设定生日日期），赠送生日专属折扣券，可享受特殊演出折扣优惠。",
                    img: "https://m.juooo.com/public/basic/Home/app/app-juooo4/images/card/equity-srS.png",
                    lowText: "生日专享"
                }
            ],
            bool: true
        }
    }

    render() {
        return (
            <Fragment>
                <All>
                    <div className="head">
                        <img alt="" className="headImg1" src={zuojiantou} onClick={this.back.bind(this)} />
                        <span className="headSpan">橙PLUS卡权益</span>
                        <img alt="" className="headImg2" src={dian} />
                    </div>
                    <div className="main">
                        <div className="zhuan1">
                            <ul className="swiper-wrapper">
                                {
                                    this.state.list.map((item, index) => {
                                        return <li key={index} className="swiper-slide li1">
                                            <p className="lunP">
                                                <span className="text1">{item.headText}</span>
                                                <span className="text2">{item.mainText}</span>
                                            </p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div className="zhuan2">
                            <ul className="swiper-wrapper" >
                                {
                                    this.state.list.map((item, index) => {
                                        return <li key={index} className="swiper-slide li2">
                                            <img src={item.img} alt="" />
                                            <p className="lowText">{item.lowText}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="down">
                            <div className="left">开通会员PLUS会员卡,限时送<span style={{ color: "#d4a36f" }}> ¥ 100</span></div>
                            <div className="right">立即开通</div>
                        </div>
                    </div>
                </All>
            </Fragment>
        )
    }

    componentDidMount() {
        var mySwiper1 = new Swiper('.zhuan1', {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
            onSlideChangeEnd: function (swiper) {
                mySwiper2.slideTo(swiper.activeIndex);
            },
            onTap: function (swiper) {
                mySwiper2.slideTo(swiper.clickedIndex);
            }
        })

        var mySwiper2 = new Swiper('.zhuan2', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
            // 点击事件
            onTap: function (swiper) {
                mySwiper1.slideTo(swiper.clickedIndex);
            }
        })
    }

    back() {
        this.props.history.goBack();
    }
}
export default withRouter(Zhuan);
