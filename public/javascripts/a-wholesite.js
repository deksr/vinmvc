import React from 'react';
import ReactDOM from 'react-dom';
import  Top from './b-top.js';
import  Bottom from './c-bottom.js';
import  Middleguy from './d-midguy.js';



class WholeSite extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    $.ajax({
      url: '/javascripts/products.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log("Working");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("not Working");

      }.bind(this)
    });
  }

  render(){
    return (
      <div>
        <Top />
        <Middleguy data={this.state.data}/>
        <Bottom /> 

      </div>
    )
  }
}

export default WholeSite