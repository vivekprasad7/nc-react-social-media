import React from 'react'
import "./CreatePost.css"
import { useAuthContext } from '../../contexts/authContext'
import { useState } from 'react';
import { usePostContext } from '../../contexts/postContext';
import data from "@emoji-mart/data";
import EmojiPicker from '@emoji-mart/react';


export const CreatePost = () => {
    const {displayProps, setDisplayProps} = useAuthContext();
    const {createNewPost} = usePostContext();

    const initialNewPostData = {
      content:"",
      postImg:""
    }

    const [newPostInput, setNewPostInput] = useState(initialNewPostData);
    const [media, setMedia] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  return (
    <div className='create-post' style={{display: displayProps ? "block" : "none"}}>

      <div className='modal-header'>
        <div className='modal-title'>
        <h3>Create Post</h3>
        </div>

      <div className='cp-close-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-close icon-circle"></i>
      </div>
      </div>


        <div className='cp-text-area'>

        <textarea 
        value={newPostInput?.content}
        placeholder="What's on your mind?"
        onChange={(e) => setNewPostInput({...newPostInput, content: e.target.value})}    
        >
        </textarea>
        </div>



        {
          media && <div className='new-post-img'>

          <i onClick={() => {setMedia(null); setNewPostInput({...newPostInput, postImg:""})}} class="fa-solid fa-close icon-circle np-close"></i>

          <img 
          src={URL.createObjectURL(media)}
          alt="view"
          className='new-post-image'
          />

          </div>
        }

        <div className='cp-links'>

          <div className='cp-icons'>
            
          <div style={{position:"relative"}}>
            <label onClick={() => setShowEmojiPicker(!showEmojiPicker) } >
            <i className="fa-regular fa-face-smile"></i>
            </label>

            {
              showEmojiPicker && (
                <div className='emoji-picker' onClick={() => setShowEmojiPicker(true)}>
                   <EmojiPicker
                    data={data}
                    maxFrequentRows={0}
                    previewPosition="none"
                    emojiButtonSize={28}
                    emojiSize={20}
                    onEmojiSelect={(emoji) => {
                      setNewPostInput({
                        ...newPostInput,
                        content: newPostInput.content + emoji.native,
                      });
                    }}
                    />

                </div>
              )
            }
            </div>

           

          <div className='cp-icons'>
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
