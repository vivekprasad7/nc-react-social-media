import React from 'react'
import "./CreatePost.css"
import { useAuthContext } from '../../contexts/authContext'


export const CreatePost = () => {
    const {displayProps, setDisplayProps} = useAuthContext();
  return (
    <div className='create-post' style={{display: displayProps ? "block" : "none"}}>

      <div className='cp-close-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-close icon-circle"></i>
      </div>


      <h3>Create Post</h3>
        <textarea placeholder="What's on your mind?" >

        </textarea>

        <div className='cp-links'>
            <p>Post</p>
            <p>Image</p>
            <button>Post</button>
        </div>

    </div>
  )
}
