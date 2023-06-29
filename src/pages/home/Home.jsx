import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'

export const Home = () => {
  return (
    <div className='home-page'>
        <Sidebar/>
       <Feed/>
        <Widgets/>

    </div>
  )
}
