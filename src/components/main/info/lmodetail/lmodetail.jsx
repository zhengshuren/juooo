
import { withRouter } from "react-router-dom";
import React, { Fragment, Component } from "react";
import { Lmodetail } from "./lmodetail.js"
import img11 from "../../news/img/11.png";
import img10 from "../../news/img/10.png";

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    render() {


        return (
            <Fragment>
                <Lmodetail>
                    <div className="top">
                        <div className="head_nav">
                            <h3 className="heads">巡演详情</h3>
                        </div>
                        <div className="title__back" >
                            <img onClick={this.infoClick.bind(this)} src={img11} alt="" />
                        </div>
                        <div className="title__right">
                            <img src={img10} alt="" />
                        </div>
                    </div>
                    <div className="pages">
                        <div className="js-main-content">
                            <div className="poster">
                                <div className="poster-bg-shadow"></div>
                                <div className="poster-bg-wrapper">
                                    <img className="poster-bg" src="http://image.juooo.com//group1/M00/02/95/rAoKNVxiRKOAXzXQAACMoAN8LQw887.jpg" alt="2019年法语音乐剧《罗密欧与朱丽叶》" title="2019年法语音乐剧《罗密欧与朱丽叶》" />
                                </div>
                                <div className="poster-fg"></div>
                                <div className="poster-img">
                                    <div className="img-bg">
                                        <img className="img-fg" src="http://image.juooo.com//group1/M00/02/95/rAoKNVxiRKOAXzXQAACMoAN8LQw887.jpg" alt="2019年法语音乐剧《罗密欧与朱丽叶》" title="2019年法语音乐剧《罗密欧与朱丽叶》" />
                                    </div>
                                    <a className="round-num" href="javascript:;">47场巡演</a>
                                </div>
                            </div>

                            <div className="text-desc">
                                <h3 className="title">
                                    2019年法语音乐剧《罗密欧与朱丽叶》
                                </h3>
                                <div className="row">
                                    时间：<span className="time">2019.06.09 - 2019.08.11</span>
                                </div>
                            </div>

                            <div className="round-list">
                                <div className="v-line"></div>
                                <ul className="round-list-wrapper">
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.9</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="93395">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.9</span>
                                            <span className="time">周日 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="92963">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.11</span>
                                            <span className="time">周二 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="92964">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.13</span>
                                            <span className="time">周四 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="92966">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.14</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="92967">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.15</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95066">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.15</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95067">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.16</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95068">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.16</span>
                                            <span className="time">周日 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95069">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.18</span>
                                            <span className="time">周二 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95070">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.19</span>
                                            <span className="time">周三 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95071">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.20</span>
                                            <span className="time">周四 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95072">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.21</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95073">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.22</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95075">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.22</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95074">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.23</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95076">
                                            <span>北京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>世纪剧院</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.28</span>
                                            <span className="time">周五 19:45</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="93188">
                                            <span>西安站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>别克·陕西大剧院-歌剧厅</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.29</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="93189">
                                            <span>西安站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>别克·陕西大剧院-歌剧厅</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.29</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="93190">
                                            <span>西安站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>别克·陕西大剧院-歌剧厅</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">6.30</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="93191">
                                            <span>西安站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>别克·陕西大剧院-歌剧厅</span>
                                        </div>
                                    </li>
                                    <li className="item  overdue">
                                        <div className="item-left">
                                            <span className="day">7.5</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95936">
                                            <span>南京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>江苏广电荔枝大剧院</span>
                                        </div>
                                    </li>
                                    <li className="item active ">
                                        <div className="item-left">
                                            <span className="day">7.6</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95937">
                                            <span>南京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>江苏广电荔枝大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="95937">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.6</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95938">
                                            <span>南京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>江苏广电荔枝大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="95938">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.7</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="95939">
                                            <span>南京站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>江苏广电荔枝大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="95939">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.12</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94871">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94871">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.13</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94873">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94873">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.13</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94874">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94874">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.14</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94875">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94875">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.14</span>
                                            <span className="time">周日 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96624">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96624">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.16</span>
                                            <span className="time">周二 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96625">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96625">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.17</span>
                                            <span className="time">周三 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96626">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96626">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.18</span>
                                            <span className="time">周四 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96628">
                                            <span>深圳站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96628">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.24</span>
                                            <span className="time">周三 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94787">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94787">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.25</span>
                                            <span className="time">周四 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96548">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96548">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.26</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94788">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94788">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.27</span>
                                            <span className="time">周六 14:00</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94789">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94789">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.27</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96549">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96549">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">7.28</span>
                                            <span className="time">周日 14:00</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="96550">
                                            <span>苏州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>苏州文化艺术中心大剧院</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="96550">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.2</span>
                                            <span className="time">周五 19:00</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="100590">
                                            <span>广州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>广州白云国际会议中心 世纪大会堂</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="100590">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.2</span>
                                            <span className="time">周五 20:00</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="100138">
                                            <span>广州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>广州白云国际会议中心</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="100138">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.3</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="101341">
                                            <span>广州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>广州白云国际会议中心</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="101341">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.3</span>
                                            <span className="time">周六 20:00</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="101342">
                                            <span>广州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>广州白云国际会议中心</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="101342">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.4</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="102783">
                                            <span>广州站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>广州白云国际会议中心</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="102783">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.9</span>
                                            <span className="time">周五 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94825">
                                            <span>香港站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>香港文化中心 (大剧院)</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94825">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.10</span>
                                            <span className="time">周六 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94831">
                                            <span>香港站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>香港文化中心 (大剧院)</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94831">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.10</span>
                                            <span className="time">周六 19:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94832">
                                            <span>香港站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>香港文化中心 (大剧院)</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94832">购票</div>
                                    </li>
                                    <li className="item  ">
                                        <div className="item-left">
                                            <span className="day">8.11</span>
                                            <span className="time">周日 14:30</span>
                                        </div>
                                        <div className="item-center">
                                            <div className="dot"></div>
                                        </div>
                                        <div className="item-right js-buy-ticket" id="94833">
                                            <span>香港站</span>
                                            <span className="locate"><i className="icon icon-map-marker"></i>香港文化中心 (大剧院)</span>
                                        </div>
                                        <div className="buy-btn btn btn-default" id="94833">购票</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{height:"8vh"}}></div>
                </Lmodetail>
            </Fragment>
        )

    }


    infoClick() {
        this.props.history.push('/info')
    }
}
export default withRouter(One);
//export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象

