/**
 * Created by ex-wangxin on 2018/12/18.  渲染速度测试
 */
import React from 'react';
import {connect} from 'react-redux';//连接store 和 ui 组件 组成新的组件
import {speedTestHandle} from '../actions/speedTest';
import {withRouter} from "react-router-dom";
import SelectBox from '../components/public/selectBox';
import SelectionShell from '../components/selectionShell';

class speedTestMain extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            list: [],
        }
    }
    //初始化生命周期方法
    componentDidMount() {
        //this.props.history.push('/list')
        let list=[];
        for(let i=1;i<1000;i++){
            list.push({
                index:i,value:''
            })
        }
        this.setState({
            list:list
        })
    }

    //组件卸载生命周期方法
    componentWillUnmount() {

    }

    //select 改变事件
    inputFun=(i,value)=>{
        let list=this.state.list;
        list[i].value=value;
        console.time('testForEach');
        this.setState({
            list:list
        },()=>{
            console.log(this.state.list);
            console.timeEnd('testForEach');
        })
    };

    /*creatSelectBox() {
        return this.state.list.map((item,i)=>{
            return (
                <div key={i}>
                    <h3>{item.index}、这是第--{item.index}--个selectBox</h3>
                    <SelectBox key={item.index} value={item.value} callback={(value)=>{this.inputFun(i,value)}} />
                </div>
            );
        })
    }*/

    creatSelectBox() {
        return this.state.list.map((item,i)=>{
            return (
                <SelectionShell key={item.index} item={item} index={i} callback={this.inputFun} />
            );
        })
    }

    render() {
        let add = this.props.add;
        return (
            <div>
                <h2>大量插件渲染速度测测试</h2>
                {this.creatSelectBox()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        _speedTestHandle: (text)=> {//改变props的action方法
            dispatch(speedTestHandle(text));
        }
    }
}
const speedTest = connect(
    mapStateToProps,
    mapDispatchToProps
)(speedTestMain);


export default withRouter(speedTest);