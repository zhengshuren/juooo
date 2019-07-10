import React, { Fragment, Component } from "react";
import { Toast} from 'antd-mobile';
import Header from './show_head'
import Main from './show_main'
import axios from "axios"
 class Show extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showInfo:[],
         
        }
    }
    
    render () {
        return (
            <Fragment>
           
             <Header item={this.props.location.search}></Header>
             <Main item={this.props.location.search}></Main>
        
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
   
        this.showInfo()
   
      }
      
   
    showInfo(){
        Toast.loading('Loading...', 30, () => {
         
        });
        let url = this.props.location.search.split("?")[1]
        axios({
            method: 'get',
            url: '/apis/restTicket/getSchDetail',
            params: {
                sch_id: url,
                version: '5.1.4',
                referer: '2',
                current_url: 'https://m.juooo.com/ticket/' + url
            }
        }).then((res) => {
            Toast.hide();
                let showInfo=res.data.data
                console.log(res);
                
                this.setState({showInfo})
                
        });
      
    }
    
}


export default Show;
