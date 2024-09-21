import React,{useState} from 'react'

const UseStateHook1 = () => {

    const [counter,setCounter]=useState(0);

    const Increment=()=>{
        setCounter(counter+1);
    }
    const Decrement=()=>{
        setCounter(counter-1);
    }



  return (
    <div>
        <h1>useStateHook1</h1>
        <button onClick={Increment}>+</button>
        <h1>{counter}</h1>
        <button onClick={Decrement}>-</button>

    </div>
  )
}

export default UseStateHook1