var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
// component starts here
var Garden = React.createClass({ 

// setting initial state of the dom 
	getInitialState: function(){
		return {
			name: "Lilly of valley",
			color: "white and green"
		}
	},

// add an event to set the new state
	handleClick: function(){
   this.setState({
   	name: "Tulips"
   })
	},

// render the elements
  render: function() {
    return (
      <div>
      <button onClick={this.handleClick}> plant a bulb </button>
      <br/>
      You just now planted:  {this.state.name} in color {this.state.color}      
      </div>
    );
  }
});
// component ends here


//need to always wrap them in div if you want multiple components to render
ReactDOM.render( 
	<div>
		<Garden> </Garden>
  </div>
  , document.getElementById('content')
);