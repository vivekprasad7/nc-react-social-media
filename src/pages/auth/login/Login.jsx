import React from 'react'
import "./Login.css"
import { useAuthContext } from '../../../contexts/authContext'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {

  const {loginHandler} = useAuthContext();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const guestUserCreds = {username:"aryashah", password:"aryashah123"};
  

  const [loginDetails, setLoginDetails] = useState({
    username:"",
    password:"",
  });

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  }


  const {username, password} = loginDetails;



  return (
    <div className='login-page'>
    <div className='login-wp-container'>

    </div>
    <div className='login-form-container'>
        
        <form onSubmit={loginSubmitHandler} className='login-form'>

          <h1 onClick={() => loginHandler(guestUserCreds)}>Login </h1>
          

            <div className='form-block-display'>
            <div className='form-unit'>
                <label>Username: 
                <input
                 required 
                 id="username"
                 placeholder='aryashah'
                 value={loginDetails.username}
                 name="username"
                 onChange={(e) => setLoginDetails({
                  ...loginDetails,
                  username: e.target.value,
                 })}

                /></label>
            </div>
            </div>

            <div className='form-block-display'>
            <div className='form-unit'>
            <label>Password: 
                <input
                className='login-pwd-input'
                type={isPasswordVisible ? "text" : "password"}
                 required 
                 id="password"
                 placeholder={isPasswordVisible ? "password" : "********"}
                 value={loginDetails.password}
                 name="password"
                 onChange={(e) => setLoginDetails({
                  ...loginDetails,
                  password: e.target.value,
                 })}
                />
                {isPasswordVisible ? (
              <i
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="fa-regular fa-eye-slash pwd-eye"
              ></i>
            ) : (
              <i
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="fa-regular fa-eye pwd-eye"
              ></i>
            )}  
                </label>
            </div>
            </div>


            <div className='form-block-display'>
            <div className='form-unit'>
                <button type="submit" value="Log In">Login</button>
            </div>
            </div>

            <div className='form-block-display'>
            <div className='form-unit'>
                <button 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginDetails(guestUserCreds);
                  loginHandler(guestUserCreds);
                }}
                >Login as Guest</button>
            </div>
            </div>

            <div className='form-block-display'>
           <p>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
            </div>


           

        </form>

    </div>

</div>
  )
}
