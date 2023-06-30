import React from 'react'
import "./PostCard.css"


export const PostCard = () => {
  
  return (
    <div className='post-card'>
         <div className='post-card-profile'>

         <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li className='side-nav'>Edit</li>
              <li className='side-nav'> Delete</li>
            </ul>
               
            </div>

            
            <div className='post-profile-img'>
                <i class="fa fa-circle"></i>
            </div>
            <div className='post-card-uname'>
                <p>Vivek Prasad</p>
                <small>@nxvivek</small>
            </div>
            </div>

            <div className='pc-content'>
                <p>Order Today!</p>
                <img src="https://res.cloudinary.com/darl8idou/image/upload/v1686057942/cakefactory/more-img-norah_bq8oa3.webp"/>
            </div>

            {/* <hr></hr> */}
            <div className='pc-links'>
                <i class="fa-sharp fa-regular fa-comment"></i>
                <i class="fa-solid fa-heart"></i>

                <i class="fa-solid fa-share"></i>
               <i class="fa fa-bookmark"></i> 

                </div>
    </div>
  )
}
