import React, { Component } from "react";

import './IF_Statement.css'

function Message(props) {
  if (props.isLoggedIn) return <h1 className="d1 show">WelCome Back!</h1>;
  else return <h1 className="d1 hide">Please Login First</h1>;
}

function Login(props) {
  return <button onClick={props.clickInfo}>Login</button>;
}

function Logout(props) {
  return <button onClick={props.clickInfo}>Logout</button>;
}

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLogin() {
    this.setState({ isLoggedIn: true });
  }
  handleLogout() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    return (
      <div>
        <h1>Example</h1>
        <Message isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout clickInfo={this.handleLogout} />
        ) : (
          <Login clickInfo={this.handleLogin} />
        )}
      </div>
    );
  }
}


export default Auth;
