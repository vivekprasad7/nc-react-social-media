import React from 'react'
import "./Feed.css"
import { useNavigate } from 'react-router-dom'
import { PostCard } from '../post-card/PostCard';
import { Loading } from '../loader/loading';

export const Feed = ({pageTitle, showBackBtn, feedPosts, isLoading}) => {

  const navigate = useNavigate();

  return (
    <div className='feed'>
        <div className='feed-top'>
          <div className='feet-title'>
              <h3>{pageTitle}</h3>
          </div>

          {
            showBackBtn ?  <div className="nav-icon">
              <i  onClick={() => navigate("/")}class="fa-solid fa-arrow-left icon-circle"></i>
            {/* <ul className='nav-dropdown'>
              <li className='side-nav'>Trending</li>
              <li className='side-nav'>  Latest</li>
            </ul> */}
               
            </div> :  <div className="nav-icon">
            <i class="fa-solid fa-caret-down icon-circle"></i>
            <ul className='nav-dropdown'>
              <li className='side-nav'>Trending</li>
              <li className='side-nav'>  Latest</li>
            </ul>
               
            </div>
          }

           
      
        </div>

        {   isLoading ? <Loading/> :
            feedPosts.map((item) => {

              return(
                <PostCard postItem={item}/>
              )
            })
        }

    
    </div>
  )
}
