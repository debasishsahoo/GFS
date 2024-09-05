import React from 'react'

const ProductColor = (props) => {
  const listOfColor=props.colors.map((color,index)=>{
    return <li className={color} key={index}></li>
  });
    return (
        <ul>
          <li>COLOR</li>
          {listOfColor}
        </ul>
    )
}

export default ProductColor
