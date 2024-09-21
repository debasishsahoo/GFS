import React, { useState, useEffect } from "react";

const UseEffectHooks1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return <h1>The Count is {count}</h1>;
};

export default UseEffectHooks1;
