/**
 * Created by ex-wangxin on 2018/7/5.
 */
import React, {Component} from 'react';
import SelectBox from '../components/selectBox';

const HigtSelect = (SelectBox)=> {
    return class newHigtSelect extends React.Component {
        componentDidMount() {
            console.log('包装组件加载',this.props);
        }

        listFun() {
            let keyList=this.props.keyList;
            let newList=[],list=this.props.list;
            list.forEach((item,i)=>{ newList.push({name:item[keyList.name],value:item[keyList.value]})});
            console.log(newList);
            return newList;
        }

        callbackFun(obj) {
            console.log('包装组件加载改变事件触发');
            let newObj=this.props.list.find((item)=>obj[this.props.propsName].value == item.value);
            this.props.callback(newObj);
        }

        propsNameFun() {
            return this.props.propsName;
        }

        render() {
            return (<SelectBox
                list={this.listFun()}
                callback={(obj)=>this.callbackFun(obj)}
                propsName={this.propsNameFun()}
            />);
        }
    }
};
let NewHigtSelect=HigtSelect(SelectBox);
export default NewHigtSelect;
