import React, { Fragment, Component } from "react";
import axios from "axios"
import { withRouter  } from "react-router-dom";
import { connect } from "react-redux"

class FiveTab extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <ul style={{ margin: "0", padding: "0", height: "100px" }}>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index} style={{ width: "20%", listStyle: "none", float: "left", textAlign: "center" }} onClick={this.toTab.bind(this, index)}>
                                <img src={item.pic} alt='' style={{ width: "51px", height: "51px" }} />
                                <p style={{ margin: "0", padding: "0", textAlign: "center" }}>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
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
            url: '/apis/home/getClassifyItem',
            params: {
                city_id: city_id,
                operation_limit: '5',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            this.setState({
                list: res.data.data.classify_list
            });
        })
        // axios({
        //     method: 'get',
        //     url: '/api/login',
        // }).then((res) => {
        //     console.log(res)
        // })
        // axios({
        //     method: 'get',
        //     url: '/test/data.json',
        // }).then((res) => {
        //     console.log(res)
        // })
    }

    toTab (index) {
        this.props.history.push('/teketShow?' + index);
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
export default connect(mapStateToProps, mapDispathToProps)(withRouter(FiveTab));

