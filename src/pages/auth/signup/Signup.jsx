import React from 'react'
import "./Signup.css"

export const Signup = () => {

    const userDetails = {
        firstName: "Arya",
        lastName:"Shah",
        email:"aryashah@gmail.com",
        userName:"aryashah",
        password:"aryashah",
        confirmPassword:"aryashah"
    }

    const {firstName, lastName, email, userName, password, confirmPassword, } = userDetails;
  return (
    <div className='signup'>
        <div className='signup-wp-container'>

        </div>
        <div className='signup-form-container'>
            
            <div className='signup-form'>
                <div className='form-flex-display'>
                <div className='form-unit'>
                    <label>First Name: <input id="firstName" value={firstName}  placeholder='Arya' /></label>
                </div>
                <div className='form-unit'>
                    <label>Last Name: <input id="lastName" value={lastName}  placeholder='Shah' /></label>
                </div>
                </div>

                <div className='form-block-display'>
                <div className='form-unit'>
                    <label>Username: <input id="userName" value={userName}  placeholder='aryashah' /></label>
                </div>
                </div>

                <div className='form-block-display'>
                <div className='form-unit'>
                    <label> Email: <input id="email"  value={email} placeholder='aryashah@gmail.com' /></label>
                </div>
                </div>

                <div className='form-block-display'>
                <div className='form-unit'>
                    <label>Password: <input id="password" type="password" value={password} /></label>
                </div>
                </div>

                

                <div className='form-block-display'>
                <div className='form-unit'>
                    <button>Sign Up!</button>
                </div>
                </div>


               

            </div>

        </div>

    </div>
  )
}
