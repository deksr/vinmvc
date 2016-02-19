var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
var PotOne = React.createClass({ 
  render: function() {
    return (
      <div className="white-and-green">
        Hello, world!  dependency two here and var name is potone.
        <h1> lilly of valley </h1>
      </div>
    );
  }
});

var PotTwo = React.createClass({ 
  render: function() {
    return (
      <div className="pink-and-green">
        Hello, world!  dependency two here and var name is pottwo.
        <h1> Petunia </h1>
      </div>
    );
  }
});

ReactDOM.render(
	<div>
  <PotOne />
  <PotTwo />
  </div>, document.getElementById('content')
);