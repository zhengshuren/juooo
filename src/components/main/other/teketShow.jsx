import React,{Fragment,PureComponent} from "react";
import TicketList from './showInfo'
import {Title} from './../news/newshead.js'
import {TabList} from './other.js'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import leftjiantou from "@/assets/leftjiantou.png"
import { withRouter } from "react-router-dom";

class TeketShow extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            dataList : [],
            params : {category: 0, city_id: 0, version: '5.1.4', referer: 2},
            url : '/apis/Search/getShowList',
            index : 0
        }
        // console.log(this.props.location.state.index);
    }
    render () {

        return (
            <Fragment>
                {
                    this.props.location.state ? '' : 
                    <Title>
                        <div className="head_nav" style={{position:"relative"}}>
                            <img alt="" src={leftjiantou} style={{position:"absolute",left:"10px",top:"10px"}} onClick={this.back.bind(this)}/>
                            <h3 className="heads">演出</h3>
                        </div> 
                    </Title>
                }
                <TabList>
                <div id="swiperTab">
                    <div className="swiper-wrapper">
                        {
                            this.state.dataList.map((item, index) => (
                                <div key={index} className="swiper-slide" style={{ fontSize: '1rem', fontWeight: 400, textAlign: 'center'}} onClick={this.handleTab.bind(this, index)}>{item.name}</div>
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
        this.setState({params:temp});
        for (let i = 0; i < document.getElementsByClassName('swiper-slide').length; i++) {
            document.getElementsByClassName('swiper-slide')[i].style.color = '#000';
            document.getElementsByClassName('swiper-slide')[i].style.borderBottom = 'none'
          }
        document.getElementsByClassName('swiper-slide')[index].style.color='#ff6743';
        document.getElementsByClassName('swiper-slide')[index].style.borderBottom = '1px solid #ff6743'
        // e.target.style.color='oranged'
    }
    componentDidMount () {
        this.showAll();
    }
    showAll () {
        axios({
            method: 'get',
            url: '/apis/Search/getShowCategory',
            params: {
                version: '5.1.4',
                referer: 2
            }
        }).then((res)=>{
            // console.log(res.data.data.show_category_list);
            this.setState({dataList : res.data.data.show_category_list}, () =>{
                if (this.props.location.search) {
                   this.handleTab(this.props.location.search.split('?')[1])
                }
            })
            this.mySwiper = new Swiper('#swiperTab', {
                slidesPerView: 5
            });
        })
    }

    back(){
        this.props.history.goBack();
    }
}
export default withRouter(TeketShow)
