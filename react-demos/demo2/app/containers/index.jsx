import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '../util/localStore';
import * as localStoreKey from '../config/localStoreKey';
import * as userInfoActions from '../actions/userinfo';
import * as userListActions from '../actions/userList';

class App extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){

    }
}