import React, { Fragment, Component } from "react";
import axios from "axios"
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"

const StringToHtml = styled.div`
li{
    box-shadow:0 0 10px 5px #f6f6f6;
    h4{
        margin:0;
        padding:0;
    }
    p{
        margin:0;
        padding:0;
        span{
            color:red
        }
    }
}
`

class OperationList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        }
    }

    render() {
        return (
            <Fragment>
                <StringToHtml>
                    <div style={{ margin: "20px auto", width: "100%", height: "202px" }}>
                        <ul style={{ height: "90px", margin: "0", padding: "0" }}>
                            {
                                this.state.list.slice(0, 2).map((item, index) => (
                                    <li key={index} style={{ backgroundColor: "white", marginLeft: "13px", listStyle: "none", width: "45%", height: "90px", float: "left", borderRadius: "8px", position: "relative" }} onClick={this.operationListPage.bind(this, item)}>
                                        <h4 style={{ marginLeft: "10%", marginTop: "23px" }}>{item.name}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: item.describe }} style={{ fontSize: "11px", marginTop: "10px", marginLeft: "10%" }}></p>
                                        <img src={item.pic} alt="" style={{ width: "30%", height: "58%", position: "absolute", right: "8%", top: "18%" }} />
                                    </li>
                                ))
                            }
                        </ul>
                        <ul style={{ height: "106px", padding: "0", marginTop: "8px" }}>
                            {
                                this.state.list.slice(2).map((item, index) => (
                                    <li key={index} style={{ marginLeft: "13px", textAlign: 'center', borderRadius: "8px", backgroundColor: "white", width: "29%", height: "106px", float: "left", listStyle: "none", position: "relative" }} onClick={this.operationListPage.bind(this, item)}>
                                        <h4 style={{ marginTop: "20px" }}>{item.name}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: item.describe }} style={{ fontSize: "11px", marginTop: "10px" }}></p>
                                        <img src={item.pic} alt="" style={{ width: "39px", height: "39px", position: "absolute", right: "35%", bottom: "8px" }} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </StringToHtml>
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
                list: res.data.data.operation_list
            });
            // console.log(res.data.data.operation_list);
        })
    }
    operationListPage(item) {
        switch (item.name) {
            case "橙PLUS卡":
                return this.props.history.push("/chengPlusShow");
            case "积分商城":
                return this.props.history.push("/jifenshangchengShow");
            case "聚特惠":
                return this.props.history.push("/jutehuiShow");
            case "日历":
                return this.props.history.push("/riliShow");
            case "欢聚橙卡":
                return this.props.history.push("/orangecard");
            default: return null;
        }
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
export default connect(mapStateToProps, mapDispathToProps)(withRouter(OperationList));
