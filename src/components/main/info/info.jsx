import React, { Fragment, Component } from "react";
import { connect } from "react-redux"
import { loadListDataAsyanc } from "./actionCreator"
import TicketList from './ticketList'
import { withRouter } from "react-router-dom";
import FiveTab from './fiveTab'
import RomeoAndJuliet from './romeoAndJuliet'
import OperationList from './operationList'
import Search1 from './search.jsx'
import Search2 from './search1.jsx'
import HotList from './hotList'
import Observer from "@/Observer"
import Swiper from "@/components/layout/swiper/swiper"

class Info extends Component {
    constructor(props){
        super(props);
        this.state={
            sceoll:false
        }
    }
    render() {
        // console.log(this.props.city.get("name"))
        // console.log(this.state.sceoll)
        return (
            <Fragment>
                {this.state.sceoll === true?<Search2/>:<Search1/>}
                <TicketList params={{
                    cityAdd: '',
                    version: '5.1.4',
                    referer: 2
                }} show={true} url={'/apis/home/getRecommendShow'}>

                    <Swiper />
                    <FiveTab />
                    <RomeoAndJuliet />
                    <OperationList />
                    <HotList />

                </TicketList >


            </Fragment>
        )
    }
    componentDidMount() {
        
        Observer.$on("setHeaderBar",(bool)=>{
            this.setState({
                sceoll : bool
            })
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
    handleTest() {
        dispatch(loadListDataAsyanc(dispatch))
    }
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Info));
// 解决dispatch可以传入一个函数