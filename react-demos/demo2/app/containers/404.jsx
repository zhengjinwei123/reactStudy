import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class NotFound extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="align-center color-red"><h1>404 not found page</h1></div>
        )
    }
}

export default NotFound;