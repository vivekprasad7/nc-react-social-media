import React from 'react'
import "./PostCard.css"
import { usePostContext } from '../../contexts/postContext'
import { useAuthContext } from '../../contexts/authContext'
import { useState } from 'react'
import { EditPost } from '../edit-post/EditPost'


export const PostCard = ({postItem}) => {


  const {authState} = useAuthContext();
  const {content, createdAt, _id, likes, comments,  postImg, postAlt, username} = postItem

  const {likePostHandler, dislikePostHandler} = usePostContext();
  const [showEditModal, setShowEditModal] = useState(false);

  const isPostLikedByUser = () => {
    return postItem?.likes?.likedBy.find((user) => user._id === authState?.user?._id)
  }

  const likeToggle = () => {
    if(isPostLikedByUser()){
      dislikePostHandler(_id);
    } else {
      likePostHandler(_id);
    }
  }
  
  return (
    <div className='post-card'>
      {showEditModal && (<EditPost post={postItem} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>)}
         <div className='post-card-profile'>

         <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li onClick={() => setShowEditModal(!showEditModal)} className='side-nav'>Edit</li>
              <li className='side-nav'> Delete</li>
            </ul>
               
            </div>

            
            <div className='post-profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='post-card-uname'>
                <p>Vivek Prasad</p>
                <small>@{username}</small>
            </div>
            </div>

            <div className='pc-content'>
                <p>{content}</p>
                <img src={postImg} alt={postAlt}/>
                <small>{likes.likeCount} Likes {comments?.length === undefined ? 0 : comments?.length} Comments</small>
            </div>

            {/* <hr></hr> */}
            <div className='pc-links'>
                <i class="fa-sharp fa-regular fa-comment"></i>

                <div onClick={likeToggle}>
                  {
                    isPostLikedByUser() ? <i style={{color:"red"}} class="fa-solid fa-heart "></i> :
                    <i class="fa-solid fa-heart "></i>

                  }
                </div>

                <i class="fa-solid fa-share"></i>
               <i class="fa fa-bookmark"></i> 

                </div>
    </div>
  
  )
}
