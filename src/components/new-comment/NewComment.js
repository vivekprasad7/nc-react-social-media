import { Modal } from '@mui/material'
import React from 'react'
import "./NewComment.css"
import { usePostContext } from '../../contexts/postContext'
import { useState } from 'react'

export const NewComment = ({showCommentModal, setShowCommentModal, postID}) => {
  const {addCommentHandler} = usePostContext();
  const [newCommentInput, setNewCommentInput] = useState("");
  

  return (
    <Modal open={showCommentModal} onClose={() => setShowCommentModal(false)}>

    <div className='new-comment-modal'>
        <textarea
        placeholder="Add Comment..."
        value={newCommentInput}
        onChange={(e) => setNewCommentInput(e.target.value)}
        >

        </textarea>
        <button onClick={()=> {
          addCommentHandler(postID, newCommentInput);
          setNewCommentInput("");
          setShowCommentModal(false);

          
          }}>Add Comment</button>

    </div>
    </Modal>
  )
}
