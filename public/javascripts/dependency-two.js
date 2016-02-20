// writing in es6 from now on
import React from 'react';
import ReactDOM from 'react-dom';
import Plants from './dependency-three.js';

//1
let plants = [{
	id: 1,
	name: "Shrub roses",
	color: "Reddish pink",
	quantity: '2'
},
{
	id: 2,
	name: "English lavander",
	color: "lavander",
	quantity: '5'
},
{
	id: 3,
	name: "Hydrangias",
	color: "blue",
	quantity: '10'
}]

class List extends React.Component{
  render(){
  	return (
  		<div> 
  		  <h4> Garden plant list </h4>
  		  //3
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