import  { combineReducers } from 'redux';
import userinfo from './userInfo';
import userlist from './userlist';

export default combineReducers({
    userinfo,
    userlist
});