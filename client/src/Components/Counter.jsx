import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  increment = () => {
    this.setState({
      x: this.state.x + 1,
    });
  };
  decrement = () => {
    this.setState({
      x: this.state.x - 1,
    });
  };

  render() {
    return (
      <>
        <h1>INCREMENT & DECREMENT COUNTER</h1>
        <div className="container">
          <button onClick={()=>{this.increment()}}>+</button>
          <h2>{this.state.x}</h2>
          <button onClick={()=>{this.decrement()}}>-</button>
        </div>
      </>
    );
  }
}

export default Counter;
