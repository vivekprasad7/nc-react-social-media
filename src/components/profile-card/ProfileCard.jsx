import React from 'react'
import "./ProfileCard.css"
import { useUserContext } from '../../contexts/userContext';
import { useState } from 'react';
import { usePostContext } from '../../contexts/postContext';
import { useAuthContext } from '../../contexts/authContext';
import { Loading } from '../loader/loading';
import { EditProfile } from '../edit-profile/EditProfile';

export const ProfileCard = ({ userDetails, isUserLoading }) => {

    const { userState, followUserHandler, unfollowUserHandler } = useUserContext();

    const { authState } = useAuthContext();
    const { postState } = usePostContext();
    const [showEditBioModal, setShowEditBioModal] = useState(false);


    const isFollowedByUser =
        (userID) => userState?.users?.find((user) => user?._id === userID)?.followers?.some((user) => user?._id === authState?.user?._id);

    return (
        <>

            {isUserLoading ? <Loading /> :

                (

                    <main className='profile-card'>
                        {showEditBioModal && (
                            <EditProfile userDetails={userDetails} showEditBioModal={showEditBioModal} setShowEditBioModal={setShowEditBioModal} />)
                        }

                        <div className='profile-img'>
                            <i class="fa fa-circle"></i>
                        </div>
                        <div className='profile-bio'>

                            <div className='profile-title'>
                                <h3 className='profile-name'>{`${userDetails?.firstName} ${userDetails?.lastName}`}</h3>
                                <p className='profile-username'>@{`${userDetails?.username}`}</p>


                                {userDetails?.username === authState?.user?.username ?

                                    (<button onClick={() => setShowEditBioModal(!showEditBioModal)} className='profile-follow-btn'>Edit</button>
                                    ) :

                                    (isFollowedByUser(userDetails?._id) ?
                                        (<button onClick={() => unfollowUserHandler(userDetails?._id)} className='profile-follow-btn'>Unfollow</button>)
                                        : (<button onClick={() => followUserHandler(userDetails?._id)} className='profile-follow-btn'>Follow</button>))

                                }
                            </div>

                            <div className='profile-status'>
                                {userDetails?.status ? <p><b>{userDetails?.status}</b></p> : null}
                                {userDetails?.website ? <p> <i class="fa-solid fa-link"></i> {userDetails?.website}</p> : null}
                            </div>

                            <div className='profile-links'>


                                <div className='profile-link-unit'>
                                    <h3>{userDetails?.following?.length}</h3>
                                    <p>Following</p>
                                </div>
                                <div className='profile-link-unit'>
                                    <h3>{postState?.userPosts?.length}</h3>
                                    <p>Posts</p>
                                </div>

                                <div className='profile-link-unit'>
                                    <h3>{userDetails?.followers?.length}</h3>
                                    <p>Followers</p>
                                </div>

                            </div>

                        </div>



                    </main>
                )}
        </>
    )
}
