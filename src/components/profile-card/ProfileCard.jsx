import React from 'react'
import "./ProfileCard.css"

export const ProfileCard = () => {
    return (
        <main className='profile-card'>
            <div className='profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='profile-bio'>

                <div className='profile-title'>
                    <h3 className='profile-name'>Vivek Prasad</h3>
                    <p className='profile-username'>@nxvivek</p>
                    <button className='profile-follow-btn'>Follow</button>
                </div>

                <div className='profile-status'>
                    <p>I am awesome.</p>
                </div>

                <div className='profile-links'>
                   

                    <div className='profile-link-unit'>
                        <h3>10</h3>
                        <p>Following</p>
                    </div>
                    <div className='profile-link-unit'>
                        <h3>2</h3>
                        <p>Posts</p>
                    </div>

                    <div className='profile-link-unit'>
                        <h3>10</h3>
                        <p>Followers</p>
                    </div>

                </div>

            </div>


        </main>
    )
}
