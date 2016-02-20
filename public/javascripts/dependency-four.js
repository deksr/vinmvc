import React from 'react';
import ReactDOM from 'react-dom';

class Plant extends React.Component{
  render(){
    //4
  	return (
  		<li> {this.props.plant.name}, {this.props.plant.color} 
      </li>
  	)
  }
}

export default Plant