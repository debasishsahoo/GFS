import React from "react";

class SetState extends React.Component {
  constructor() {
    super();

    this.state = { msg: "Hi ,How Are You." };

    this.updateSetState=this.updateSetState.bind(this);
    
  }

  updateSetState() {
    this.setState({ msg: "yea,I am Fine." });
  }

  render() {
    return <>
    <div style={{'background-color':'tomato'}}>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>SET STATE</button>
    </div>
    
    </>;
  }
}
export default SetState;
