import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Register extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                register page
            </div>
        )
    }
}

export default Register;