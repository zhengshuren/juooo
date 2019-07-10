import React, { Fragment, Component } from "react";

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { connect } from "react-redux"

import axios from "axios"

class SpliceImg extends Component {
    constructor () {
        super();
        this.state = {
            list : []
        }
    }
    
    render () {
        return (
            <Fragment>
                <div className="swiper-container" id="lunbo">
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <img style={{width:'100%'}} src={item.touch_image_url} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount () {
        this.test();
    }
    test () {
        let abbreviation = '';
        this.props.city.map((value, key) => {
            if (key === 'city') {
                return abbreviation = value;
            }
        })
        axios({
            method: 'get',
            url: '/apis/home/getSildeList',
            params: {
              abbreviation,
              limit : '',
              version : '5.1.4',
              referer : '2'
            }
        }).then((res)=>{
            let temp = res.data.data.silde_list;
            this.setState({
                list: temp
            });
            new Swiper ('#lunbo', {
                autoplay:1500,
                loop : true,
                pagination : '.swiper-pagination',
                paginationType : 'bullets',
            }); 
        })
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
export default connect(mapStateToProps, mapDispathToProps)(SpliceImg);
