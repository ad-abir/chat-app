import React from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo "/>
      <form className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" className="form-input" required/>
        <input type="email" placeholder="Email address" className="form-input" required/> 
        <input type="password" placeholder="Password" className="form-input" required/>
        <button type='submit'>Sign Up</button>

        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  )
}

export default Login