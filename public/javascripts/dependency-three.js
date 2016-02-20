import React from 'react';
import ReactDOM from 'react-dom';


class Plants extends React.Component{
  render(){
  	  //5
  	  // console.log(this.props.plants)
  	return (
  		<ul> 
  		//6
        <li> {this.props.plants.name}, {this.props.plants.color} </li>
  		</ul>
  	)
  }
}

export default Plants