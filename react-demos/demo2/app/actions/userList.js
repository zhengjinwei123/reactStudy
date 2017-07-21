import * as actionTypes from '../constants/userList';

export function update(data){
    return {
        type:actionTypes.USERLIST_UPDATE,
        data
    }
}

export function add(data){
    return {
        type:actionTypes.USERLIST_ADD,
        data
    }
}

export function rem(data){
    return {
        type:actionTypes.USERLIST_REM,
        data
    }
}