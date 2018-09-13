/**
 * Created by ex-wangxin on 2018/5/29.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Router, Route, browserHistory, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {createBrowserHistory} from 'history';

import App from './containers/app';
import Index from './reducers/index';
import List from './containers/list';
import add from './containers/add';

require('./untils/ajax');

//redux 传入中间件
const store = createStore(Index, compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
//路由生成规则, 与 redux 结合.
const history = syncHistoryWithStore(createBrowserHistory(), store);
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/list' component={List}/>
                <Route path='/add' component={add}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);