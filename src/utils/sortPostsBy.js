export const sortPostsBy = (posts, sortType) => {


    if(sortType === "TRENDING"){
       return posts.sort((a,b) => b.likes.likeCount - a.likes.likeCount)
    }
    if(sortType === "LATEST"){
        return posts.sort((a,b) => new Date(b.createdAt)  - new Date(a.createdAt))
    }
    if(sortType === "OLDEST"){
        return posts.sort((a,b) => new Date(a.createdAt)  - new Date(b.createdAt))
    }
    return posts.sort((a,b) => new Date(b.createdAt)  - new Date(a.createdAt));
}