import React from 'react'
import "./Sidebar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext'
import { getAllPostsService, getSinglePostService } from '../../services/dataFetchServices'

export const Sidebar = () => {
  const{displayProps, setDisplayProps} = useAuthContext();
  const {authState} = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className='sidebar'>

        <div className='site-title'>
            <h3>cardz.</h3>
        </div>

        <div className='sidebar-menu'>
        <NavLink
          className="side-nav"
          to="/"
        >
          <i className="fa-solid fa-home"></i>{" "}
          <span className="nav-title">Home</span>
        </NavLink>
        <NavLink
          className="side-nav"
          to="/explore"
        >
          <i className="fa-regular fa-compass"></i>{" "}
          <span className="nav-title">Explore</span>
        </NavLink>
        <NavLink
          className="side-nav"
          to="/bookmarks"
        >
          <i className="fa-regular fa-bookmark "></i>{" "}
          <span className="nav-title">
            Bookmarks{" "}
            {/* {bookmarkState?.bookmark?.length > 0 &&
              `(${bookmarkState?.bookmark?.length})`} */}
          </span>
        </NavLink>
        <NavLink
          className="side-nav"
          to={`/profile/${authState?.user?.username}`}
        >
          <i className="fa-regular fa-user"></i>{" "}
          <span  className="nav-title">Profile</span>
        </NavLink>
        </div>

          <div className='create-post-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-bolt icon-circle"></i>
          </div>

          <div className='create-post-icon'>
          <i onClick={() => getSinglePostService()} class="fa-solid fa-heart icon-circle"></i>
          </div>


    </div>
  )
}
