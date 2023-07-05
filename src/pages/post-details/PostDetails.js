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
    const {postState, isLoading, getSinglePost} = usePostContext();
    const navigate = useNavigate();
    const {postID} = useParams();
    const {authState} = useAuthContext();
    const {showEditIcon, setShowEditIcon} = useState(false);


    useEffect(()=>{
        getSinglePost(postID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[postState?.post])


    
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
              <i  onClick={() => navigate("/")}class="fa-solid fa-arrow-left icon-circle"></i>
           
            </div>
          }

           
      
        </div>

        {/* {   isLoading ? (<Loading/> ): */}
        
              ( <div>
                <PostCard postItem={postState?.post}/>
                <div className='comments-card'>
                        <h3>Comments</h3>

                </div>
                </div>
              )
            
        }

            </div>
            <Widgets />
        </div>
    )
}
