import React from 'react'
import "./PostCard.css"
import { usePostContext } from '../../contexts/postContext'
import { useAuthContext } from '../../contexts/authContext'
import { useState } from 'react'
import { EditPost } from '../edit-post/EditPost'
import { NewComment } from '../new-comment/NewComment'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'
import { useEffect } from 'react'


export const PostCard = ({postItem}) => {


  const {authState} = useAuthContext();
  const {content, createdAt, _id, likes, comments,  postImg, postAlt, username} = postItem

  const {likePostHandler, dislikePostHandler, deletePostHandler} = usePostContext();
  const {userState, addBookmarkHandler, removeBookmarkHandler} = useUserContext();
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(userState?.users?.find((user) => user.username === username));
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, userState]);


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

  const isBookmarked = () => userState?.bookmarks?.find((postID) => postID === _id)
  
  return (
    <div  className='post-card'>
      {showEditModal && (<EditPost post={postItem} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>)}
      {showCommentModal && (<NewComment showCommentModal={showCommentModal} setShowCommentModal={setShowCommentModal} postID={_id}/>)}
         <div className='post-card-profile'>

         <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li onClick={() => setShowEditModal(!showEditModal)} className='side-nav'>Edit</li>
              <li onClick={() =>deletePostHandler(_id)}className='side-nav'> Delete</li>
            </ul>
               
            </div>

            
            <div onClick={() =>navigate(`/profile/${username}`)
              } className='post-profile-img'>
               <img  src={userInfo?.profilePic}  alt="avatar" className='profile-pic'/>

            </div>
            <div onClick={() =>navigate(`/profile/${username}`)
              } className='post-card-uname'>
                <p></p>
                <small>@{username}</small>
            </div>
            </div>

            <div className='pc-content'>
                <p onClick={() => navigate(`/post/${_id}`)}>{content}</p>
                <img src={postImg} alt={postAlt}/>
                <small>{likes?.likeCount} Likes {comments?.length === undefined ? 0 : comments?.length} Comments</small>
            </div>

            {/* <hr></hr> */}
            <div className='pc-links'>
                <i onClick={() => setShowCommentModal(!showCommentModal)}class="fa-sharp fa-regular fa-comment"></i>

                <div onClick={likeToggle}>
                  {
                    isPostLikedByUser() ? <i style={{color:"red"}} class="fa-solid fa-heart "></i> :
                    <i class="fa-solid fa-heart "></i>

                  }
                </div>
                <i class="fa-solid fa-share"></i>

                {
                  isBookmarked() ? (<div className='post-icon' onClick={() => removeBookmarkHandler(_id)}>
                                   <i class="fa-solid fa-bookmark"></i> 

                  </div>) : (<div className='post-icon' onClick={() => addBookmarkHandler(_id)}>
                                   <i class="fa-regular fa-bookmark"></i> 

                  </div>)
                }


                </div>
    </div>
  
  )
}
