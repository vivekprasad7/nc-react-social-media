import React from 'react'
import "./MoodsModal.css"
import { Modal } from '@mui/material'
import { useState } from 'react'
import { moods } from '../../backend/db/mood'
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
                      {/* {
                        moods?.filter((img) => img !== authState?.user?.profilePic).map((moodImg) => {
                          return(
                            <div >
                              <img className='mood-img' src={moodImg} alt="mood" onClick={() => setMood(moodImg)}/>
                            </div>
                          )
                        })
                      } */}

                      {
                        moods?.map((img) => (<div><img className='mood-img' onClick={() => setMood(img)}src={img} /></div>))
                      }

                    </div>

                    <div className='mood-btn-div'>

                    <button className='mood-btn'
                    onClick={() => {
                      if(mood?.length === 0){
                        toast.error("Pick Your Mood.")
                      } else {
                        setUserBio({...userBio, profilePic : mood})
                        setShowMoodModal(false);
                      }
                    }}>
                      Save
                    </button>
                    </div>




      </div>

    </Modal>
  )
}
