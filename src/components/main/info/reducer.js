/* eslint-disable default-case */
import {fromJS} from "immutable"
import {GET_INFO_SILD} from "./actionCreator"
const defaultStore=fromJS({
    listData:[],
    city: fromJS({id: 0, name: '全国', Abbreviation: ''})
})
export default (state=defaultStore,action)=>{
    switch (action.type){
        case  GET_INFO_SILD :
            return state.set('city', fromJS(action.res));
    }
    return state;
}