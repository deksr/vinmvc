import React from 'react';
import ReactDOM from 'react-dom';
import  Top from './b-top.js';
import  Bottom from './c-bottom.js';


class WholeSite extends React.Component{

  constructor() {
    super();
    this.state = {
      greeting: "Hello There from constructor this.state"
    }
  }

  render(){
    return (
      <div>
        <Top toptitle={this.state.greeting}/>
        <Bottom bottomtitle ={"lilly"}/> 
      </div>
    )
  }
}

export default WholeSite