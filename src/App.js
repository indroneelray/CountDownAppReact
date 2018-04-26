import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import Heading from './heading';

class App extends Component{

constructor(props){
  super(props);
  this.state={
    deadline:'December 25, 2018',
    newDeadline:''
  }
}

changeDeadline(){
  this.setState({deadline:this.state.newDeadline})
}

    render(){
    return (  <div className="App">
      <Heading />
      <div>
      <div className="date">{this.state.deadline}</div>
      <Clock deadLine={this.state.deadline} />
      </div>
      <div>
      <input
      onChange={event=>this.setState({newDeadline:event.target.value})} placeholder="dd month yyyy"/>
      <button onClick={()=>this.changeDeadline()}>Submit</button>
      </div>
    </div>);
  }
}

export default App;
