import React, { Fragment, PureComponent } from "react";
import {WhiteSpace, WingBlank,Modal,List} from 'antd-mobile';
import { Main } from './js/show'
import img6 from '@/assets/jiantou.png'
import img7 from '@/assets/ej.png'
import axios from "axios"
import _ from 'lodash'
import { withRouter } from "react-router-dom";
import { loadListDataAsyanc } from "./actionCreator"
import { connect } from "react-redux"

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Show extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // 上面的信息
            showInfo: [],
            // 城市信息
            cityInfo: [],
            cityData: [],
            picList: [],
            city: '1',
            bool: true,
            style: { overflow: 'hidden', height: '40rem' },
            modal2: false,
            index: 0,
            animating: true,
        }
    }
    render() {
        let info = this.state.showInfo.scheInfo;
        if (!_.isEmpty(info)) {
            return (
                <Fragment>
                    <WingBlank>
               
                        <Main>
                            {/* 入场*/}
                            <div className="schedule-discount detail__schedule-discount">
                                <div>
                                    <div className="schedule-discount-item">
                                        <span className="schedule-discount-item__name">
                                            入场:
                                </span>
                                        <span className="schedule-discount-item__content">
                                            <div className="enter">
                                                {this.state.showInfo.scheInfo.tips}
                                            </div>
                                        </span>
                                    </div>
                                    <div className="divider">
                                    </div>
                                    <div>
                                        <div className="schedule-discount-item support">
                                            <span className="schedule-discount-item__name">
                                                支持:
                                </span>
                                            <span className="schedule-discount-item__content">
                                                <span className="support__list">
                                                    {
                                                        this.state.showInfo.supportType.map((item, index) => (
                                                            <span className="support__list__item" key={index}>
                                                                <span className="support__list__item__text">
                                                                    {item}
                                                                </span>

                                                                {
                                                                    index !== 2 ? <span className="support__list__item__divider"></span> : ''||  index !== 0 ? <span className="support__list__item__divider"></span> : ''
                                                                }
                                                            </span>
                                                        ))
                                                    }
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* 巡演城市 */}
                            <div className="tour-cities detail__tour-cities">
                                <div className="tour-cities__desc">
                                    <span className="tour-cities__desc__title">巡演城市</span>
                                    <span className="tour-cities__desc__count">
                                        <span className="tour-cities__desc__count__num">{this.state.cityData.showtotal}场</span>
                                        <img alt="" src={img6}></img>
                                    </span>
                                </div>
                                <div className="tour-cities__list">
                                    <div className="tour-cities__list__content">
                                        {
                                            this.state.cityInfo.map((item, index) => (
                                                <div className="tour-cities__list__content__item tour-cities__list__content__first-child tour-cities__list__content__item--actived" key={index} onClick={this.sel.bind(this, index)}>
                                                    <div className="tour-cities__list__content__item__city tour-cities__list__content__item__city--actived">
                                                        {item.city_name}
                                                    </div>
                                                    <div className="tour-cities__list__content__item__date ">
                                                        {item.date}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* 演出介绍 */}
                            <div className="intro detail__intro" style={this.state.style}>
                                <div className="intro__title">
                                    演出介绍
                                </div>
                                <div className="intro__content">
                                    <p dangerouslySetInnerHTML={{ __html: this.state.showInfo.scheInfo.schedular_desc }}></p>
                                </div>
                                <div className="intro__mask" onClick={this.all.bind(this)} style={{ display: this.state.bool ? 'block' : 'none' }}>展示全部</div>
                                <div className="intro__more" style={{ display: this.state.bool ? 'block' : 'none' }}>

                                </div>
                            </div>

                            {/* 温馨提示 */}
                            <div className="tips detail__tips">
                                <div className="tips__title">
                                    <span className="tips__title__text">温馨提示</span>
                                    <span className="pic">
                                        <img src={img6} alt="" onClick={this.showModal('modal2')}></img>
                                    </span>
                                </div>
                                <div className="tips__list">

                                    {
                                        this.state.showInfo.notice.map((item, index) => (
                                            <span className="tips__list__item" key={index}>
                                                <span className="tips__list__item__dot"></span>
                                                <span className="tips__list__item__text">{item.title}</span>
                                            </span>
                                        ))
                                    }


                                </div>
                            </div>

                            {/* 底部相关 */}
                            <div className="recommend detail__recommend">
                                <div className="recommend__title">相关推荐</div>
                                {
                                    this.state.picList.map((item, index) => (
                                        <div className="recommend__list" key={index} onClick={this.toShow.bind(this, item.url)}>
                                            <div className="item">
                                                <div className="cover item__cover">
                                                    <img src={item.pic} alt=""></img>
                                                </div>
                                                <div className="item__info">
                                                    <div className="item__info__date-week">
                                                        <span className="item__info__date-week__date">{item.show_time_top}</span>
                                                        <span className="item__info__date-week__week">{item.show_time_bottom}</span>
                                                    </div>
                                                    <div className="item__info__name">
                                                        <div className="item__info__name__content text-double">
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                    <div className="item__info__place">
                                                        {item.city_name} | {item.venue_name}
                                                    </div>
                                                    <div className="item__info__price">
                                                        <span className="item__info__price__num">￥{item.min_price}</span>
                                                        <span className="item__info__price__text">起</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="recommend__more" onClick={this.more.bind(this)}>查看更多演出</div>
                            </div>

                            {/* 选座购买 */}
                            <div className="bottom-bar detail__bottom-bar">

                                <div className="bottom-bar__client-service">
                                    <img src={img7} alt=""></img>
                                    <div className="bottom-bar__client-service__text">客服</div>
                                </div>
                                <div className="bottom-bar__btn">选座购买</div>
                            </div>
                  
                        </Main>
                        <WhiteSpace />
                        <Modal
                            popup
                            visible={this.state.modal2}
                            onClose={this.onClose('modal2')}
                            animationType="slide-up"
                        >
                            <List renderHeader={() => <div style={{paddingTop:'.4rem',paddingRight:'.94rem',fontSize:'1.2rem',fontWeight:'800',color:'#000',textAlign:'left'}}>温馨提示</div>} className="popup-list" style={{
                                    height: '29rem'
                            }}>
                                {this.state.showInfo.notice.map((i, index) => (
                                    <List.Item key={index}
                                    >
                                        <div style={{
                                                
                                                fontSize: '.88rem',
                                                height: '.88rem',
                                                lineHeight: '.88rem',
                                                marginTop: '1.25rem'
                                        }}>
                                            {i.title}
                                        </div>
                                        <div  style={{
                                                marginTop: '.7rem',
                                                fontSize: '.32rem',
                                                marginLeft: '2rem',
                                                marginRight: '.94rem',
                                                color: '#666',
                                                
                                               
                                        }}>
                                            <p style={{
                                                wordWrap: 'break-word !important'
                                            }}>{i.desc}</p>
                                        </div>
                                    </List.Item>

                                ))}
                                
                            </List>
                        </Modal>
                    </WingBlank>
                    );
                </Fragment>
            )
        } else {
            return null
        }
    }

    componentDidMount() {
        this.showInfo();
    }
    componentWillReceiveProps (newprop) {
        // console.log(newprop);
        this.showInfo(newprop);
        
    }
    showModal = key => (e) => {
        e.preventDefault();
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    sel(index) {
        // console.log(this.state.cityInfo);
        this.props.handleTest(this.state.cityInfo[index]);
        let temp = document.getElementsByClassName('tour-cities__list__content__item--actived');
        // let sizeColor = document.getElementsByClassName()
        for (let i = 0; i < temp.length; i++) {
            temp[i].style.border = '.065rem solid #e5e5e5';
        }
        temp[index].style.border='.065rem solid #ff6743';
     
    }

    more(){      
        axios({
            method: 'get',
            url: '/apis/Search/getShowCategory',
            params: {
                version: '5.1.4',
                referer: 2
            }
        }).then((res)=>{
          
            let temp = res.data.data.show_category_list;
           
           for (let i = 0; i < temp.length; i++) {
               if (temp[i].category_id === this.state.showInfo.scheInfo.cate_parent_id) {
                return this.props.history.push('/teketShow?' + i);
               }
               
           }
        })
 

    }
    all(e) {
        let style = {}
        this.setState({ style, bool: false })
    }
    toShow(item) {
        // this.props.history.push('/show?' + item.split("ticket/")[1])
        let arr = []
        if (item) {
            arr = item.split("ticket/")
        }
        console.log(item)
        axios({
            method: 'get',
            url: '/apis/restTicket/getSchDetail',
            params: {
                sch_id: arr[1],
                version: '5.1.4',
                referer: '2',
                current_url: 'https://m.juooo.com/ticket/' + arr[1]
            }
        }).then((res) => {
            let showInfo = res.data.data
            console.log(res);
            this.setState({ showInfo }, () => {
                this.showCity(this.state.showInfo.scheInfo)
                this.showPic(this.state.showInfo.scheInfo)
            })
        });
    }

    // 演出详情
    showInfo(newprop) {
        let id = '';
        if (newprop) {
            newprop.cityInfo.map((value, key) => {
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
            this.setState({ showInfo , city : showInfo.scheInfo.city_id}, () => {
                this.showCity(this.state.showInfo.scheInfo)
                this.showPic(this.state.showInfo.scheInfo)
            })
        });
       
    }

    // 巡演城市
    showCity(showInfo) {
  
        axios({
            method: 'get',
            url: '/apis/restTicket/getTour',
            params: {
                show_id: showInfo.show_id,
                version: '5.1.4',
                referer: '2',
                venue_id: showInfo.venue_id
            }
        }).then((res) => {
            let cityInfo = res.data.data.tourlist
            let cityData = res.data.data
            this.setState({ cityInfo, cityData, city: res.data.data.tourlist.id })
        });

    }

    // 相关推荐
    showPic(showInfo) {
        axios({
            method: 'get',
            url: '/apis/Search/getShowList',
            params: {
                city_id: this.state.city,
                version: '5.1.4',
                referer: '2',
                category: showInfo.cate_parent_id
            }
        }).then((res) => {
            let picList = res.data.data.list.slice(1, 4)
            this.setState({ picList }, () => {

            })

        });
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
    handleTest(cityInfo) {
        // console.log(cityInfo);
        dispatch(loadListDataAsyanc(dispatch, cityInfo))
    }
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Show));
