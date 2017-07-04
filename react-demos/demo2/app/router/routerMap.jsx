import React from 'react';
import { Router , Route, IndexRouter } from 'react-router';

import App from '../containers';
import Home from '../containers/Home';
import Register from '../containers/Register';
import Login from '../containers/Login';

class RouterMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap;