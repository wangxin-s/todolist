/**
 * Created by ex-wangxin on 2018/6/4.
 */
import update from 'react-addons-update';
const addState = {
    type:'add',
    creatDate:'',
    index:'',
    title:'',
    content:'',
};
const add=(state=addState,action)=>{
    switch (action.type){
        case 'ADD_HANDLE':
            return update(state,{$merge:action.text});
        default:
            return state
    }
};
export default add;