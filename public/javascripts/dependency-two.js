var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
var Garden = React.createClass({ 

	edit: function(){
   alert ('editing note')
	},

	delete: function(){
   alert ('deleting note')
	},

  render: function() {
    return (

      <div className="flowers">
      <p> {this.props.children} </p>
      <span>
	      <button onClick= {this.edit} className = "someclassname"> edit </button>
	      <button onClick= {this.remove} className = "someclassname"> delete </button>
      </span>
      </div>
    );
  }
});


//need to always wrap them in div if you want multiple components to render
ReactDOM.render( 
	<div>
		<Garden> lobella </Garden> 
		<Garden> petunia </Garden>
		<Garden> zenya </Garden> 
  </div>
  , document.getElementById('content')
);