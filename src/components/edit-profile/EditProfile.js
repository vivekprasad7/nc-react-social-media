import { Modal } from '@mui/material'
import React from 'react'
import "./EditProfile.css"
import { useState } from 'react';
import { useAuthContext } from '../../contexts/authContext';
import { MoodsModal } from '../moods-modal/MoodsModal';
import { useUserContext } from '../../contexts/userContext';

export const EditProfile = ({ userDetails, showEditBioModal, setShowEditBioModal }) => {
    const { authState } = useAuthContext();
    const { editUserHandler } = useUserContext();
    const [profilePic, setProfilePic] = useState(null);
    const [showMoodModal, setShowMoodModal] = useState(false);

    const [userBio, setUserBio] = useState({
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
        profilePic: userDetails?.profilePic,
        status: userDetails?.status,
        website: userDetails?.website,
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserBio((userBio) => ({ ...userBio, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        editUserHandler(userBio);
        setShowEditBioModal(false);
    }

    return (
        <>{
            showMoodModal && (<MoodsModal userBio={userBio} setUserBio={setUserBio} showMoodModal={showMoodModal} setShowMoodModal={setShowMoodModal} />)
        }
            <Modal
                open={showEditBioModal}
                onClose={() => setShowEditBioModal(false)}
            >
                <div className='edit-profile-modal' style={{ display: showEditBioModal ? "block" : "none" }}>
                    <div className='edit-profile-title'>
                        <div className='ep-title'>

                            <h3>Edit Profile</h3>
                        </div>
                        <div className='ep-close-icon'>
                            <i onClick={() => setShowEditBioModal(!showEditBioModal)} class="fa-solid fa-close icon-circle"></i>
                        </div>


                    </div>
                    <form className='edit-profile-form' onSubmit={submitHandler}>
                        <img
                            src={userBio?.profilePic}
                            alt="avatar"
                            className='ep-pp'
                        />

                        <div className='eb-buttons'>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowMoodModal(!showMoodModal)
                                }}
                                className='ep-mood-toggle'
                            >What's Your Mood?</button>

                            <label>
                                <p className='eb-edit-pic'>Edit Profile Pic</p>
                                <input
                                    className='hidden'
                                    type='file'
                                    accept='/image*'
                                    onChange={(e) => {
                                        setUserBio({
                                            ...userBio,
                                            profilePic: URL.createObjectURL(e.target.files[0]),
                                        })
                                    }}
                                />
                            </label>
                        </div>

                        <div className='eb-inputs'>
                            <div className='eb-form-unit'>
                                <label>
                                    First Name
                                </label>
                                <input
                                    value={userBio?.firstName}
                                    name="firstName"
                                    className='edit-first-name'
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className='eb-form-unit'>
                                <label>
                                    Last Name
                                </label>
                                <input
                                    value={userBio?.lastName}
                                    name="lastName"
                                    className='edit-last-name'
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className='eb-form-unit'>
                                <label>
                                    Status
                                </label>
                                <input
                                    value={userBio?.status}
                                    name="status"
                                    className='edit-status'
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className='eb-form-unit'>
                                <label>
                                    Website
                                </label>
                                <input
                                    value={userBio?.website}
                                    name="website"
                                    className='edit-website'
                                    onChange={changeHandler}
                                />
                            </div>


                        </div>

                        <div className='eb-submit-btn'>
                            <button className='eb-submit-input' value="Save" type="submit">Submit</button>
                            {/* <button onClick={() => {
                            // editPostHandler(editPostInput?._id, editPostInput);
                            setShowEditBioModal(false);
                        }} className='ep-btn'>Save</button> */}
                        </div>


                    </form>

                </div>

            </Modal>
        </>
    )
}
