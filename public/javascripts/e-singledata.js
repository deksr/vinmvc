import React from 'react';
import ReactDOM from 'react-dom';

class Singldata extends React.Component{
  render(){
    return (
      <div>
        <li> 
      {this.props.plant.name} <br/>
      {this.props.plant.color}

      
        </li>
      </div>
    )
  }
}

export default Singldata