let React = require("react");
let UserItem = require("../components/userItem");

//用户列表组件
module.exports = React.createClass({
   render:function(){
       let users = this.props.users;

       if(!Array.isArray(users)){
           throw new Error("this.props.users is must be an array");
       }

       let onRemoveUser = this.props.onRemoveUser;

       let userComponents = users.map(function(user){
           return <UserItem
               key={user.id}
               id={user.id}
               user={user.user}
               phone={user.phone}
               desc={user.desc}
               onRemoveUser={onRemoveUser}
           />
       });

       return (
           <ul>
               {userComponents}
           </ul>
       )
   }
});