// console.log("this is main.js")

var React = require('react');
var ReactDOM = require('react-dom');

// This doesn't work in gulp
// ReactDOM.render(
//   <h1>Hello, from react!</h1>,
//   document.getElementById('example')
// );



// this works
	var Count =  React.createClass({
	 	// set a property
	 	propTypes: {
	        text: React.PropTypes.string
	  },
	  // create elements. "but this is floating"
	 	render: function(){
	 		return React.DOM.div(null, 
	 			React.DOM.textarea({ 
	 				defaultValue: this.props.text}),
	 			React.DOM.h4(null, this.props.text.length)
	 	)}
	})
	
 // "grab them and assign them on the dom"
 ReactDOM.render(
		React.createElement(Count,{
			text: "Dracula"
		}), 
		document.getElementById('example')
  )


