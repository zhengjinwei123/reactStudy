module.exports = {
    //判断是否是手机号码
    isCellPhoneNumber:function(str){
        let re = /^1\w{10}$/;
        return re.test(str);
    }
};