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


  render: function(){
  	var picture;

  	if (this.props.season == "summer"){
      picture  =  <p> "looks like stars in galaxy when " {this.props.name} is in your garden</p> 
  	}

  	return (
      <div>
	      <p> garden landscape: {picture} </p>
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