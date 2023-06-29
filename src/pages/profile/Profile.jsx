import React from 'react'
import "./Profile.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Widgets } from '../../components/widgets/Widgets'
import { ProfileCard } from '../../components/profile-card/ProfileCard'

export const Profile = () => {
  return (
    <div className='profile-page'>
        <Sidebar/>

        <div className='feed'>
        <div className='feed-top'>
          <div className='feet-title'>
              <h3>Profile</h3>
          </div>

            <div className="nav-icon">
            <i class="fa-solid fa-caret-down icon-circle"></i>
            <ul className='nav-dropdown'>
              <li className='side-nav'>Trending</li>
              <li className='side-nav'>  Latest</li>
            </ul>
               
            </div>
      
        </div>

        <ProfileCard/>

    </div>


















        {/* <main className='profile-card'>
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
        </main> */}

        <Widgets/>
        

    </div>
  )
}
