import React, { useState } from "react";

const UseStateHook2 = () => {
  const [useInput, setUserInput] = useState("This is Sample Text");
  
  let UserInput = (event) => {
    let input = event.target.value;
    setUserInput(input);
  };
  return (
    <div>
      <h1>UseStateHook2 Example</h1>
      <input placeholder="Enter Something...." onChange={UserInput}/>
      <div>
        <h1>{useInput}</h1>
      </div>
    </div>
  );
};

export default UseStateHook2;
