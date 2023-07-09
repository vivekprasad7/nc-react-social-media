import { Modal } from '@mui/material'
import React from 'react'
import "./EditProfile.css"
import { useState } from 'react';

export const EditProfile = ({showEditBioModal, setShowEditBioModal}) => {
    const [showEditMoodModal, setShowEditMoodModal] = useState(false);

    return (
        <Modal
        open={showEditBioModal}
        onClose={() => setShowEditBioModal(false)}
        >
            <div className='edit-profile-modal'  style={{display: showEditBioModal ? "block" : "none"}}>
        <div className='edit-profile-title'>
            <div className='ep-title'>

            <h3>Edit Profile</h3>
            </div>
            <div className='ep-close-icon'>
          <i onClick={() => setShowEditBioModal(!showEditBioModal)} class="fa-solid fa-close icon-circle"></i>
      </div>

      <div className='edit-profile-images'>
        <div className='edit-pp'>
            <img />
        </div>
        <div className='edit-mood'>
            <img/>
        </div>
      </div>


        {/* </div>

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

          </div> */}

            <button onClick={() => {
                // editPostHandler(editPostInput?._id, editPostInput);
                setShowEditBioModal(false);
            }}className='ep-btn'>Save</button>
            
            
        </div>

    </div>
            
        </Modal>
    )
}
