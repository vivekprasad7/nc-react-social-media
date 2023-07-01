import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postReducer } from "../reducers/postReducer";

const PostContext = createContext();

export const PostContextProvider = ({children}) => {

    const postInitialState = {
        postLoading:false,
        posts:[],
        post:{},
        sortType:"Latest",
    }

    const [ postState, postDispatch] = useReducer(postReducer, postInitialState)



    return(
        <PostContext.Provider value={{postState, postDispatch}}>{children}</PostContext.Provider>
    )
}

export const usePostContext = () => useContext(PostContext);