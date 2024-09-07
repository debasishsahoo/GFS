import React from 'react'

const ProductFooter = (props) => {
  return (
   <>
   <span className="foot"><i className="fa fa-shopping-bag"></i>{props.button1}</span>
   <span className="foot"><i className="fa fa-shopping-cart"></i>{props.button2}</span>
   </>
  )
}

export default ProductFooter