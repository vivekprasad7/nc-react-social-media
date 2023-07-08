import React from 'react'
import "./Profile.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Widgets } from '../../components/widgets/Widgets'
import { ProfileCard } from '../../components/profile-card/ProfileCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext'
import { usePostContext } from '../../contexts/postContext'
import { useUserContext } from '../../contexts/userContext'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const Profile = () => {
    const navigate = useNavigate();

    const {username} = useParams();
    const {authState, logoutHandler} = useAuthContext();
    const {postState, getAllUserPosts} = usePostContext();
    const {userState, followUserHandler, unfollowUserHandler} = useUserContext();
    const {userDetails, setUserDetails} = useState({});
    const [showEditBioModal, setShowEditBioModal] = useState(false);
    const [showEditMoodModal, setShowEditMoodModal] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(false);

    const getUserDetails = async () => {
        setIsUserLoading(true);
        try{
            const {data, status} = await axios({
                method:"GET",
                url:`/api/users/${username}`,
            })
            if(status === 200 || status === 201){
                setUserDetails(data?.user);
                getAllUserPosts(username);
                setIsUserLoading(false);
            }
        } catch(e){
            console.error(e);
            setIsUserLoading(false);
        }
    }
 
    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username, userState, postState?.post]);


    const isFollowedByUser = (userID) => userState?.users?.find((user) => user._id === userID)
    ?.followers.some((user) => user._id === authState?.user?._id);


  return (
    <div className='profile-page'>
        <Sidebar/>

        

        <div className='feed'>
        <div className='feed-top'>
          <div className='feet-title'>
              <h3>Profile</h3>
          </div>

          
            <div className="nav-icon">
              <i  onClick={() => navigate("/")}class="fa-solid fa-arrow-left icon-circle"></i>
            </div>
      
        </div>

        <ProfileCard userDetails={userDetails}/>

    </div>
        <Widgets/>
        

    </div>
  )
}
