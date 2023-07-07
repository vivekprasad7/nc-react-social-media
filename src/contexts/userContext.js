import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { addBookmarkService, editUserService, followUserService, getAllBookmarksService, getAllUsersService, removeBookmarkService, unfollowUserService } from "../services/dataFetchServices";
import { useState } from "react";
import { useAuthContext } from "./authContext";
import { useEffect } from "react";
import { userReducer } from "../reducers/userReducer";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const initialUserState = {
        users:[],
        bookmarks:[],
        searchInput:"",
        user:{},
    }

    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const {authState, authDispatch} = useAuthContext();
    const [ userLoading, setUserLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getAllUsers = async () => {
        setUserLoading(true);
        try{
            const {data, status} = await getAllUsersService();

            if(status === 200 || status === 201){
                userDispatch({type:"GET_ALL_USERS", payload: data?.users});
                setUserLoading(false);
            }

        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
            setUserLoading(false);
        }
    }


    const editUserHandler = async(userData) => {
        try{
            const {data, status} = await editUserService(userData, authState?.token);

            if(status === 201){
                userDispatch({type:"UPDATE_USER_DATA", payload: data?.user});
                authDispatch({type:"SET_USER", payload: data?.user});
                toast.success("Profile Updated!")
            }
        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
        }
    }


    const followUserHandler = async (followUserID) =>{
        try{
            const {data, status} = await followUserService(followUserID, authState?.token);
            if(status === 200 || status === 201){
                userDispatch({type:"UPDATE_USER_DATA", payload: data?.user});
                userDispatch({type:"UPDATE_USER_DATA", payload: data?.followUser});
                authDispatch({type:"SET_USER", payload: data?.user});
                toast.success(`Followed @${data?.followUser.username}`);
            }
        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
        }
    }

    const unfollowUserHandler = async (followUserID) =>{
        try{
            const {data, status} = await unfollowUserService(followUserID, authState?.token);
            if(status === 200 || status === 201){
                userDispatch({type:"UPDATE_USER_DATA", payload: data?.user});
                userDispatch({type:"UPDATE_USER_DATA", payload: data?.followUser});
                authDispatch({type:"SET_USER", payload: data?.user});
                toast.success(`Unfollowed @${data?.followUser.username}`);
            }
        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
        }
    }

        const getAllBookmarks = async() => {
            setIsLoading(true);
            try{
                const {data, status} = await getAllBookmarksService();
                if(status === 200){
                    userDispatch({type: "GET_ALL_BOOKMARKS", payload: data?.bookmarks})
                    setIsLoading(false);
                }
            } catch(e) {
                console.error(e);
                toast.error(e.response.data.errors[0]);
                setIsLoading(false);
            }
        }


        const addBookmarkHandler = async (postID) =>{
            setIsLoading(true);
            try{
                const {data, status} = await addBookmarkService(postID, authState?.token);
                if( status === 200 || status === 201){
                    userDispatch({type: "ADD_BOOKMARK", payload: data?.bookmarks});
                    setIsLoading(false);
                    toast.success("Added to Bookmarks!")
                }
            } catch(e){
                console.error(e);
                toast.error(e.response.data.errors[0]);
                setIsLoading(false);
            }
        }

        const removeBookmarkHandler = async (postID) => {
            setIsLoading(true);
            try{
                const {data, status} = await removeBookmarkService(postID, authState?.token);
                if(status ===200 || status === 201){
                    userDispatch({type:"REMOVE_BOOKMARK", payload: data?.bookmarks});
                    setIsLoading(false);
                    toast.success("Removed from Bookmark!")
                }
            } catch(e){
                console.error(e);
                toast.error(e.response.data.errors[0]);
                setIsLoading(false);
            }
        }



        useEffect(()=> {
            authState?.token && getAllUsers();
          
        }, [authState?.token])



    return(
        <UserContext.Provider value={{
            userState,
            userDispatch,
            getAllUsers,
            editUserHandler,
            followUserHandler,
            unfollowUserHandler,
            getAllBookmarks,
            addBookmarkHandler,
            removeBookmarkHandler,
            userLoading,
            setUserLoading,
            isLoading,
            setIsLoading
        }}>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);