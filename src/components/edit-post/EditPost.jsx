import React from 'react'
import "./EditPost.css"

export const EditPost = ({post, showEditModal, setShowEditModal}) => {
  return (
    <div className='edit-post-modal' style={{display: showEditModal ? "block" : "none"}}>
        <div className='edit-post-title'>
            <h3>Edit Post</h3>
            <div className='ep-close-icon'>
          <i onClick={() => setShowEditModal(!showEditModal)} class="fa-solid fa-close icon-circle"></i>
      </div>
        </div>

        <div className='edit-post-content'>

        </div>

        <div className='edit-post-buttons'>
            
        </div>

    </div>
  )
}
