/**
 * Created by ex-wangxin on 2017/4/13.
 */
import React from 'react';
import {connect} from 'react-redux';
require('../../../css/select-box.scss');
/*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/

class selectBox extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            show: false,
            color: 'color-gray',
            value: '',
            list: [
                {name:'请选择',value:''},
                {name:'北京',value:'beijing'},
                {name:'天津',value:'tianjin'},
                {name:'上海',value:'shanghai'},
                {name:'安徽',value:'anhui'},
            ],
        }
    }
    componentDidMount() {

    }

    //组件完成更新后
    componentDidUpdate(){

    }

    optionClick(value,name){
        this.setState({
            show:false,
            value:value
        });
        this.props.callback(value);
    }
    createOption(list){
        let optionList=[];
        for(var i in list){
            optionList.push(
                <p key={i} onClick={this.optionClick.bind(this, list[i].value ,list[i].name)}>
                    {list[i].name}
                </p>
            )
        }
        return optionList;
    }
    //显示选中项
    showValue(value,list){
        for(let i=0;i<list.length;i++){
            if( list[i].value==value){
                return list[i].name;
            }
        }
    }

    //select 框点击事件
    selectClick(){
        let show=this.state.show;
        if(show){
            this.setState({
                show:false
            })
        }else{
            this.setState({
                show:true
            });
        }
    }
    mouseLeave(){
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div className={"select-box-wap role-name"} style={{width:"198px"}} onMouseLeave={this.mouseLeave.bind(this)}>
                <div className="select-top" onClick={this.selectClick.bind(this)}>
                    {this.showValue(this.state.value,this.state.list)}<i></i>
                </div>
                <div className="select-option"  style={{display:this.state.show?'block':'none'}}>
                    {this.createOption(this.state.list)}
                </div>
            </div>
        )
    }
}

export default  selectBox;