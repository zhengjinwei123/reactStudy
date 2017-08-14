import React from 'react';

class Detail extends  React.Component{
    render(){
        return (
          <p> Detail,url 参数:{JSON.stringify(this.props.params)}</p>
        )
    }
}

export default Detail;