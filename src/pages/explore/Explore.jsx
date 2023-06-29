import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'

export const Explore = () => {
  return (
    <div className='explore-page'>
    <Sidebar/>
   <Feed pageTitle={"Explore"}/>
    <Widgets/>

</div>
  )
}
