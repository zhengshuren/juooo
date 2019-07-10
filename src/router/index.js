import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";

import Info from "@/components/main/info/info"
import News from "@/components/main/news/news"
import Test from "@/components/main/test/test"
import One from "@/components/main/one/one"
import Show from '@/components/main/show/show'
import Search from "@/components/main/info/searchmain/searchmain1.jsx"
import TeketShow from "@/components/main/other/teketShow"
import Login from "@/components/main/test/login"
import Orangecard from "@/components/main/info/orangecard/orangecard.jsx"
import City from "@/components/main/info/city/city.jsx"
import Theatershow from "@/components/main/news/theatershow/theatershow.jsx"
import ChengPlusShow from "@/components/main/other/chengPlusShow"
import JifenshangchengShow from "@/components/main/other/jifenshangchengShow"
import JutehuiShow from "@/components/main/other/jutehuiShow"
import RiliShow from "@/components/main/other/riliShow"
import Lmodetail from "@/components/main/info/lmodetail/lmodetail.jsx"
import Myinfo from "@/components/main/test/myinfo/myinfo.jsx"
import Wodetehui from "@/components/main/other/wodetehui"
import Zhuan from "@/components/main/other/zhuan"
import MoreTourShowList from '@/components/main/show/aroundShow'


export default class extends Component{
    render(){
        return (
            <Fragment>
                    <Switch>
                        <Route path="/info" component={Info} />
                        <Route path="/theatre"  component={News} />
                        <Route path="/myjuooo"  component={Test} />
                        <Route path="/eticket"  component={One} />
                        <Route path="/show" component={Show} />
                        <Route path="/search"  component={Search} />
                        <Route path="/teketShow"  component={TeketShow} />
                        <Route path="/login"  component={Login} />
                        <Route path="/orangecard"  component={Orangecard} />
                        <Route path="/city"  component={City} />
                        <Route path="/theatershow"  component={Theatershow} />
                        <Route path="/chengPlusShow"  component={ChengPlusShow} />
                        <Route path="/jifenshangchengShow"  component={JifenshangchengShow} />
                        <Route path="/jutehuiShow"  component={JutehuiShow} />
                        <Route path="/riliShow"  component={RiliShow} />
                        <Route path="/lmodetail"  component={Lmodetail} />
                        <Route path="/myinfo"  component={Myinfo} />
                        <Route path="/wodetehui"  component={Wodetehui} />
                        <Route path="/zhuan"  component={Zhuan} />
                        <Route path="/moreTourShowList"  component={MoreTourShowList} />

                        {/* exact绝对匹配 */}
                        {/* <Route path="/Test/:name/:id" exact component={Test} /> */}
                        <Redirect path="/" to="/info"/>
                    </Switch>
            </Fragment>
        )
    }
}