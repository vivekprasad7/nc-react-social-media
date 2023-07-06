import React from 'react'
import "./Suggested.css"
import { useUserContext } from '../../contexts/userContext'
import { useAuthContext } from '../../contexts/authContext';
import { usePostContext } from '../../contexts/postContext';

export const Suggested = () => {
    const {userState, userLoading, followUserHandler, unfollowUserHandler} = useUserContext();
    const {authState} = useAuthContext();
    const {getAllUserPosts} = usePostContext();
  return (
    <div className='suggested'>
        <div className='suggested-title'>
            <h3>Suggested For You</h3>
        </div>

        {

        }

        <div className='follow-unit '>
           <div className='suggested-profile'>
            
            <div className='suggested-profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='follow-uname'>
                <p>Vivek Prasad</p>
                <small>@nxvivek</small>
            </div>
            </div>

            <div className='follow-btn'>
                <button>Follow</button>
            </div>
        </div>

    </div>
  )
}
