import React from 'react'
import "./CreatePost.css"
import { useAuthContext } from '../../contexts/authContext'
import { useState } from 'react';
import { usePostContext } from '../../contexts/postContext';


export const CreatePost = () => {
    const {displayProps, setDisplayProps} = useAuthContext();
    const {createNewPost} = usePostContext();

    const initialNewPostData = {
      content:"",
      postImg:""
    }

    const [newPostInput, setNewPostInput] = useState(initialNewPostData);
    const [media, setMedia] = useState(null);
    const [emoji, setEmoji] = useState(false);

  return (
    <div className='create-post' style={{display: displayProps ? "block" : "none"}}>

      <div className='cp-close-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-close icon-circle"></i>
      </div>


      <h3>Create Post</h3>
        <textarea 
        value={newPostInput?.content}
        placeholder="What's on your mind?"
        onChange={(e) => setNewPostInput({...newPostInput, content: e.target.value})}    
        >
        </textarea>

        {
          media && <div>

          <i onClick={() => {setMedia(null); setNewPostInput({...newPostInput, postImg:""})}} class="fa-solid fa-close icon-circle"></i>

          <img 
          src={URL.createObjectURL(media)}
          alt="view"
          className='new-post-img'
          />

          </div>
        }

        <div className='cp-links'>

          <div>
            <label>
            <i className="fa-regular fa-image"></i>
            <input
            style={{display:"none"}}
            type="file"
            accept='/image*'
            onChange={(e) => {
              setMedia(e.target.files[0])
              setNewPostInput({...newPostInput,
              postImg:URL.createObjectURL(e.target.files[0])
              })
            } }
            />
            </label>

          </div>
            <button onClick={()=> {
              createNewPost(newPostInput);
              setNewPostInput(initialNewPostData);
              setMedia(null);
              setDisplayProps(false)
            }}
            disabled={newPostInput?.content === "" && newPostInput?.postImg === ""}
            className=''
  
            >Post</button>
        </div>

    </div>
  )
}
