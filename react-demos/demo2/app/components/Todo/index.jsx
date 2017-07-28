import React,{Componet,PropTypes} from 'react';

export default class Todo extends Componet{
    render(){
        const {onClick,completed,text} = this.props;
        let style = {
            textDecoration: completed ? 'line-through':'none',
            cursor: completed ? 'default' :'pointer'
        };

        return(
            <li onClick = {onClick}
                style={style} >
                {text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    competed:PropTypes.bool.isRequired
};