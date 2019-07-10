import React,{Fragment,PureComponent} from "react";
import TicketList from './showInfo'
import {Title} from './../news/newshead.js'
import {TabList} from './other.js'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import leftjiantou from "@/assets/leftjiantou.png"
import { withRouter } from "react-router-dom";


class Calendar extends PureComponent {
    constructor (props) {
        super();
        this.state = {
            dataList : [],
            params : {category: 0, city_id: 0, version: '5.1.4', referer: 2},
            url : '/apis/Search/getShowList',
            index : 0
        }
    }
    render () {
        return (
            <Fragment>
                 {
                    this.props.location.state ? '' : 
                    <Title>
                        <div className="head_nav" style={{position:"relative"}}>
                            <img alt="" src={leftjiantou} style={{position:"absolute",left:"10px",top:"10px"}} onClick={this.back.bind(this)}/>
                            <h3 className="heads">演出日历</h3>
                        </div> 
                    </Title>
                }
                <TabList>
                <div id="swiperTab">
                    <div className="swiper-wrapper">
                        {
                            this.state.dataList.map((item, index) => (
                                <div key={index} className="swiper-slide" style={{width:' 12px', fontSize: '1.1rem', fontWeight: 400}} onClick={this.handleTab.bind(this, index)}>{item.name}</div>
                            ))
                        }
                    </div>
                </div>    
                </TabList>
                <TicketList params={this.state.params}  url={this.state.url} />
            </Fragment>
        )
    }
    handleTab (index) {
        // console.log(this.state.dataList[index].category_id);
        let temp = {
            category: this.state.dataList[index].category_id,
            city_id: 0,
            version: '5.1.4',
            referer: 2
        }
        console.log(temp);
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
            console.log(res.data.data.show_category_list);
            this.setState({dataList : res.data.data.show_category_list})
            // callBack(res.data.data.list);
            this.mySwiper = new Swiper('#swiperTab', {
                
            });
        })
    }
}
export default withRouter(Calendar)

