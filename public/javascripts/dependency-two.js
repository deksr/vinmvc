var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
// component one starts here
var Garden = React.createClass({ 

  propTypes: function(){
    name: React.PropTypes.string
    season: React.PropTypes.string
  }, 


	getDefaultProps: function(){
		return{
			name: "shasta daisy",
			season: "summer"
		}
	},


//state and its custom method
	getInitialState: function(){
		return{
      value: 100
		}
	},
	

	_customMethod: function(){
	  console.log("some event should fire")
		this.setState({
		   	value: 500
		})
	},

//****

  render: function(){
  	var picture;

  	if (this.props.season == "summer"){
      picture  =  <p> looks like stars in galaxy when  {this.props.name} is in your garden </p> 
  	}

  	return (
      <div>
	      <h3> garden landscape: {picture} </h3>
	      <h5> count: {this.state.value} </h5>
	      <button onClick={this._customMethod}> click </button>

	      <br/>
      </div>
    );
  }

});


ReactDOM.render( 
	<div>
		<Garden> </Garden>
  </div>
  , document.getElementById('content')
);