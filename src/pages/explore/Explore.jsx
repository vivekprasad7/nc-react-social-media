import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { usePostContext } from '../../contexts/postContext'
import { MobileMenu } from '../../components/mobile-menu/MobileMenu'

export const Explore = () => {
  const {postState, isLoading} = usePostContext();
  return (
    <>
    <div className='explore-page'>
    <Sidebar/>
   <Feed pageTitle={"Explore"} feedPosts={postState?.posts} isLoading={isLoading}/>
    <Widgets/>

</div>
 <div>
 <MobileMenu/>
</div>
</>

  )
}
