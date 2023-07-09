import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { usePostContext } from '../../contexts/postContext'
import { useAuthContext } from '../../contexts/authContext'
import { sortPostsBy } from '../../utils/sortPostsBy'

export const Home = () => {
  const {postState, isLoading} = usePostContext();
  const {authState} = useAuthContext();

  const followingUsersPosts = postState?.posts?.filter((post) => 
    authState?.user?.following?.some((user) => user?.username === authState?.user?.username) 
    || post?.username === authState?.user?.username
  )

  const sortedPosts = sortPostsBy(followingUsersPosts, postState?.sortType );

  
  return (
    <div className='home-page'>
        <Sidebar/>
       <Feed pageTitle={"Home"} feedPosts={sortedPosts} isLoading={isLoading} />
        <Widgets/>
    </div>
  )
}
