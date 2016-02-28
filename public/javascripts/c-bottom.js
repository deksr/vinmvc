import React from 'react';
import ReactDOM from 'react-dom';

class Bottom extends React.Component{
  render(){
  	{/*console.log(this.props) */}
    return (
      <div> 
       <h4>This is {this.props.bottomtitle}</h4>  
      </div>
    )
  }
}

export default Bottom