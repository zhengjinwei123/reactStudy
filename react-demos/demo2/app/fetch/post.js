import 'whatwg-fetch';
import 'es6-promise';

function object2params(obj){
    let result = [];
    for(let item in obj){
        result.push('&'+item+'='+encodeURIComponent(obj[item]));
    }

    if(result.length){
        return result.join('').slice(1); // 删除第一个&
    }
    return '';
}

export function post(url,paramsObject){
    return fetch(url,{
        method: 'POST',
        credentials: 'include',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: object2params(paramsObject)
    });
}