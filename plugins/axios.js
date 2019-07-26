import Axios from 'axios'

const DEFAULT_HOST = {DEV_HOST:"dev.xinhulu.com", BETA_HOST:"beta.xinhulu.com", IDC_HOST:"www.xiaoyusan.com"}
const ENV = process.env.NODE_ENV || 'DEV_HOST'
const argv =process.argv.slice(2)[0]
const baseURL = DEFAULT_HOST[argv]

console.log(baseURL)
export default (url,param,timeout=8000) =>{
    return new Promise((revolved,reject)=>{
        Axios({
            method: 'post',
            url: url,
            baseURL: 'https://' + baseURL,
            data: param,
            timeout:timeout,
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                if(!data){return};//get请求，无需处理
                function each(object, callback){
                    let name,
                    i = 0,
                    length = object.length,
                    isObj = length === undefined || Object.prototype.toString.call(object) == "[object Function]";
                    if (isObj) {
                        for (name in object) {
                            if (callback.call(object[name], name, object[name]) === false) {
                                break;
                            }
                        }
                    }
                    else {
                        for (let value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {
                        }
                    }
                    return object;
                }
                function serialize(params,obj,scope){
                    let type, array = Object.prototype.toString.call(obj) == "[object Array]", hash = Object.prototype.toString.call(obj) == "[object Object]"
                    each(obj, function(key, value) {
                      type = Object.prototype.toString.call(value);
                      if (scope) key = scope + '[' + (hash || type == '[object Object]' || type == '[object Array]' ? key : '') + ']'
                      if (!scope && array) params.add(value.name, value.value)
                      else if (type == "[object Array]" || (type == "[object Object]"))
                        serialize(params, value, key)
                      else params.add(key, value)
                    })
                  }
                let param = function(obj){
                    let params = []
                    params.add = function(key, value) {
                      if ( Object.prototype.toString.call(value) == "[object Function]") value = value()
                      if (value == null) value = ""
                      this.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
                    }
                    serialize(params, obj)
                    return params.join('&').replace(/%20/g, '+')
                }
                return param(data);
            }]
        }).then(data=>{
            revolved(data.data);
        }).catch(e=>{
            reject("系统繁忙，请稍后重试");
        });
    });
};