/**
 * Created by ex-wangxin on 2018/6/28.
 */
import React from 'react';
class UlItem extends React.PureComponent{

    //初始化生命周期方法
    componentDidMount(){
        //this.props.history.push('/list')
    }

    //组件卸载生命周期方法
    componentWillUnmount(){

    }

    //动态生成相应内容
    doneListFun() {
        console.log('触发了组件ulItem的list的渲染');
        let list = this.props.list;//已完成的
        let htmlNew = [], htmlOld = [], doneNumb = 0, doingNumb = 0;
        let doneDate = '';
        list.map((item, i)=> {
            let liHtml =
                <li key={i + 'q'}>
                    <h4><input type="radio" />{item.title}</h4>
                    <p>创建时间：{item.creatDate}</p>
                    {doneDate}
                    <p>详细内容：{item.content}</p>
                    <p>
                        <button >编辑</button>
                        <button >删除</button>
                    </p>
                </li>;
            if (item.hasDone) {//已完成
                doneNumb++;
                doneDate = <p>完成时间：{item.doneDate}</p>;
                htmlOld.push(liHtml);
            } else {
                doingNumb++;
                htmlNew.push(liHtml);
            }
        });
        return (
            <div>
                <div className="item">
                    <h3>正在进行中(任务数{doingNumb})</h3>
                    <ul>
                        {htmlNew}
                    </ul>
                </div>
                <div className="item">
                    <h3>已经完成(任务数{doneNumb})</h3>
                    <ul>
                        {htmlOld}
                    </ul>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                {this.doneListFun()}
            </div>
        )
    }
}
export default UlItem;
