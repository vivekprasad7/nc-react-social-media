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

export const PostDetails = () => {
  const { postState, isLoading, getSinglePost } = usePostContext();
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

                      return (
                        <div className='single-comment' key={item?._id}>
                          <hr></hr>
                          <div className='post-card-profile'>


                            <div className="pd-edit-icon">
                              <i class="fa-solid fa-ellipsis icon-circle"></i>
                              <ul className='pd-dropdown'>
                                <li className='side-nav'>Edit</li>
                                <li className='side-nav'> Delete</li>
                              </ul>

                            </div>


                            <div className='post-profile-img'>
                              <i class="fa fa-circle"></i>
                            </div>
                            <div className='post-card-uname'>
                              <p>{authState?.user?.firstName + " " + authState?.user?.lastName} </p>
                              <small>@{item?.username}</small>
                            </div>
                          </div>

                          {item?.comment}


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
