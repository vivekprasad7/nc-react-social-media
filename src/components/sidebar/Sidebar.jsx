import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
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
          to="/profile"
        >
          <i className="fa-regular fa-user"></i>{" "}
          <span className="nav-title">Profile</span>
        </NavLink>
        </div>




    </div>
  )
}
