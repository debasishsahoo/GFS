import React from 'react'

const ProductHeader = (props) => {
    return (
        <div className="product-name">
        <h1>{props.name}</h1>
        <i className="fa fa-search"></i>
        <i className="fa fa-user"></i>
        <i className="fa fa-shopping-cart"></i>
      </div>
    )
}

export default ProductHeader
