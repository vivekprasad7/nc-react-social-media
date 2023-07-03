import React from 'react'
import "./EditPost.css"
import { Modal } from '@mui/material'
import { useState } from 'react'
import { usePostContext } from '../../contexts/postContext'

export const EditPost = ({post, showEditModal, setShowEditModal}) => {

    const {editPostHandler} = usePostContext();

    const [editPostInput, setEditPostInput] = useState({
        _id: post?._id,
        content:post?.content,
        postImg:post?.postImg,
    })


  return (
    <Modal  open={showEditModal} onClose={() => setShowEditModal(false)}>
    <div className='edit-post-modal'  style={{display: showEditModal ? "block" : "none"}}>
        <div className='edit-post-title'>
            <div className='ep-title'>

            <h3>Edit Post</h3>
            </div>
            <div className='ep-close-icon'>
          <i onClick={() => setShowEditModal(!showEditModal)} class="fa-solid fa-close icon-circle"></i>
      </div>
        </div>

      {
        post?.content && 
        <div className='edit-post-content'>
            <textarea
            value={editPostInput?.content}
            onChange={(e) =>setEditPostInput({...editPostInput,  content: e.target.value})}
            className='ep-textarea'
            >
            </textarea>

        </div>
      }

      {
        editPostInput?.postImg && 
        (<div className='edit-post-image'>
            <i
              onClick={() => setEditPostInput({ ...editPostInput, postImg: "" })}
              className="fa-solid fa-circle-xmark ep-img-close" ></i>
              <img 
              className='ep-img'
              src={editPostInput?.postImg}
              alt="media"
              />
        </div>)
      }


        <div className='edit-post-buttons'>
        <div>
            <label>
            <i className="fa-regular fa-image"></i>
            <input
            style={{display:"none"}}
            type="file"
            accept='/image*'
            onChange={(e) => {
              setEditPostInput({...editPostInput,
              postImg:URL.createObjectURL(e.target.files[0])
              })
            } }
            />
            </label>

          </div>

            <button onClick={() => {
                editPostHandler(editPostInput?._id, editPostInput);
                setShowEditModal(false);
            }}className='ep-btn'>Save</button>
            
            
        </div>

    </div>
    </Modal>
  )
}
