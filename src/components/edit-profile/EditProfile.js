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
            <div className='edit-profile-modal'>
                <h1>Edit Profile</h1>

            </div>
        </Modal>
    )
}
