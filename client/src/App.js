import React from "react";
import IF_Statement from './Components/ConditionalRendiring/IF_Statement'
import TernaryOperator from './Components/ConditionalRendiring/TernaryOperator'
import Garage from './Components/ConditionalRendiring/Logical&&Operator'
function App() {
  let isLogin=false
  return (
    <>
    {/* <IF_Statement data={false}/> */}
    {/* <TernaryOperator isLoggedIn={isLogin?true:false}/> */}
    <Garage cars={['FORD','BMW','AUDI']}/>

    </>
  );
}

export default App;
