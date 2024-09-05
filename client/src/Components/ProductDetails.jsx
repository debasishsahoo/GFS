import React from 'react'

const ProductDetails = (props) => {
    return (
        <div className="details">
        <h3>{props.headline1}</h3>
        <h2>{props.headline2}</h2>
        <h4><span className="fa fa-dollar"></span>{props.price1}</h4>
        <h4 className="dis"><span className="fa fa-dollar"></span>{props.price2}</h4>
      </div>
    )
}

export default ProductDetails
