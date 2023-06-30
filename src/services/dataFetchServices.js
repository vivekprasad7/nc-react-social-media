
// Post Services

import axios from "axios"

export const getAllPostsService = async () => {
    await axios({
            method:"GET",
            url:"/api/posts",
        }) 
}


export const getSinglePostService = async (postID) => {
    const res = await axios({
            method:"GET",
            url:`/api/posts/${postID}`,
        }) 

        console.log(res);
}
