import React from 'react';
import { render } from 'react-dom';

import './static/css/common.less';

import  Todo from './containers/Todo/index.jsx';

import Perf from 'react-addons-perf';
if(__DEV__){
    window.Perf = Perf;
}

render(
    <Todo />,
    document.getElementById('root')
);