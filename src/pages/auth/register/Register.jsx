import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import socialMedia from "../../../assets/animations/socialMedia.json"
import Lottie from "lottie-react"

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='register'>
      <div className='register-text'>
      <h2>Cardz</h2>
      <p>No Rate Limits. No Bluemarks. Just Vanilla People having the time of their lives! </p>
        <h1>Join us today!</h1>
        <button onClick={() => navigate("/signup")}>Join Now</button>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>

      {/* <div className='register-animation'>
      <div className="cat">
    <Lottie animationData={socialMedia} />
    </div>
      </div> */}
        


    </div>
  )
}
