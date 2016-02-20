// writing in es6 from now on
import React from 'react';
import ReactDOM from 'react-dom';
import Plants from './dependency-three.js';

//1
let plants = {
	name: "Shrub roses",
	color: "Reddish pink",
	quantity: '2'
}

class List extends React.Component{
  render(){
  	//3
  	// console.log(this.props.plants)
  	return (
  		<div> 
  		  <h4> Garden plant list </h4>
  		  //4
  		  <Plants plants={this.props.plants}/>
  		</div>
  	)
  }
}



ReactDOM.render( 
	<div>
	//2
		<List plants={plants}> </List>
  </div>
  , document.getElementById('content')
);