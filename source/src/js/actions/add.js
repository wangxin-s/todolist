/**
 * Created by ex-wangxin on 2018/6/4.
 */
function addHandle(text) {
    return {
        type: 'ADD_HANDLE',
        text
    }
}

function addInfo(options) {
    return dispatch=>{
        $.XlAjax({
            url: "homeAdd",
            data: options.data,
            success: function (data) {
                if (data.status == "0000") {
                    alert('添加、修改成功');
                    options.callback();
                } else {
                    alert('ajax请求失败');
                }
            },
            errorDialog: function (xhr, errorType, error) {
                //alert(xhr, errorType, error);
                alert(xhr.status);
                alert(errorType);
                alert(error);
            }
        });
    }
}
export {
    addHandle,addInfo
}