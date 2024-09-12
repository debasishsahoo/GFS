import React from 'react'

const Garage = (props) => {
    const cars=props.cars;
    const noCars=cars.length
  return (
    <>
    <h1>Garage</h1>
    {noCars >0 && <h2>You have {noCars} cars is Your Garage</h2>}
    </>
  )
}

export default Garage