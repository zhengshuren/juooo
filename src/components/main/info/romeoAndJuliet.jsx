import React, { Fragment, Component } from "react";
import axios from "axios"
import { withRouter  } from "react-router-dom";
import { connect } from "react-redux"

class One extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.list.map((item, index) => (
                        <img key={index} onClick={this.lmoshow.bind(this)} style={{ width: "90%", marginLeft: "20px" }} src={item.pic} alt="" />
                    ))
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.test();
    }

    test() {
        let city_id = 0;
        this.props.city.map((value, key) => {
            if (key === 'id') {
                return city_id = value;
            }
        })
        axios({
            method: 'get',
            url: '/apis/home/getAd',
            params: {
                city_id,
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            this.setState({
                list: res.data.data.advert1
            });
        })
    }
    lmoshow(){
        this.props.history.push('/lmodetail')
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
export default connect(mapStateToProps, mapDispathToProps)(withRouter(One));
