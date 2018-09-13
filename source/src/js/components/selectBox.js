/**
 * Created by ex-wangxin on 2018/7/5.
 */
/**
 * Created by ex-wangxin on 2018/6/28.
 */
import React from 'react';
class SelectBox extends React.PureComponent{

    //初始化生命周期方法
    componentDidMount(){
        //this.props.history.push('/list')
    }

    //组件卸载生命周期方法
    componentWillUnmount(){

    }

    optionsFun(){
        let list=this.props.list;
        console.log('111111111',list);
        return list.map((item,i)=>{
            return <option value={item.value}>{item.name}</option>;
        })
    }

    //select 改变事件
    inputFun=(e)=>{
        let obj={};
        obj[this.props.propsName]={name:'123',value:e.target.value};
        this.props.callback(obj);
    };

    render(){
        return (
            <select name="" id="" onChange={this.inputFun} >
                {this.optionsFun()}
            </select>
        )
    }
}
export default SelectBox;
