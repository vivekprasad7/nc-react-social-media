import React from 'react'
import "./Login.css"
import { useAuthContext } from '../../../contexts/authContext'

export const Login = () => {

  const {loginHandler} = useAuthContext();

  const userCreds = {username:"aryashah", password:"aryashah123"};
  


  const userDetails = {
    firstName: "Arya",
    lastName:"Shah",
    email:"aryashah@gmail.com",
    userName:"aryashah",
    password:"aryashah",
    confirmPassword:"aryashah"
}

const {firstName, lastName, userName, password, confirmPassword, } = userDetails;


  return (
    <div className='login-page'>
    <div className='login-wp-container'>

    </div>
    <div className='login-form-container'>
        
        <div className='login-form'>

          <h1 onClick={() => loginHandler(userCreds)}>Login </h1>
          

            <div className='form-block-display'>
            <div className='form-unit'>
                <label>Username: <input id="userName" value={userName}  placeholder='aryashah' /></label>
            </div>
            </div>

            <div className='form-block-display'>
            <div className='form-unit'>
                <label>Password: <input id="password" type="password" value={password} /></label>
            </div>
            </div>


            <div className='form-block-display'>
            <div className='form-unit'>
                <button>Login</button>
            </div>
            </div>


           

        </div>

    </div>

</div>
  )
}
