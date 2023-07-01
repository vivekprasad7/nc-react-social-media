import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { usePostContext } from '../../contexts/postContext'

export const Home = () => {
  const {postState, isLoading} = usePostContext();
  const {posts} = postState;
  return (
    <div className='home-page'>
        <Sidebar/>
       <Feed pageTitle={"Home"} feedPosts={posts} isLoading={isLoading} />
        <Widgets/>
    </div>
  )
}
