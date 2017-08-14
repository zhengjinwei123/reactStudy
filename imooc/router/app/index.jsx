import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import RouteMap from './router/routerMap.jsx';

import './static/css/common.less'

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
);