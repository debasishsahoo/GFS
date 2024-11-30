import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='register'>
    <h2>SignUp</h2>
    <form>
    <input type='email' placeholder='UserName' value={''} onChange={''}/>
    <input type='password' placeholder='Password' value={''} onChange={''}/>
    <button type='submit'>Register</button>
    <p>
    Already Have an Account ? <Link to='/'>Login here</Link>
    </p>
    </form>
   </div>
  )
}

export default SignUp