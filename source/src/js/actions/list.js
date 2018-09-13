/**
 * Created by ex-wangxin on 2018/5/30.
 */
import React from 'react';
function listHandle(text) {
    return {
        type: 'LIST_HANDLE',
        text
    }
}

function testShowHandle(text) {
    return {
        type: 'TESTSHOW_HANDLE',
        text
    }
}


function listGetDate(options) {
    return dispatch=>{
        $.XlAjax({
            url: "homeGetDate",
            data: options,
            success: function (data) {
                if (data.status == "0000") {
                    alert('添加、修改成功');
                    dispatch(listHandle({
                        list:data.data
                    }))
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

export {listHandle,listGetDate,testShowHandle}