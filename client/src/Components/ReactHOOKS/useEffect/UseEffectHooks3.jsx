import React, { useState, useEffect } from "react";

const UseEffectHooks3 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    console.log(`You have Click the First Button ${count1}`)
  },[count1]);

  useEffect(()=>{
    console.log(`You have Click the Second Button ${count2}`)
  },[count2]);

  return (
    <>
      <h1>The Count is {count1}</h1>
      <button onClick={()=>setCount1(count1+1)}>+</button>
      
      <h1>The Count is {count2}</h1>
      <button onClick={()=>setCount2(count2+1)}>+</button>
    </>
  );
};

export default UseEffectHooks3;
