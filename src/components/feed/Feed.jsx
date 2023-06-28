import React from 'react'
import "./Feed.css"

export const Feed = () => {
  return (
    <div className='feed'>
        <div className='feed-top'>
          <div className='feet-title'>
              <h3>Home</h3>
          </div>

            <div className="nav-icon">
            <i class="fa-solid fa-caret-down icon-circle"></i>
            <ul className='nav-dropdown'>
              <li className='side-nav'>Trending</li>
              <li className='side-nav'>  Latest</li>
            </ul>
               
            </div>
            {/* <div className='trending-toggle'>
                <h3>Trending</h3>
                {" |"}
                <h3>Latest</h3>
            </div> */}
        </div>

    </div>
  )
}