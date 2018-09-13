/**
 * Created by ex-wangxin on 2018/5/29.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './App'

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('app')
    );
};
renderDom(App);