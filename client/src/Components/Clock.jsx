import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state={date:new Date()}
    setInterval(()=>this.setTime(),1000) //1000 milSecond=1 Second
  }
  setTime(){
    this.setState((state,props)=>({date:new Date()}))
  }
  render() {
    return <>
    <div className="clock">{this.state.date.toString()}</div>
    </>;
  }
}

export default Clock;
