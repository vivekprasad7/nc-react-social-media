import { useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postReducer } from "../reducers/postReducer";
import { createNewPostService, dislikePostService, editPostService, getAllPostsService, getSinglePostService, likePostService } from "../services/dataFetchServices";
import { toast } from "react-hot-toast";
import { useAuthContext } from "./authContext";

const PostContext = createContext();

export const PostContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    const {authState : { token}} = useAuthContext();

    const postInitialState = {
        posts:[],
        post:{},
        sortType:"Latest",
    }

    const [ postState, postDispatch] = useReducer(postReducer, postInitialState)

    const getAllPosts = async () => {
        setIsLoading(true);
        try{
            const {data, status} = await getAllPostsService();
            if(status === 200){
                postDispatch({type: "GET_ALL_POSTS", payload: data?.posts})
                setIsLoading(false)
            }
        } catch(e) {
            console.error(e);
        }
    }

    const getSinglePost = async (postID) => {
        setIsLoading(true);
        try{
            const {data, status} = await getSinglePostService(postID);
            if(status === 200 || status === 201){
                postDispatch({type:"GET_SINGLE_POST", payload: data?.post})
                setIsLoading(false);
            }

        } catch(e){
            console.error(e)
        }
    }

    const createNewPost = async (postData) => {
        setIsLoading(true)
        try{
            const {data, status} = await createNewPostService(postData, token)
            if(status === 201){
                postDispatch({type:"CREATE_NEW_POST", payload: data?.posts})
                setIsLoading(false);
            }
        } catch(e){
            console.error(e);
            toast.error("Oops!, Something went wrong. Please try again.")
            setIsLoading(false);
        }
    }

    const editPostHandler = async (postID, postData) =>{
        try{
            const {data, status} = await editPostService(postID, postData, token)

            if(status === 201){
                postDispatch({type : "EDIT_POST", payload: data?.posts})
            }
        } catch(e){
            console.error(e)
            toast.error("Oops!, Something went wrong. Please try again.")
        }
    }

    const likePostHandler = async (postID) =>{
        try{
            const {data, status} = await likePostService(postID, token)

            if(status === 200 || status === 201){
                postDispatch({type : "LIKE_POST", payload: data?.posts})
            }
        } catch(e){
            console.error(e)
            toast.error("Oops!, Something went wrong. Please try again.")
        }
    }

    const dislikePostHandler = async (postID) =>{
        try{
            const {data, status} = await dislikePostService(postID, token)

            if(status === 200 || status === 201){
                postDispatch({type : "DISLIKE_POST", payload: data?.posts})
            }
        } catch(e){
            console.error(e)
            toast.error("Oops!, Something went wrong. Please try again.")
        }
    }
    


 


    return(
        <PostContext.Provider value={{postState, postDispatch}}>{children}</PostContext.Provider>
    )
}

export const usePostContext = () => useContext(PostContext);