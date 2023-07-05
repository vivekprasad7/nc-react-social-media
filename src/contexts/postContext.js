import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postReducer } from "../reducers/postReducer";
import { addCommentService, createNewPostService, deleteCommentService, deletePostService, dislikePostService, editCommentService, editPostService, getAllPostsService, getSinglePostService, likePostService } from "../services/dataFetchServices";
import { toast } from "react-hot-toast";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const { authState } = useAuthContext();
    const navigate = useNavigate();

    const postInitialState = {
        posts: [],
        post: {},
        sortType: "Latest",
    }

    const [postState, postDispatch] = useReducer(postReducer, postInitialState)

    const getAllPosts = async () => {
        setIsLoading(true);
        try {
            const { data, status } = await getAllPostsService();

            console.log(data)
            if (status === 200 || status === 201) {
                postDispatch({ type: "GET_ALL_POSTS", payload: data?.posts });
                setIsLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const getSinglePost = async (postID) => {
        setIsLoading(true);
        try {
            const { data, status } = await getSinglePostService(postID);
            if (status === 200 || status === 201) {
                postDispatch({ type: "GET_SINGLE_POST", payload: data?.post })
                setIsLoading(false);
            }

        } catch (e) {
            console.error(e)
        }
    }

    const createNewPost = async (postData) => {
        setIsLoading(true)
        try {
            const { data, status } = await createNewPostService(postData, authState?.token)
            if (status === 201) {
                postDispatch({ type: "CREATE_NEW_POST", payload: data?.posts })
                setIsLoading(false);
            }
        } catch (e) {
            console.error(e);
            toast.error("Oops!, Something went wrong. Please try again.")
            setIsLoading(false);
        }
    }

    const editPostHandler = async (postID, postData) => {
        try {
            const { data, status } = await editPostService(postID, postData, authState?.token);

            if (status === 201) {
                postDispatch({ type: "EDIT_POST", payload: data?.posts })
            }
        } catch (e) {
            console.error(e)
            toast.error("Oops!, Something went wrong. Please try again.")
        }
    }

    const likePostHandler = async (postID) => {
        try {
            const { data, status } = await likePostService(postID, authState?.token)

            if (status === 200 || status === 201) {
                postDispatch({ type: "LIKE_POST", payload: data?.posts })
            }
            toast.success("Post Liked!")

        } catch (e) {
            console.error(e)
            toast.error("Oops!, Something went wrong. Please try again.")
        }
    }

    const dislikePostHandler = async (postID) => {
        try {
            const { data, status } = await dislikePostService(postID, authState?.token)

            if (status === 200 || status === 201) {
                postDispatch({ type: "DISLIKE_POST", payload: data?.posts })
            }
        } catch (e) {
            console.error(e);
            toast.error("Oops!, Something went wrong. Please try again.");
        }
    }

    const deletePostHandler = async (postID) => {
        try {
            const { data, status } = await deletePostService(postID, authState?.token);

            if (status === 200 || status === 201) {
                postDispatch({ type: "DELETE_POST", payload: data?.posts });
                setTimeout(() => {
                    navigate("/");
                    window.scroll({ top: 0, behavior: "smooth" });
                }, 1800)
                toast.success("Post Deleted!");

            }

        } catch (e) {
            console.error(e);
            toast.error("Oops!, Something went wrong. Please try again.");


        }
    }


    const addCommentHandler = async (postID, commentData) => {
        try{
        const {data, status} = await addCommentService(postID, commentData, authState?.token );
        if(status === 201 || status === 200){
            postDispatch({type:"ADD_COMMENT", payload: data?.posts})
            toast.success("Comment Added!");
        }
        } catch(e){
            console.error(e);
            toast.error("Oops, Something went wrong! Please try again.")
        }
    }

    const editCommentHandler = async (postID, commentID, commentData) => {
        try{
        const {data, status} = await editCommentService(postID, commentID, commentData, authState?.token);
        if(status === 201 || status === 200){
            postDispatch({type:"EDIT_COMMENT", payload: data?.posts})
            toast.success("Comment Edited!");
        }
        } catch(e){
            toast.error(e.response.data.errors[0])
        }
    };

    const deleteCommentHandler = async (postID, commentID) => {
        try{
        const {data, status} = await deleteCommentService( postID, commentID, authState?.token);
        if(status === 201 || status === 200){
            postDispatch({type:"DELETE_COMMENT", payload: data?.posts})
            toast.success("Comment Deleted!");
        }
        } catch(e){
            toast.error(e.response.data.errors[0])
        }
    }



    useEffect(() => {
        if (authState?.token) {
            getAllPosts();
        }

    }, [authState?.token])





    return (
        <PostContext.Provider value={{ postState, postDispatch, isLoading, likePostHandler, dislikePostHandler, createNewPost, editPostHandler, deletePostHandler, addCommentHandler, editCommentHandler, deleteCommentHandler, getSinglePost }}>{children}</PostContext.Provider>
    )
}

export const usePostContext = () => useContext(PostContext);