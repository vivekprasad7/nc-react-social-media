import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { followUserService, getAllUsersService, unfollowUserService } from "../services/dataFetchServices";
import { useState } from "react";
import { useAuthContext } from "./authContext";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const initialUserState = {
        users:[],
        bookmarks:[],
        searchInput:"",
        user:{},
    }

    const [userState, userDispatch] = useReducer(useReducer, initialUserState);
    const {authState, authDispatch} = useAuthContext();
    const [ userLoading, setUserLoading] = useState(false);

    const getAllUsers = async () => {
        try{
            const {data, status} = await getAllUsersService();

            if(status === 200 || status === 201){
                userDispatch({type:"GET_ALL_USERS", payload: data?.users});
                setUserLoading(false);
            }

        } catch(e){
            console.error(e);
            toast.error(e.response.data.errors[0]);
        }
    }


    const followUserHandler = async (userID) =>{
        try{
            const {data, status} = await followUserService(userID, authState?.token);

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

    const unfollowUserHandler = async (userID) =>{
        try{
            const {data, status} = await unfollowUserService(userID, authState?.token);

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

    




    return(
        <UserContext.Provider>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);