/**
 * Created by ex-wangxin on 2018/12/19.
 */
import React from 'react';
import SelectBox from './public/selectBox';
class SelectionShell extends React.Component {
    constructor(props){
        super(props);
        this.state= {};
    }
    componentDidMount() {

    }

    //组件完成更新后
    componentDidUpdate(){

    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item.value===this.props.item.value){
            return false;
        }else{
            return true;   
        }
    }

    inputFun=(value)=>{
        this.props.callback(this.props.index,value);
    };

    render() {
        let item=this.props.item;
        let index=this.props.index;
        return (
            <div>
                <h3>{item.index}、这是第--{item.index}--个selectBox</h3>
                <SelectBox key={item.index} value={item.value} callback={this.inputFun} />
            </div>
        )
    }
}

export default  SelectionShell;