import React, { Fragment, Component } from "react";
import Updata from './swiperupdate'
import {Title} from './js/show'
import zuojiantou from "@/assets/leftjiantou.png"
import dian from "@/assets/dian.png"
import { withRouter } from "react-router-dom";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: [],

        }
    }

    render() {
        return (
            <Fragment>
                <Title>
                    <div className="head">
                        <img alt="" className="headImg1" src={zuojiantou} onClick={this.back.bind(this)} />
                        <span className="headSpan">积分商城</span>
                        <img className="headImg2" src={dian} alt="" />
                    </div>
                </Title>

                <Updata></Updata>
            </Fragment>
        )

    }
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
        }, 1000);
    }
    componentDidMount() {
    }
    back() {
        this.props.history.goBack();
    }
}


export default withRouter(Show);
