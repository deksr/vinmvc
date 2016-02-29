import React from 'react';
import ReactDOM from 'react-dom';
import  Singldata from './e-singledata.js';


class Midguy extends React.Component{
  render(){
  	{/*console.log(this.props) */}
    return (
      <div>
	      <ul> 
	      {this.props.data.map((plant)=>{
	  			return <Singldata key={plant.id} plant={plant} />
	  		})} 
	     
	      </ul>  
      </div>
    )
  }
}

export default Midguy