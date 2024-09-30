import React, { useState, createContext,useContext } from "react";
import ReactDom from 'react-dom/client'
const UserContext = createContext();
function Component1(){
  const [user, setUser] = useState("Debasish");

  return (
    <UserContext.Provider value={user}>
      <>
        <h1>This is Component 1</h1>
        <h2>{`Hello from Component 1 ${user}`}</h2>
        <Component2/>
      </>
    </UserContext.Provider>
  );
};

function Component2(){
  return (
    <>
        <h1>Component2</h1>
        <Component3/>
    </>
  )
}

function Component3(){
  return (
    <>
        <h1>Component3</h1>
        <Component4/>
    </>
  )
}

function Component4 (){
  const user=useContext(UserContext)
  return (
    <>
      <h1>Component4</h1>
      <h2>{`Hello user ${user}`}</h2>
    </>
  );
};
export default Component1;
