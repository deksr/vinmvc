import React from 'react';
import ReactDOM from 'react-dom';
// import just the plant 
import Plant from './dependency-four.js';



class Plants extends React.Component{
  render(){
  	//5. run map/foreach plant
  	return (
  		<ul> 
	  		{this.props.plants.map((plant)=>{
	  			return <Plant key={plant.id} plant={plant} />
	  		})} 
  		</ul>
  	)
  }
}

export default Plants