import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import zuojiantou from "@/assets/leftjiantou.png"
import dian from "@/assets/dian.png"
import { All } from "./js/jifenshangchengShow"
import TicketList from './scropList'


class JifenshangchengShow extends Component {
    constructor() {
        super();
        this.state = {
            params: [],
            
        }
    }

    render() {
        return (
            <Fragment>

                
                <All>
                    <div className="head">
                        <img alt="" className="headImg1" src={zuojiantou} onClick={this.back.bind(this)} />
                        <span className="headSpan">积分商城</span>
                        <img className="headImg2" src={dian} alt="" />
                    </div>
                    <div className="jifenmingxi">
                        <img alt="" className="jifenmingxiImg" src="https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/icon-adr.png" />
                        <span className="jifenmingxiText"> 8</span>
                        <span className="jifenmingxiTo">积分明细 ></span>
                    </div>
                    <div className="city">
                        <p className="cityP">城市 <img alt="" src="https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/down.png" /></p>
                        <p className="cityP">积分 <img alt="" src="https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/down.png" /></p>
                    </div>
                </All>
                <TicketList params={this.state.params} />
            </Fragment>
        )
    }

    componentDidMount() {
        this.setState({
            params: {
                type: 0,
                city: 0,
                page: 1
            }
        })
    }

    back() {
        this.props.history.goBack();
    }
}
export default withRouter(JifenshangchengShow);
