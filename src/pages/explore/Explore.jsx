import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { usePostContext } from '../../contexts/postContext'
import { MobileMenu } from '../../components/mobile-menu/MobileMenu'
import { sortPostsBy } from '../../utils/sortPostsBy'

export const Explore = () => {
  const {postState, isLoading} = usePostContext();

  const sortedPosts = sortPostsBy(postState?.posts, postState?.sortType );

  return (
    <>
    <div className='explore-page'>
    <Sidebar/>
   <Feed pageTitle={"Explore"} feedPosts={sortedPosts} isLoading={isLoading}/>
    <Widgets/>

</div>
 <div>
 <MobileMenu/>
</div>
</>

  )
}
