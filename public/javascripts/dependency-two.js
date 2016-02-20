// writing in es6 from now on
import React from 'react';
import ReactDOM from 'react-dom';
import Plants from './dependency-three.js';




class List extends React.Component{
  render(){
  	return (
  		<div> 
  		  <h4> Garden plant list </h4>
  		  <Plants />
  		</div>
  	)
  }
}






ReactDOM.render( 
	<div>
		<List> </List>
  </div>
  , document.getElementById('content')
);