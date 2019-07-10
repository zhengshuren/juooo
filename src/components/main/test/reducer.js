/* eslint-disable default-case */
import {fromJS} from "immutable"
import {GET_LOGIN_INFO} from "./actionCreator"
const defaultStore=fromJS({
    logInfo:''
    
})
export default (state=defaultStore,action)=>{
    switch (action.type){
        case  GET_LOGIN_INFO :
            return state.set('logInfo', fromJS(action.res));
    }
    return state;
}