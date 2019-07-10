import React, { Fragment, PureComponent } from "react";
import { Head } from "./js/show"
import img1 from '@/assets/zuojiantou.png'
import img2 from '@/assets/aixin.png'
import img3 from '@/assets/house.png'
import img4 from '@/assets/v.png'
import img5 from '@/assets/dingwei.png'
import img6 from '@/assets/jiantou.png'
import axios from "axios"
import _ from 'lodash'
// import { loadListDataAsyanc } from "./actionCreator"
import { connect } from "react-redux"

import { withRouter } from "react-router-dom";
class Show extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: {}
        }
    }

    render() {
        let info = this.state.showInfo.scheInfo;
        if (!_.isEmpty(info)) {
            return (
                <Fragment>
                    <Head>
                        {/*  演出详情*/}
                        <div className="brief__primary">
                            <img src={this.state.showInfo.scheInfo.pic} className="brief__primary__bg" alt=""></img>
                            <div className="brief__primary__mask"></div>
                            <div className="brief__primary__fg">
                                <div className="brief__primary__fg__title">
                                    <span className="brief__primary__fg__title__text">演出详情</span>
                                    <span className="brief__primary__fg__title__back">
                                        <img src={img1} alt="" onClick={this.goBack.bind(this)}></img>
                                    </span>
                                    <span className="brief__primary__fg__title__like">
                                        <img src={img2} alt=""></img>
                                    </span>
                                    <span className="brief__primary__fg__title__home">
                                        <img src={img3} alt=""></img>
                                    </span>
                                </div>
                                <div className="brief__primary__fg__content">
                                    <div className="cover brief__primary__fg__content__cover">
                                        <img src={this.state.showInfo.scheInfo.pic} alt=""></img>
                                    </div>
                                    <div className="brief__primary__fg__content__info">
                                        <div className="brief__primary__fg__content__info__name">
                                            {this.state.showInfo.scheInfo.schedular_name}
                                        </div>
                                        <div className="brief__primary__fg__content__info__price">
                                            <span className="brief__primary__fg__content__info__price__range">
                                                ￥{this.state.showInfo.scheInfo.price_interval}
                                            </span>
                                            <span className="brief__primary__fg__content__info__price__type">
                                                <span className="brief__primary__fg__content__info__price__type__plus">
                                                    <img src={img4} alt=""></img>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 演出时间和地点 */}
                        <div className="brief__secondary">
                            <div className="brief__secondary__info">
                                <div className="brief__secondary__info__date-time">
                                    <span className="brief__secondary__info__date-time__date">
                                        {this.state.showInfo.scheInfo.time_interval_data.day}
                                    </span>
                                    <span className="brief__secondary__info__date-time__time">
                                        {this.state.showInfo.scheInfo.time_interval_data.hour}
                                    </span>
                                </div>
                                <div className="brief__secondary__info__place">
                                    {this.state.showInfo.scheInfo.city_name} | {this.state.showInfo.scheInfo.venue_name}
                                </div>
                            </div>
                            <div className="brief__secondary__pointer">
                                <img alt="" src={img5}></img>
                            </div>
                        </div>
                        <div className="card-plus-tips detail__card-tips">

                            <div className="base-tips">
                                <div className="base-tips__info">
                                    <span className="base-tips__info__name">
                                        专享5折起 最高可省￥165
                                    </span>
                                    <span className="base-tips__info__arrow">
                                        <img alt=""  src={img6}></img>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </Head>
                </Fragment>
            )
        } else {
            return null
        }
    }

    componentWillReceiveProps (newprops) {
        this.showInfo(newprops);
    }

    componentDidMount() {
        this.showInfo()

    }
    goBack(){
         this.props.history.goBack()
    }
    showInfo(newprops) {
        let id = '';
        if (newprops) {
            // id = this.props.cityInfo
            newprops.cityInfo.map((value, key) => {
                if (key === 'id') {
                    return id = value;
                }
            })
        }else if (this.props.item) {
            id = this.props.item.split("?")[1]
        }

        axios({
            method: 'get',
            url: '/apis/restTicket/getSchDetail',
            params: {
                sch_id: id,
                version: '5.1.4',
                referer: '2',
                current_url: 'https://m.juooo.com/ticket/' + id
            }
        }).then((res) => {
            let showInfo = res.data.data
            this.setState({ showInfo })

        });
    }

    back(){
        this.props.history.goBack();
    }
}
const mapStateToProps = (store) => {
    return {
        // listData:store.getIn(["infoReducer","listData"])
        cityInfo: store.getIn(['showReducer', 'cityInfo'])
    }
}
//里面必需返回一个对象
const mapDispathToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Show));
