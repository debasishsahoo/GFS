import React, { useState, useEffect, useRef } from "react";

const CounterComponent = () => {
  const [inputVal, SetInputVal] = useState("");
  const count = useRef(0);

  useEffect(()=>{
    count.current=count.current+1;
  })

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => SetInputVal(e.target.value)}
      />
      <h1>The Input is:{inputVal}</h1>
      <h1>RenderCount:{count.current}</h1>
    </>
  );
};

export default CounterComponent;
