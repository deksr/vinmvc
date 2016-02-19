var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
var PotOne = React.createClass({ 
  render: function() {
    return (
      <div className="flowers">
      this is from dependency two
        <h3> {this.props.text} </h3>
        <h4> {this.props.children} </h4>
      </div>
    );
  }
});


ReactDOM.render(
	<div>
  <PotOne text = "lobella"> in baby blue </PotOne>
  <PotOne text = "petunia"> in cream </PotOne>
  <PotOne text = "zenya"> in dark pink </PotOne>


  </div>, document.getElementById('content')
);