import React from 'react'

const ProductSize = (props) => {
  const listOfSize=props.sizes.map((size,index)=>{
    return <li className="bg" key={index}>{size}</li>
  });
    return (
        <ul>
        <li>SIZE</li>
        {listOfSize}
      </ul>
    )
}

export default ProductSize
