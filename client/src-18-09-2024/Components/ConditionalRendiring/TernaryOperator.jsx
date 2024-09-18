import React from "react";
import './IF_Statement.css'
function UserLogin() {
    return (
        <div className='d1 show '>
          <h1>WellCome User</h1>
        </div>
      );
}
function GuestLogin() {
    return (
        <div className='d1 hide'>
          <h1>WellCome Guest</h1>
        </div>
      );
}

const TernaryOperator = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogin />;
  }

  return <GuestLogin/>;
};

export default TernaryOperator;
