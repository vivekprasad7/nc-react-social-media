import React, { useEffect } from 'react'
import "./PostDetails.css"
import { usePostContext } from '../../contexts/postContext';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Widgets } from '../../components/widgets/Widgets';
import { Loading } from '../../components/loader/loading';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';
import { PostCard } from '../../components/post-card/PostCard';
import { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';

export const PostDetails = () => {
  const { postState, isLoading, getSinglePost, editCommentHandler, deleteCommentHandler } = usePostContext();

  const {userState} = useUserContext();
  const navigate = useNavigate();
  const { postID } = useParams();
  const { authState } = useAuthContext();
  const { showEditIcon, setShowEditIcon } = useState(false);


  useEffect(() => {
    getSinglePost(postID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postState?.post])



  return (
    <div className='post-details-page' >
      <Sidebar />
      <div className='post-details-section'>
        <div className='feed-top'>
          <div className='feet-title'>
            <h3>Post Details</h3>
          </div>

          {
            <div className="nav-icon">
              <i onClick={() => navigate("/")} class="fa-solid fa-arrow-left icon-circle"></i>

            </div>
          }



        </div>

        {/* {   isLoading ? (<Loading/> ): */}

         <div>
          <PostCard postItem={postState?.post} />
          <div className='comments-card'>
            <h3>Comments</h3>
            {
              postState?.post?.comments?.length > 0 ? (

                <div>
                  {
                    postState?.post?.comments?.map((item) => {

                      console.log("item", item)
                      const userWhoCommented = userState?.users?.find((user) => user?.username === item?.username)

                      return (
                        <div className='single-comment' key={item?._id}>
                          <hr></hr>
                          <div className='post-card-profile'>

                          {/* {
            authState?.user?.username === item?.username ? 
            (  
                <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li  className='side-nav'>Edit</li>
              <li className='side-nav'> Delete</li>
            </ul>
               
            </div>
            ) : (  null)
          } */}



                            {/* <div className="pd-edit-icon">
                              <i class="fa-solid fa-ellipsis icon-circle"></i>
                              <ul className='pd-dropdown'>
                                <li className='side-nav'>Edit</li>
                                <li className='side-nav'> Delete</li>
                              </ul>

                            </div> */}


                            <div className='post-profile-img'>
                            <div onClick={() =>navigate(`/profile/${userWhoCommented?.username}`)
              } className='post-profile-img'>
               <img  src={userWhoCommented?.profilePic}  alt="avatar" className='profile-pic'/>

            </div>
                            </div>
                            <div className='post-card-uname'>
                              <p>{userWhoCommented?.firstName + " " + userWhoCommented?.lastName} </p>
                              <small>@{item?.username}</small>
                            </div>
                          </div>

                          {item?.text}


                        </div>

                      )
                    })
                  }

                </div>



              ) : null
            }

          </div>
        </div>
        



      </div>
      <Widgets />
    </div>
  )
}
