import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import {configureStore} from './store/configureStore';

import './static/styles/common.less';
import './static/fontaswesome/css/font-awesome.min.css';

const Store = configureStore();
import RouteMap from './router/routerMap';

render(
    <Provider store={ Store }>
        <RouteMap history={ hashHistory }/>
    </Provider>,
    document.getElementById('root')
);

