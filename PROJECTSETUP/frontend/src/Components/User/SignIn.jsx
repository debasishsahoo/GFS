import React from 'react'
import {Link} from 'react-router-dom'
const SignIn = () => {
  return (
    <div className='register'>
     <h2>SignIn</h2>
     <form>
     <input type='email' placeholder='UserName' value={''} onChange={''}/>
     <input type='password' placeholder='Password' value={''} onChange={''}/>
     <button type='submit'>Login</button>
     <p>
      Don`t Have Any Account ? <Link to='/signup'>SignUp here</Link>
     </p>
     </form>
    </div>
  )
}

export default SignIn