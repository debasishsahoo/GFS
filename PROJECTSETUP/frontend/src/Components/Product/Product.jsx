import React from 'react'
import {Link} from 'react-router-dom'
const Product = () => {
  return (
    <>
    <div className='register'>
    <h2> Welcome UserName</h2>
    <form>
    <input type='text' placeholder='Product Name' value={''} onChange={''}/>
    <input type='number' placeholder='Price' value={''} onChange={''}/>
    <input type='textbox' placeholder='Product Details' value={''} onChange={''}/>
    <button type='submit'>Add Product</button>
    </form>
   </div>
    <br/>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Product 1</td>
          <td>$11</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Product 2</td>
          <td>$16</td>
          <td>Edit</td>
        </tr>
      </tbody>
     </table>
    
    
    </>
    

  )
}

export default Product