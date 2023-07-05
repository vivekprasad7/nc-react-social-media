import React from 'react'
import "./Bookmarks.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { useNavigate } from 'react-router-dom'

export const Bookmarks = () => {
  const navigate = useNavigate();
  return (
    <div className='bookmarks-page'>
    <Sidebar/>
    <div className='bookmarks-section'>
    <div className='feed-top'>
          <div className='feet-title'>
              <h3>Bookmarks</h3>
          </div>

          {
             <div className="nav-icon">
              <i  onClick={() => navigate("/")}class="fa-solid fa-arrow-left icon-circle"></i>
           
            </div>
          }
          </div>

    </div>
   {/* <Feed pageTitle={"Bookmarks"} showBackBtn={true}/> */}
    <Widgets/>

</div>
  )
}
