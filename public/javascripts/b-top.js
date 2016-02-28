import React from 'react';
import ReactDOM from 'react-dom';

class Top extends React.Component{
  render(){
    return (
      <div> this is top:
      {this.props.toptitle}
      </div>
    )
  }
}

export default Top