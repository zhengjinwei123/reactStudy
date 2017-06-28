let React = require("react");
let _ = require("lodash");
let AddUserForm = require("../components/addUserForm");
let UserList = require("./userList");

module.exports = React.createClass({
   getInitialState:function(){
       let users = [
           {
               id:1,
               user:"张三",
               phone:"18209090909",
               desc:"我是张三,毕业于清华大学"
           },
           {
               id:2,
               user:"李四",
               phone:"18308088080",
               desc:"我是李四,毕业于北京大学"
           },
           {
               id:3,
               user:"王五",
               phone:"13278788787",
               desc:"我是王五,毕业于浙江大学"
           }
       ];
       return{
           users:users,
           showForm:true
       }
   },
    onToggleForm:function(){
       this.setState({
           showForm:!this.state.showForm
       })
    },
    onAddUser:function(user){
        user.id = this.state.users.length+1;
        this.setState({
            users:this.state.users.concat(user)
        });
    },
    onRemoveUser:function(id){
        for(let i=0;i<this.state.users.length;i++){
            if(this.state.users[i].id === id){
                this.state.users.splice(i,1);
                break;
            }
        }
        this.setState({
            users:this.state.users
        });
    },
    render:function(){
        return (
            <div className="app">
                <div className="form">
                    <AddUserForm
                        addUser={this.onAddUser}
                        showForm={this.state.showForm}
                        onToggleForm={this.onToggleForm}
                    />
                </div>
                <div className="userlist">
                    <UserList
                        users={this.state.users}
                        onRemoveUser={this.onRemoveUser}
                        />
                </div>
            </div>
        )
    }

});