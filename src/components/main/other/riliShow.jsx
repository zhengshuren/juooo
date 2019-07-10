import React,{Fragment,PureComponent} from "react";
import TicketList from './showInfo'
import {Title} from './../news/newshead.js'
import {TabList} from './other.js'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import leftjiantou from "@/assets/leftjiantou.png"
import { All } from "./js/riliShow"
import { withRouter } from "react-router-dom";

class Rili extends PureComponent {
    constructor() {
        super();
        this.state = {
            dateList:[],
            year: 2019,
            mouth:8,
            params : {category: 0, city_id: 0, version: '5.1.4', referer: 2, start_time: '2019/7/6'},
            url : '/apis/Search/getShowList',
            index : 0,
            tabList: []
        }
    }

    render() {
        return (
            <Fragment>
                <Title>
                    <div className="head_nav" style={{position:"relative"}}>
                        <img alt="" src={leftjiantou} style={{position:"absolute",left:"10px",top:"10px"}} onClick={this.back.bind(this)}/>
                        <h3 className="heads">演出日历</h3>
                    </div> 
                </Title>
                <TabList>
                    <div id="swiperTab">
                        <div className="swiper-wrapper">
                            {
                                this.state.tabList.map((item, index) => (
                                    <div key={index} className="swiper-slide" style={{width:' 12px', fontSize: '1.1rem', fontWeight: 400}} onClick={this.handleTab.bind(this, index)}>{item.name}</div>
                                ))
                            }
                        </div>
                    </div>    
                </TabList>
                <TicketList params={this.state.params}  url={this.state.url}>
                <All>
                    <div className="calendar_com">
                        <section className="wh_container">
                            <div className="wh_content_all">
                                <div className="wh_top_changge">
                                    <li>
                                        <div className="wh_jiantou1" onClick={this.left.bind(this)}></div>
                                    </li>
                                    <li className="wh_content_li">
                                        <span className="year">{this.state.year}</span>年<span className="mouth">{this.state.mouth}</span>月
                                    </li>
                                    <li>
                                        <div className="wh_jiantou2" onClick={this.right.bind(this)}></div>
                                    </li>
                                </div>

                            </div>
                            <div className="wh_content">
                                <div className="wh_content_item">
                                    <div className="wh_top_tag" style={{color: '#ff6743'}}>
                                        日
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag">
                                        一
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag">
                                        二
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag">
                                        三
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag">
                                        四
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag">
                                        五
                                    </div>
                                </div>
                                <div className="wh_content_item">
                                    <div className="wh_top_tag" style={{color: '#ff6743'}}>
                                        六
                                    </div>
                                </div>
                            </div>
                            <div className="wh_content1">
                             {
                                 this.state.dateList.map((item,index)=>(
                                    <div className="wh_content_item1" key={index}>
                                    <div className="wh_item_date wh_other_dayhide wh_chose_day" onClick={this.day.bind(this,index)}>
                                        {item.day}
                                    </div>
                                </div>
                                 ))
                             }
                            </div>
                        </section>
                    </div>
                </All>
                </TicketList>
            </Fragment>
        )
    }
    handleTab (index) {
        // console.log(this.state.dataList[index].category_id);
        let temp = {
            category: this.state.tabList[index].category_id,
            city_id: 0,
            version: '5.1.4',
            referer: 2,
            start_time: '2019/7/6'
        }
        this.setState({params:temp})
    }
    componentDidMount () {
        axios({
            method: 'get',
            url: '/apis/Search/getShowCategory',
            params: {
                version: '5.1.4',
                referer: 2
            }
        }).then((res)=>{
            // console.log(res.data.data.show_category_list);
            this.Rili()
            this.setState({tabList : res.data.data.show_category_list})
            // callBack(res.data.data.list);
            this.mySwiper = new Swiper('#swiperTab', {
                
            });
        })
    }
    left(){
        console.log('ok');
        
        if(this.state.mouth <= 1){
         
          this.setState({year: this.state.year - 1, mouth : 12})
        } else {
           
            this.setState({mouth: this.state.mouth - 1})
        }
    }
    right(){
        if(this.state.mouth>=1){
            this.setState({mouth: this.state.mouth+1})
            if(this.state.mouth>=12){
              return  this.setState({year: this.state.year+1,mouth:1})
            }
        }
        
    }
    day(index){
        let temp = document.getElementsByClassName('wh_chose_day');
        for (let i = 0; i < temp.length; i++) {
            temp[i].style.backgroundColor='';
        }
        
        temp[index].style.backgroundColor='hsla(20,96%,78%,.5)';
    }
    
    Rili() {
        axios({
            method: 'get',
            url: '/apis/Search/getCalendar',
            params: {
                year: '2019',
                month: '7',
                city: '0',
                category: '0',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            let dateList=res.data.data.calendar
            this.setState({dateList})
        });
    }

    back() {
        this.props.history.goBack();
    }
}
export default withRouter(Rili);
