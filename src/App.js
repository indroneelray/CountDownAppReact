import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import Heading from './heading';
import Stopwatch from './stopwatch';

class App extends Component{

constructor(props){
  super(props);
  this.state={
    deadline:'',
    newDeadline:'',
    timer:100,
    newTimer:0
  }
}

changeDeadline(){
  this.setState({deadline:this.state.newDeadline})
}

changeTimer(){
  this.setState({timer:this.state.newTimer})
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
      onChange={event=>this.setState({newDeadline:event.target.value})} placeholder="dd month yyyy" />
      <button onClick={()=>this.changeDeadline()}>Submit</button>
      </div>
      <Stopwatch timer={this.state.timer} />
      <input
      onChange={event=>this.setState({newTimer:event.target.value})} placeholder="Enter in seconds" />
      <button onClick={()=>this.changeTimer()}>Submit</button>


    </div>);
  }
}

export default App;
