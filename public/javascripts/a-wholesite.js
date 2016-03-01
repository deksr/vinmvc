import React from 'react';
import ReactDOM from 'react-dom';

import { Link }from 'react-router';
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
        <h2> Welcome to the whole layout page </h2>
        <p> <Link to="plantseeds"> plant seeds list </Link> </p>  {''}
        <p> <Link to="aboutourcompany"> learn about our company </Link>  </p>
        <p> <Link to="homepage"> home page </Link>  </p>


        {this.props.children}
        **********
        <Middleguy data={this.state.data}/>


      </div>
    )
  }
}

export default WholeSite