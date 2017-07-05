import * as actionTypes from '../constants/userList';

const initialState = [];

export function userlist(state = initialState,action){
    switch(action.type){
        case actionTypes.USERLIST_REM:
            return state.filter(item => {
                if(item.id !== action.data.id){
                    return item;
                }
            });
        case actionTypes.USERLIST_ADD:
            state.unshift(action.data);
            return state;
        case actionTypes.USERLIST_UPDATE:
            return action.data;
        default:
            return state;
    }
}