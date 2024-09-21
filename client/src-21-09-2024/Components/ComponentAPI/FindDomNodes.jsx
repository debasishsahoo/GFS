import React from "react";
import ReactDOM from "react-dom";

class FindDomNodes extends React.Component {
  constructor() {
    super();
    this.handler1 = this.handler1.bind(this);
    this.handler2 = this.handler2.bind(this);
  }
  handler1() {
    let myDiv = document.getElementById("myDivOne");
    ReactDOM.findDOMNode(myDiv).style.color = "red";
  }
  handler2() {
    let myDiv = document.getElementById("myDivTwo");
    ReactDOM.findDOMNode(myDiv).style.color = "blue";
  }
  render() {
    return <>
    <h1>Fin Dom Example</h1>
    <button onClick={this.handler1}>Find-Dom-Node-1</button>
    <button onClick={this.handler2}>Find-Dom-Node-2</button>
    <h3 id='myDivOne'>NODE1</h3>
    <h3 id='myDivTwo'>NODE2</h3>
    </>;
  }
}

export default FindDomNodes;
