import React from 'react'
import "./CreatePost.css"
import { useAuthContext } from '../../contexts/authContext'


export const CreatePost = () => {
    const {displayProps, setDisplayProps} = useAuthContext();
  return (
    <div className='create-post'>
        <textarea placeholder="What's on your mind?" >

        </textarea>

        <div className='cp-links'>
            <p>Post</p>
            <p>Image</p>
        </div>

    </div>
  )
}
