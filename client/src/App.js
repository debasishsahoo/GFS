import React from "react";
//import IF_Statement from './Components/ConditionalRendiring/IF_Statement'
//import TernaryOperator from './Components/ConditionalRendiring/TernaryOperator'
//import Garage from './Components/ConditionalRendiring/Logical&&Operator'

// import NotificationMsg from './Components/ConditionalRendiring/SwitchCase'

import EnumState from "./Components/ConditionalRendiring/ConditionalEnum.jsx";

function App() {
  // let isLogin=false
  return (
    <>
      {/* <IF_Statement data={false}/> */}
      {/* <TernaryOperator isLoggedIn={isLogin?true:false}/> */}
      {/* <Garage cars={['FORD','BMW','AUDI']}/> */}

      {/* <NotificationMsg name={'Shubha'}/> */}
      <EnumState state={'dashboard'}/>
    </>
  );
}

export default App;
