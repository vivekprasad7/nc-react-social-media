import React from 'react'
import "./ProfileCard.css"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/userContext';
import { useState } from 'react';
import axios from 'axios';
import { usePostContext } from '../../contexts/postContext';
import { useAuthContext } from '../../contexts/authContext';

export const ProfileCard = () => {

    const {username} = useParams();
    const {userState, followUserHandler, unfollowUserHandler} = useUserContext();

    const {authState, logoutHandler} = useAuthContext();
    const {postState, getAllUserPosts} = usePostContext();
    const [userDetails, setUserDetails] = useState({});
    const [showEditBioModal, setShowEditBioModal] = useState(false);
    const [showEditMoodModal, setShowEditMoodModal] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(false);

    const getUserDetails = async () => {
        // setIsUserLoading(true);
        try{
            const {data, status} = await axios({
                method:"GET",
                url:`/api/users/${username}`,
            })
            console.log("getuserdetails", data)
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
    }, [username, userState, postState?.posts]);
    return (
        <main className='profile-card'>
            <div className='profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='profile-bio'>

                <div className='profile-title'>
                    <h3 className='profile-name'>{`${userDetails?.firstName}` +`${userDetails?.lastName}`}</h3>
                    <p className='profile-username'>@{username}</p>
                    <button className='profile-follow-btn'>Follow</button>
                </div>

                <div onClick={() => getUserDetails()} className='profile-status'>
                    <p>I am awesome.</p>
                </div>

                <div className='profile-links'>
                   

                    <div className='profile-link-unit'>
                        <h3>10</h3>
                        <p>Following</p>
                    </div>
                    <div className='profile-link-unit'>
                        <h3>2</h3>
                        <p>Posts</p>
                    </div>

                    <div className='profile-link-unit'>
                        <h3>10</h3>
                        <p>Followers</p>
                    </div>

                </div>

            </div>


        </main>
    )
}
