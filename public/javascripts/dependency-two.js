var React = require('react');
var ReactDOM = require('react-dom');


// var name  needs start with caps
var PotOne = React.createClass({ 
  render: function() {
    return (
      <div className="flowers">
      this is from dependency two
        <h3> {this.props.text}</h3>
      </div>
    );
  }
});


ReactDOM.render(
	<div>
  <PotOne text = "lobella"/>
  <PotOne text = "petunia"/>
  <PotOne text = "zenya"/>


  </div>, document.getElementById('content')
);