import React from 'react'
import "./MobileMenu.css"
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext';

export const MobileMenu = () => {
    const navigate = useNavigate();
    const{authState, displayProps, setDisplayProps} = useAuthContext();


  return (
    <div className='mobile-menu'>
              <div className='inner-mobile-menu'>

           <div  onClick={() => navigate('/')} className='mobile-icon'>
           <i class="fa fa-home"></i>    
               </div>

        <div  onClick={() => navigate('/explore')}className='mobile-icon'>
        <i className="fa-regular fa-compass"></i>{" "}
        </div>

       <div className='create-post-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-bolt icon-circle"></i>
          </div>

        <div onClick={() => navigate('/bookmarks')} className='mobile-icon'>
        <i className="fa-regular fa-bookmark "></i>{" "}
        </div>

        <div onClick={() => navigate(`/profile/${authState?.user?.username}`)} className='mobile-icon'>
        <i className="fa-regular fa-user"></i>{" "}
        </div>

        </div>

    </div>
  )
}
