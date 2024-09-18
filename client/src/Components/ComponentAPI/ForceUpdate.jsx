import React from "react";

class ForceUpdate extends React.Component {
  constructor() {
    super();
    this.forceUpdateState=this.forceUpdateState.bind(this);
  }

  forceUpdateState() {
    this.forceUpdate();
  }

  render() {
    return <>
    <div style={{'background-color':'orange'}}>
        <h1>Generate Random Number</h1>
        <h2>Random Number: {Math.random()}</h2>
        <button onClick={this.forceUpdateState}>ForceUpdate</button>
    </div>
    
    </>;
  }
}
export default ForceUpdate;
