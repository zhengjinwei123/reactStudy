import * as actionTypes from '../constants/userInfo';

const initialState = {};

export default function userinfo(state = initialState,action){
    switch (action.type){
        case actionTypes.USERINFO_UPDATE://用户信息修改
            return action.data;
            break;
        case actionTypes.USERINFO_ADD: // 用户注册
            return action.data;
            break;
        default:
            return state;
    }
}