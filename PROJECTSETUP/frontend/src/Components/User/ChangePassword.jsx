import React from 'react'
import {Link} from 'react-router-dom'
const ChangePassword = () => {
  return (
    <div className='register'>
     <h2>Change Password</h2>
     <form>
     <input type='password' placeholder='Old Password' value={''} onChange={''}/>
     <input type='password' placeholder='New Password' value={''} onChange={''}/>
     <button type='submit'>Change Password</button>
     <p>
     Please  <Link to='/'>Login here</Link>
     </p>
     </form>
    </div>
  )
}

export default ChangePassword