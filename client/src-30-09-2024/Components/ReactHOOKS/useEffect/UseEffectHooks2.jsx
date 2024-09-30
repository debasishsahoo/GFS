import React, { useState, useEffect } from "react";

const UseEffectHooks2 = () => {
  const [count, setCount] = useState(0);
  const [cal,setCal]=useState(0)

  useEffect(() => {
    setCal(()=>count*2)
  }, [count]);



  return (
    <>
      <h1>The Count is {count}</h1>
      <button onClick={()=>setCount((c)=>c+1)}>+</button>
      <h2>Calculation:{cal}</h2>
    </>
  );
};

export default UseEffectHooks2;
