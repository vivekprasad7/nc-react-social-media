import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/authContext';
import fictionCat from "../../../assets/animations/fictionCat.json"
import Lottie from "lottie-react"

export const Signup = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { signupHandler } = useAuthContext();

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
  })

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupDetails)
  }



  // const userDetails = {
  //     firstName: "Arya",
  //     lastName:"Shah",
  //     email:"aryashah@gmail.com",
  //     userName:"aryashah",
  //     password:"aryashah",
  //     confirmPassword:"aryashah"
  // }

  // const {firstName, lastName, email, userName, password, confirmPassword, } = userDetails;
  return (
    <div className='signup'>
      <div className='signup-wp-container'>
        <h1 className='auth-heading'>Sign Up</h1>
        {/* <div className="cat">
          <Lottie animationData={fictionCat} />
        </div> */}
        {/* <h3 className='slogan'><span className='white'>#Be</span>Authentic</h3> */}

      </div>
      <div className='signup-form-container'>

        <form onSubmit={signupSubmitHandler} className='signup-form'>
          <div className='form-flex-display'>
            <div className='form-unit'>
              <label>First Name:</label>

              <div className='input-field'>
                <input
                  required
                  id="firstName"
                  value={signupDetails.firstName}
                  placeholder='Arya'
                  name="firstName"
                  onChange={(e) =>
                    setSignupDetails({ ...signupDetails, firstName: e.target.value })
                  }

                />
              </div>

            </div>
            <div className='form-unit'>
              <label>Last Name:</label>
              <div className='input-field'>

                <input
                  required
                  id="lastName"
                  value={signupDetails.lastName}
                  placeholder='Shah'
                  name="lastName"
                  onChange={(e) =>
                    setSignupDetails({ ...signupDetails, lastName: e.target.value })
                  }

                />
              </div>
            </div>
          </div>

          <div className='form-block-display'>
            <div className='form-unit'>
              <label>Email: </label>
              <div className='input-field'>

                <input
                  required
                  id="email"
                  value={signupDetails.email}
                  placeholder='aryashah@gmail.com'
                  name="email"
                  onChange={(e) =>
                    setSignupDetails({ ...signupDetails, email: e.target.value })
                  }

                />
              </div>
            </div>
          </div>

          <div className='form-block-display'>
            <div className='form-unit'>
              <label>Username: </label>
              <div className='input-field'>

                <input
                  required
                  id="username"
                  value={signupDetails.username}
                  placeholder='aryashah'
                  name="username"
                  onChange={(e) =>
                    setSignupDetails({ ...signupDetails, username: e.target.value })
                  }

                />
              </div>


            </div>
          </div>

          <div className='form-block-display'>
            <div className='form-unit'>
              <label>Password:  </label>
              <div className='input-field'>
                <input
                  className='signup-pwd-input'
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  id="password"
                  placeholder={isPasswordVisible ? "password" : "********"}
                  value={signupDetails.password}
                  name="password"
                  onChange={(e) => setSignupDetails({
                    ...signupDetails,
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

              </div>


            </div>
          </div>



          <div className='form-block-display'>
            <div className='form-unit'>
              <button className='login-btn' type="submit" value="Sign Up">Sign Up!</button>
            </div>
          </div>

          <div className='form-block-display'>
            <p>Already have an Account? <Link to="/login">Log In</Link></p>
          </div>




        </form>

      </div>

    </div>
  )
}
