import React, {Component} from 'react';
import './App.css';

class Clock extends Component{

constructor(props){
  super(props);
  this.state={
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  }

}


getTimeUntil(date){
   const time =  Date.parse(date) - Date.parse(new Date());
 console.log(time);
 const seconds = Math.floor((time/1000)%60);
 const minutes = Math.floor((time/1000/60)%60);
 const hours = Math.floor((time/(1000*60*60)%24));
 const days = Math.floor((time/(1000*60*60*24)));
 console.log(seconds, minutes, hours, days);

 this.setState({
   days,
   hours,
   minutes,
   seconds
});

}

leading0(number){

     return (number>=10||number<=0?number:'0'+number);

}

componentWillMount(){
  this.getTimeUntil(this.props.deadLine);
}

componentDidMount(){
  setInterval(()=>this.getTimeUntil(this.props.deadLine), 1000);
}


  render(){

    return(
      <div className="clock">
        <div className="clock-days"> {this.leading0(this.state.days)} Days</div>
        <div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;
