let React = require("react");
let RegUtils = require("../utils/reg.js");
let addButton = require("./addButton");
// 添加用户的 表单组件

module.exports = React.createClass({
    //添加用户提交
    onSubmitAddUser:function(e){
        //阻止提交表单
        e.preventDefault();
        //判断提交内容是否合法
        if(!this.refs.user.value){
            alert("用户名没有填写哦!");
            return false;
        }
        if(!this.refs.phone.value){
            alert("电话号码没有填写!");
            return false;
        }
        if(!RegUtils.isCellPhoneNumber(this.refs.phone.value)){
            alert("电话号码格式不合法!");
            return false;
        }

        let newUser = {
            user:this.refs.user.value,
            phone:this.refs.phone.value,
            desc: this.refs.desc.value
        };

        this.props.addUser(newUser);
    },
    render:function(){
        let formStyle = {
            display:this.props.showForm ? 'block':'none'
        };
        return (
            <form ref="addUserForm" name="addUserForm" className={formStyle} onSubmit={this.onSubmitAddUser}>
                <div className="form-group">
                    <label htmlFor="user">用户名</label>
                    <input ref="user" type="text" className="form-control input-sm" id="user" name="user" placeholder="请输入用户名"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">手机号</label>
                    <input type="text" ref="phone" className="form-control input-sm" id="phone" name="phone" placeholder="请输入手机号"/>
                </div>
                <div className="form-group">
                    <textarea ref="desc" name="desc" id="desc" placeholder="详细描述">

                    </textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-info pull-right" id="addUser">添加</button>
                    <button className="btn btn-danger pull-left" id="quxiao" onClick={this.props.onToggleForm}>取消</button>
                </div>
            </form>
        )
    }
});
