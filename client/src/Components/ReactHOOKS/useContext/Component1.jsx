import React, { useState } from 'react'
import Component2 from './Component2'

const Component1 = () => {
    const [user,setUser]=useState('Debasish')
  return (
    <div>
        <h1>This is Component 1</h1>
        <h2>{`Hello from Component 1 ${user}`}</h2>
        <Component2 user={user}/>
    </div>
  )
}

export default Component1