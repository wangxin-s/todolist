/**
 * Created by ex-wangxin on 2018/12/18.
 */
import update from 'react-addons-update';
const speedTestState = {
    list:[
        {
            title:'标题',//标题
            content:'具体内容',//内容
            creatDate:'',//创建时间
            doneDate:'',//完成时间
            hasDone:false,//是否已完成
            id:'',//当前id
        }
    ],//已完成的
    testShow:0,
};
const speedTest=(state=speedTestState,action)=>{
    switch (action.type){
        case 'LIST_HANDLE':
            console.log('LIST_HANDLE触发');
            return {...state,...action.text};
            break;
        case 'TESTSHOW_HANDLE':
            console.log('LIST_HANDLE触发');
            return {...state,...action.text};
            break;
        default:
            return state
    }
};
export default speedTest;