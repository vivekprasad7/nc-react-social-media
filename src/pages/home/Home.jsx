import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Widgets } from '../../components/widgets/Widgets'
import { usePostContext } from '../../contexts/postContext'
import { useAuthContext } from '../../contexts/authContext'
import { sortPostsBy } from '../../utils/sortPostsBy'
import { MobileMenu } from '../../components/mobile-menu/MobileMenu'

export const Home = () => {
  const {postState, isLoading} = usePostContext();
  const {authState} = useAuthContext();

  const followingUsersPosts = postState?.posts?.filter((post) => {
    const currentUser = authState?.user;
    const isCurrentUserFollowing = currentUser?.following?.some(
      (user) => user?.username === post?.username
    );
    const isPostCreatedByCurrentUser = post?.username === currentUser?.username;
  
    return isCurrentUserFollowing || isPostCreatedByCurrentUser;
  });
  


  const sortedPosts = sortPostsBy(followingUsersPosts, postState?.sortType );

  
  return (
    <>
     <div className='home-page'>
        <Sidebar/>
       <Feed pageTitle={"Home"} feedPosts={sortedPosts} isLoading={isLoading} />
        <Widgets/>
    </div>
    <div>
      <MobileMenu/>
    </div>
    </>
   
  )
}
