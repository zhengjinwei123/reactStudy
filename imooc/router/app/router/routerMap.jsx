import React from 'react';

import { Router,Route,IndexRoute } from 'react-router';

import App from '../containers/App.jsx';
import Home from '../containers/Home/index.jsx'
import List from '../containers/List/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import NotFound from '../containers/NotFound/index.jsx'

class RouteMap extends React.Component{
    updateHandler(){
        console.log('每次router变化之后会触发')
    }

    render(){
        return(
            <Router history={this.props.history} onUpdate={this.updateHandler.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="list" component={List}/>
                    <Route path="detail/:id" component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap;