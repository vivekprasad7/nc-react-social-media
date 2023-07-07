import React from 'react'
import "./Suggested.css"
import { useUserContext } from '../../contexts/userContext'
import { useAuthContext } from '../../contexts/authContext';
import { usePostContext } from '../../contexts/postContext';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../loader/loading';

export const Suggested = () => {
    const {userState, userLoading, followUserHandler, unfollowUserHandler} = useUserContext();
    const {authState} = useAuthContext();
    const {getAllUserPosts} = usePostContext();
    const navigate = useNavigate();

    const isFollowedByUser = (userID) => 
         userState?.users?.find((user) => user._id === userID)
        ?.followers.some((user) => user._id === authState?.user?._id);
    

  return (
    <div className='suggested'>
        <div className='suggested-title'>
            <h3>Suggested For You</h3>
        </div>

        {
            userLoading ? (<Loading/>) : 
            (
                userState?.users?.slice(0,6).map((user) => {

                    return(
                        <>
                            {
                                user?.username !== authState?.user.username ? (
                                    
                        <div key={user._id} className='follow-unit '>
                        <div className='suggested-profile'>
                         
                         <div onClick={() => {
                            getAllUserPosts(user?.username);
                            navigate(`/profile/${user?.username}`)
                         }} className='suggested-profile-img'>
                             {/* <i class="fa fa-circle"></i> */}
                             <img  src={user?.profilePic}  alt="avatar" className='profile-pic'/>
                         </div>
                         <div className='follow-uname'>
                             <p>{`${user?.firstName} ${user?.lastName}`}</p>
                             <small>@{user?.username}</small>
                         </div>
                         </div>

                       

                         {
                            isFollowedByUser(user?._id) ? (
                        <div onClick={() => unfollowUserHandler(user?._id)} className='follow-btn'> 
                             <button>Following</button>
                         </div>
                            ) : (
                                <div onClick={() => followUserHandler(user?._id)} className='follow-btn'> 
                             <button>Follow</button>
                         </div>
                            )
                         }
             
                         
                     </div>

                                ) : null    
                            }
                        </>



                    )
                })
            )
        }

        {/* <div className='follow-unit '>
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
        </div> */}

    </div>
  )
}
