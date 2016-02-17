var React = require('react');
var ReactDOM = require('react-dom');

require("./dependency-one.js");

 
// jsx not needed. it is replaced with babel. react tools not needed either which has jsx

ReactDOM.render(
  <h1>Hello, from react!</h1>,
  document.getElementById('example')
);

