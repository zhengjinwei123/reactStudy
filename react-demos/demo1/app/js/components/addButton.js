let React = require("react");

module.exports = React.createClass({
   render:function(){
       return(
           <button id={this.props.id} onClick={this.props.action} className="btn btn-danger">添加</button>
       )
   }
});