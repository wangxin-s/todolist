/**
 * Created by ex-wangxin on 2018/5/30.
 */

import React from 'react';
import {connect} from 'react-redux';//连接store 和 ui 组件 组成新的组件
import {listHandle, listGetDate, testShowHandle} from '../actions/list';
import {addHandle} from '../actions/add';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import UlItem from '../components/ulItem';
import SelectBox from '../components/selectBox';
import HighSelect from '../components/highSelect';

class ListMain extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            maxNum: 1000,
            minNum: 100,
            defaultNum: 120,
            num: 130,

            value: '',

            minYear: '',//最小年份
            minQuarter: '',//最小可选季度
            maxYear: '',//最大可选年份
            maxQuarter: '',//最大可选季度
            defaultYear: '',//默认年份
            defaultQuarter: '',//默认季度
        };
    }

    //初始化生命周期方法
    componentDidMount() {
        this.props._listGetDate();
        let m = [false, false, false, false, false, false];
        let n = m.some((a)=>a === true);
        console.log([false, true, false].some((item)=>item === false));
        this.creatList(this.state.num);
    }

    //组件卸载生命周期方法
    componentWillUnmount() {

    }

    // es6 写法测试
    testFun() {
        let list = this.props.list.list;//已完成的
    }

    //input切换事件
    inputClick(item, index) {
        let list = this.props.list.list;
        list[index].hasDone = !list[index].hasDone;
        this.props._listHandle({
            list: list
        })
    }

    //删除事件
    delFun(item, index) {
        let list = this.props.list.list;
        list.splice(index, 1);
        this.props._listHandle({
            list: list
        })
    }

    //动态生成相应内容
    doneListFun() {
        console.log('触发了list的渲染');
        return <UlItem list={this.props.list.list}/>;
    }

    btnFun(item, index) {
        if (item) {//编辑
            this.props._addHandle({
                type: 'edit',
                creatDate: item.creatDate,
                index: (index ? index : ""),
                title: item.title,
                content: item.content,
            })
        }
        this.props.history.push('/add');
    }

    testClick() {
        this.props._testShowHandle({
            testShow: this.props.list.testShow++
        })
    }

    //测试渲染是否会相互触发
    testShow() {
        console.log('触发了testShow的渲染');

        return <div onClick={()=> {
            this.testClick()
        }}>当前被点击了{this.props.list.testShow}次</div>;
    }

    selectInputFun(obj) {
        console.log('----', obj)
    }

    higtSelectInputFun(obj) {
        console.log('--包装组件改变--', obj)
    }

    creatList(num) {
        let minNum = this.state.minNum;
        let maxNum = this.state.maxNum;
        let defaultNum = this.state.defaultNum;
        let list = [];
        let useNum = num === '' ? defaultNum : num;
        let check = useNum * 1 + 10;
        if (maxNum !== '') {
            check = (maxNum < useNum * 1 + 10 ? maxNum : useNum * 1 + 10);
        }
        let startNum = useNum * 1 - 10;
        if (minNum !== '') {
            startNum = (minNum > useNum * 1 - 10 ? minNum : useNum * 1 - 10);
        }
        for (let i = startNum; i <= check; i++) {
            list.push(i);
        }
        this.setState({
            list: list,
            num: useNum
        });
    }

    quartCreat(year, quarter) {
        let obj=this.state;
        let minYear = obj.minYear;
        let minQuarter = obj.minQuarter;
        let maxYear = obj.maxYear;
        let maxQuarter = obj.maxQuarter;
        let defaultYear = obj.defaultYear;
        let defaultQuarter = obj.defaultQuarter;

        let nowQuarter = quarter === '' ? defaultQuarter : quarter;
        let nowYear = (year !== '' ? year : defaultYear);
        let quarterList = [1, 2, 3, 4];
        if (minYear !== ''&&minYear<=nowYear) {
            quarterList=quarterList.filter((quarter)=>quarter>=minQuarter);
        }
        if(maxYear!==''&&maxYear>=nowYear){
            quarterList=quarterList.filter((quarter)=>quarter<=maxQuarter);
        }
        this.setState({
            quarterList:quarterList,
        })
    }

    leftClick() {
        let minNum = this.state.minNum;
        let newNum = this.state.num * 1 - 1;
        let num = newNum < minNum ? minNum : newNum;
        this.setState({
            num: num
        });
        this.creatList(num);
    }

    rightClick() {
        let maxNum = this.state.maxNum;
        let newNum = this.state.num * 1 + 1;
        let num = newNum > maxNum ? maxNum : newNum;
        this.setState({
            num: num
        });
        this.creatList(num);

    }

    inputChange(type, e) {
        if (type == 'input') {
            this.setState({
                value: e.target.value
            })
        } else {
            this.setState({
                num: this.state.value
            });
            this.creatList(this.state.value);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" onChange={this.inputChange.bind(this, 'input')}/>
                    <button onClick={this.inputChange.bind(this, 'button')}>确定</button>
                </div>
                <div>
                    <button onClick={this.leftClick.bind(this)}>{'<'}</button>
                    <span>选中的值：{this.state.num}</span>
                    <span>可选的值：{this.state.list.toString(',')}</span>
                    <button onClick={this.rightClick.bind(this)}>{'>'}</button>
                </div>
                <HighSelect list={[
                    {name: '第1个', value: 1, time: 1},
                    {name: '第2个', value: 2, time: 2},
                    {name: '第3个', value: 3, time: 3},
                    {name: '第4个', value: 4, time: 4},
                    {name: '第5个', value: 5, time: 5},
                ]} callback={this.higtSelectInputFun} propsName={'propsName'} keyList={{name: 'name', value: 'value'}}/>
                <SelectBox list={[
                    {name: '第1个', value: 1},
                    {name: '第2个', value: 2},
                    {name: '第3个', value: 3},
                    {name: '第4个', value: 4},
                    {name: '第5个', value: 5},
                ]} callback={this.selectInputFun} propsName={'propsName'}/>
                {this.testShow()}
                <h2>to do list
                    <button onClick={this.btnFun.bind(this)}>新增</button>
                </h2>
                {this.doneListFun()}
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
        _listHandle: (text)=> {//改变props的action方法
            dispatch(listHandle(text));
        },
        _testShowHandle: (text)=> {//改变props的action方法
            dispatch(testShowHandle(text));
        },
        _addHandle: (text)=> {//改变props的action方法
            dispatch(addHandle(text));
        },
        _listGetDate: (text)=> {//改变props的action方法
            dispatch(listGetDate(text));
        },
        _new: (text)=> {
            dispatch({
                type: 'EDIT_HANDLE',
                text
            });
        }
    }
}
const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMain);


export default withRouter(List);