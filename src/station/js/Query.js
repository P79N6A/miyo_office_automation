/**
 * Created by jinjiaxing on 16/3/9.
 * Query 和服务端交互类
 * @file
 */

import Reflux from "reflux";

class Query {
    constructor() {

    }
}

/**
 * get方式请求
 *
 * @param {string} url 请求地址
 * @param {Object} data 请求参数
 * @param {Function} callBack 回调函数
 */
Query.get = function (url, data, callBack, onErrorResponse) {
    Query.req('get', url, data, callBack, onErrorResponse);
};

/**
 * post方式请求
 *
 * @param {string} url 请求地址
 * @param {Object} data 请求参数
 * @param {Function} callBack 回调函数
 */
Query.post = function (url, data, callBack, onErrorResponse) {
    Query.req('post', url, data, callBack, onErrorResponse);
};

/**
 * 查询
 *
 * @param {string} type get post
 * @param {string} url 请求地址
 * @param {Object} data 请求参数
 * @param {Function} callBack 回调函数
 */

Query.req = function (type, url, data, callBack, onErrorResponse) {
    console.debug('请求服务端' + type+': url=' + url + ' data=' + JSON.stringify(data));
    const statusNoLogin = 1001;
    const statusNoPermission = 1005;
    $.ajax({
        type: type,
        data: data,
        url: url,
        dataType: 'json',
        success: function (data) {
            console.debug('callback:' , data);
            if (data && data.errno === 0 && data.errstr === 'ok') {
                callBack(data.data);
            } else if (data.errno === statusNoLogin) {
                console.info('用户尚未登录');
                window.location.href = 'https://passport.rdtest.baidu.com/v2/?login&tpl=map_car&u=' + window.location.host;
            } else if (data.errno === statusNoPermission) {
                alert('没有访问权限,请重新登录');
                window.location.href ='https://passport.rdtest.baidu.com/v2/?login&tpl=map_car&u=' + window.location.host;

            } else {
                if (onErrorResponse) {
                    onErrorResponse(data);
                } else {
                    alert(data.errstr);
                }
            }
        },
        error: function (e) {
            console.error('通信失败:', e);
            alert('通信失败:' + e);
        }
    });
}

export default Query;
