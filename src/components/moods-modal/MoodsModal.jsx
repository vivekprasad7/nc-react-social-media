import React from 'react'
import "./MoodsModal.css"
import { Modal } from '@mui/material'
import { useState } from 'react'
import { moods } from '../../backend/db/mood'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { useAuthContext } from '../../contexts/authContext'
import { toast } from 'react-hot-toast'

export const MoodsModal = ({showMoodModal, setShowMoodModal, userBio, setUserBio}) => {

  const [mood, setMood] = useState("")
  const {authState} = useAuthContext();



  return (
    <Modal
    open={showMoodModal}
    onClose={()=>setShowMoodModal(false)}
    >
      <div className='moods-modal' style={{ display: showMoodModal ? "block" : "none" }}>
                    <div className='edit-profile-title'>
                        <div className='ep-title'>
                            <h3>Pick Your Mood</h3>
                        </div>
                        <div className='ep-close-icon'>
                            <i onClick={() => setShowMoodModal(!showMoodModal)} class="fa-solid fa-close icon-circle"></i>
                        </div>
                    </div>

                    <div className='mood-icons'>
                      {
                        moods?.filter((img) => img !== authState?.user?.profilePic)
                        .map((moodImg) => {
                          return(
                            <div >
                              <img className='mood-img' src={moodImg} alt="mood" onClick={() => setMood(moodImg)}/>
                            </div>
                          )
                        })
                      }

                    </div>

                    <button
                    onClick={() => {
                      if(mood.length === 0){
                        toast.warning("Pick Your Mood.")
                      } else {
                        setUserBio({...userBio, profilePic : mood})
                        setShowMoodModal(false);
                      }
                    }}>
                      Save
                    </button>



      </div>

    </Modal>
  )
}
