import React from 'react'
import "./Bookmarks.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'

export const Bookmarks = () => {
  return (
    <div className='bookmarks-page'>
    <Sidebar/>
   <Feed pageTitle={"Bookmarks"} showBackBtn={true}/>
    <Widgets/>

</div>
  )
}
