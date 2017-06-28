let React = require("react");

// 组成通讯录每一项的组件
module.exports = React.createClass({
    // 详情
    itemDetail: function (e) {
        let desc = this.props.desc;
        alert(desc);
    },
    // 删除
    removeItem: function(e){
        this.props.onRemoveUser(this.props.id);
    },
    render:function() {
        return (
            <li>
                <div>
                    {this.props.user}
                </div>
                <div>
                    {this.props.phone}
                </div>
                <div>
                    <button className="btn btn-info pull-right" onClick={this.itemDetail}>详情</button>
                </div>
                <div>
                    <button className="btn btn-warning pull-left" onClick={this.removeItem}>删除</button>
                </div>
            </li>
        )
    }
});