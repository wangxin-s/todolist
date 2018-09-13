/**
 * Created by ex-wangxin on 2018/6/4.
 */
import React from 'react';
import {connect} from 'react-redux';//连接store 和 ui 组件 组成新的组件
import {addHandle,addInfo} from '../actions/add';
import {listHandle} from '../actions/list';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import {withRouter} from "react-router-dom";

class addMain extends React.Component{

    //初始化生命周期方法
    componentDidMount(){
        //this.props.history.push('/list')
    }

    //组件卸载生命周期方法
    componentWillUnmount(){

    }

    inputFun(propsName,event){
        let obj={};
        obj[propsName]=event.target.value;
        this.props._addHandle(obj);
    }

    btnFun(type){
        if(type){
            let list=this.props.list.list;
            let add=this.props.add;
            let index=add.index;
            console.log(index);
            let options={
                data:{
                    title:add.title,//标题
                    content:add.content,//内容
                    time:(add.type=='add'?add.creatDate:'2017-08'),//创建时间
                    doneDate:'',//完成时间
                    name:'李白',
                    hasDone:false,//是否已完成
                    id:'',//当前id
                },
                callback:()=>{
                    this.props.history.push('/list');
                }
            };
            if(index&&index!==''){
                options.data.i=index
            }
            this.props._addInfo(options);
        }
    }

    render(){
        let add=this.props.add;
        return (
            <div>
                <h2>新增/编辑</h2>
                <p>
                    标题：<input type="text" value={add.title} onChange={this.inputFun.bind(this,'title')}/>
                </p>
                <p>
                    详细内容：<textarea value={add.content} onChange={this.inputFun.bind(this,'content')}></textarea>
                </p>
                <p>
                    <button onClick={this.btnFun.bind(this,true)}>确定</button>
                    <button onClick={this.btnFun.bind(this,false)}>取消</button>
                </p>
            </div>
        )
    }
}

function mapStateToProps (state){
    console.log(state);
    return state;
}
function mapDispatchToProps(dispatch){
    return {
        _addHandle:(text)=> {//改变props的action方法
            dispatch(addHandle(text));
        },
        _addInfo:(text)=> {//改变props的action方法
            dispatch(addInfo(text));
        },
        _listHandle:(text)=> {//改变props的action方法
            dispatch(listHandle(text));
        }
    }
}
const add = connect(
    mapStateToProps,
    mapDispatchToProps
)(addMain);


export default withRouter(add);