/**
 * Created by ex-wangxin on 2018/4/3.  ajax 公共组件
 */

;(function ($,window, document) {
    var XlAjax = function (opt) {
        this.defaults = {
            type: "POST",//默认为POST发送方式
            url: '',//AJAX 请求URL ,参数在下面URLS方法里配置
            processData: true,
            cache: true,//AJAX请求是否缓存，默认为TRUE缓存
            contentType: "application/x-www-form-urlencoded",//AJAX发送信息至服务器时内容编码类型
            timeout: 60000,//超时时间，默认为60秒
            async: true,// 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器
            data: {},//发送到服务器的数据。
            dataType: 'json',//预期服务器返回的数据类型。
            beforeSend: function () {
            },//在发送请求之前回调函数
            success: function () {
            },//请求成功回调成功函数
            error: function () {
            },//请求失败回调函数
            errorDialog:function(){

            },//请求失败统一弹窗处理
            complete: function () {
            }//AJAX当请求完成之后调用这个函数，无论成功或失败
        },
            this.options = $.extend({}, this.defaults, opt)
    }
    XlAjax.prototype = {

        init: function () {
            this.send(this.urls[this.options.url]);//执行AJAX
        },//请求对应的页面AJAX

        urls: {
            /*登录模块接口开始*/
            homeGetDate:'/home/data.json',
            homeAdd:'/home/add.json',
            homeDelete:'/home/delete.json',

        },// AJAX URL集合

        send: function (url) {
            if (!url) {
                return false;
            }
            var _that = this;
            $.ajax({
                type: _that.options.type,
                url: url,
                processData: _that.options.processData,
                cache: _that.options.cache,
                dataType: _that.options.dataType,
                contentType: _that.options.contentType,
                data: _that.options.data,
                timeout: _that.options.timeout,
                beforeSend: function (XHR) {
                    $.isFunction(_that.options.beforeSend) && _that.options.beforeSend();
                },
                success: function (data) {
                    //loading close
                    $.isFunction(_that.options.success) && _that.options.success(data);
                },
                error: function (xhr, errorType, error) {
                    //loading close
                    _that.options.errorDialog(xhr, errorType, error);
                    $.isFunction(_that.options.error) && _that.options.error();
                }
            });
        }//调用发送AJAX方法
    }

    $.XlAjax = function (options) {
        var AjaxSend = new XlAjax(options);
        return AjaxSend.init();
    }
})(jQuery, window, document);