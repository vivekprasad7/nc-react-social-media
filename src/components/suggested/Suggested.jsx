import React from 'react'
import "./Suggested.css"

export const Suggested = () => {
  return (
    <div className='suggested'>
        <div className='suggested-title'>
            <h3>Suggested For You</h3>
        </div>

        <div className='follow-unit '>
           <div className='suggested-profile'>
            
            <div className='suggested-profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='follow-uname'>
                <p>Vivek Prasad</p>
                <small>@nxvivek</small>
            </div>
            </div>

            <div className='follow-btn'>
                <button>Follow</button>
            </div>
        </div>

    </div>
  )
}
