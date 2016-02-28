import React from 'react';
import ReactDOM from 'react-dom';

class Bottom extends React.Component{
  render(){
  	{/*console.log(this.props) */}

    return (
      <div> 
       {/* 2c. This is for props */}
       <h4>This is {this.props.horn}</h4>  
      </div>
    )
  }
}

export default Bottom