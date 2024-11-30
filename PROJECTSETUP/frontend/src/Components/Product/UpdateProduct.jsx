import React from 'react'

const UpdateProduct = () => {
  return (
    <div className='register'>
    <h2> Welcome UserName</h2>
    <form>
    <input type='text' placeholder='Product Name' value={''} onChange={''}/>
    <input type='number' placeholder='Price' value={''} onChange={''}/>
    <input type='textbox' placeholder='Product Details' value={''} onChange={''}/>
    <button type='submit'>Update Product</button>
    </form>
   </div>
  )
}

export default UpdateProduct