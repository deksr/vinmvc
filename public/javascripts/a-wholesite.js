import React from 'react';
import ReactDOM from 'react-dom';
import  Top from './b-top.js';
import  Bottom from './c-bottom.js';


class WholeSite extends React.Component{

  // 1a. this is for state
  constructor() {
    super();
    this.state = {
      greeting: "Hello There"
    }
  }
  // state ends



  render(){

    // 2a. this is for props
    const horn = "honk honk";


    setTimeout(() => {
      this.setState({
        greeting: " There I go again... Hello"
      });
    }, 3000)



    return (
      <div>
      {/* 1b. this is for state*/}
        {this.state.greeting} 
        <Top />
        {/* 2b. This is for props and 2c in bottom.js*/}
        <Bottom horn ={horn}/> 
        <Bottom horn ={"yaawn"}/> 

      </div>
    )
  }
}

export default WholeSite