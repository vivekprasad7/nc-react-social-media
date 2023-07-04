
// Post Services

import axios from "axios"

export const getAllPostsService = async () => 
   await axios({
            method:"GET",
            url:'/api/posts',
        }) 



export const getSinglePostService = async (postID) => {
     return await axios({
            method:"GET",
            url:`/api/posts/${postID}`,
        }) 
}


export const createNewPostService = async (postData, token) => {
    return await axios({
        method:"POST",
        url:`api/posts`,
        data:{postData},
        headers:{authorization: token},
    })
}

export const editPostService = async ( postID, postData, token) =>{
    return await axios.post(
        `/api/posts/edit/${postID}`,
        {postData},
        {headers : {authorization : token}}
    )
}

 
export const likePostService = async (postID, token) => {
    return await axios({
        method:"POST",
        url:`/api/posts/like/${postID}`,
        headers:{authorization:token},
    })
}


export const dislikePostService = async (postID, token) => {
    return await axios({
        method:"POST",
        url:`/api/posts/dislike/${postID}`,
        headers:{authorization:token},
    })
}


export const deletePostService = async ( postID, token) =>{
    return await axios({
        method:'DELETE',
        url:`/api/posts/${postID}`,
        headers:{authorization:token},
    })
}
