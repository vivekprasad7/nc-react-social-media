import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='register'>
        <h2>Cardz</h2>
        <h1>Join us today!</h1>
        <button onClick={() => navigate("/signup")}>Join Now</button>
        <p>Already have an account? <Link to="/login">Log In</Link></p>


    </div>
  )
}
