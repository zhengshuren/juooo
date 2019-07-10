/* eslint-disable default-case */
import {fromJS} from "immutable"
import {GET_CITY_LIST} from "./actionCreator"
const defaultStore=fromJS({
    cityInfo:[],
})
export default (state=defaultStore,action)=>{
    switch (action.type){
        case  GET_CITY_LIST :
            return state.set('cityInfo', fromJS(action.res));
    }
    return state;
}