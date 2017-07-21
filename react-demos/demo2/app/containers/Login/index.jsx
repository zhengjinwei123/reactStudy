import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               login page
            </div>
        )
    }
}

export default Login;