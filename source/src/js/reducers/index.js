/**
 * Created by ex-wangxin on 2018/5/30.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import list from './list';
import add from './add';
import speedTest from './speedTest';

const Index=combineReducers({
    list,
    add,
    speedTest,
    routing:routerReducer
});
export default Index;


